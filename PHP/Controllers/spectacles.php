<?php
include('../models/connect.php');
/* INSERT REQUEST */
if ( isset($_POST['form_add'])
    && isset($_FILES['files_spectacle'])
    && isset($_FILES['affiche_spectacle'])
    && isset($_POST["titre_espectacle"])
    && isset($_POST["description_fr"])
    && isset($_POST["description_esp"])
    && isset($_POST["site_fr"])
    && isset($_POST["site_esp"])
) {
    $extensions_ok = array('png', 'jpg', 'svg');
    $MAX_SIZE = 3 * 1024 * 1024;
    if (
        filesize($_FILES['affiche_spectacle']['size'] > $MAX_SIZE)
        || !in_array(substr(strrchr($_FILES['affiche_spectacle']['name'], '.'), 1), $extensions_ok)
    ) {
        $_SESSION['message'] = "images error";
        header('Location: ../views/admin.php');
    } else {
        $ext = substr(strrchr($_FILES['affiche_spectacle']['name'], '.'), 1);
        if (isset($_POST['titre_espectacle'])) {
            $new_fileName = str_replace(' ', '', $_POST['titre_espectacle']);
            $affiche = "../../SRL/affiches/" . $new_fileName . ".$ext";
            move_uploaded_file($_FILES['affiche_spectacle']['tmp_name'], $affiche);
        };
    };
    $titre = ucwords($_POST['titre_espectacle']);
    $video = $_POST['video_spectacle'];

    $description = array(
        'description_fr' => ucfirst($_POST['description_fr']),
        'description_esp' => ucfirst($_POST['description_esp'])
    );
    $site = array(
        'site_fr' => ucfirst($_POST['site_fr']),
        'site_esp' => ucfirst($_POST['site_esp'])
    );
    $info = array();
    foreach ($_POST as $key => $value) {
        if (strpos($key, 'contenue_info_') === 0) {
            $index = substr($key, 14);
            $info[$index] = array(
                'titre_info_fr' => ucfirst($_POST['titre_info_fr_' . $index]),
                'titre_info_esp' => ucfirst($_POST['titre_info_esp_' . $index]),
                'contenue_info' => ucfirst($_POST['contenue_info_' . $index])
            );
        };
    };
    $images = array();

    if (isset($_FILES['files_spectacle'])) {
        $count = count($_FILES['files_spectacle']['name']);
        for ($i = 0; $i < $count; $i++) {
            $ext = strtolower(pathinfo($_FILES['files_spectacle']['name'][$i], PATHINFO_EXTENSION));
            $new_fileName = str_replace(' ', '', $titre . '_' . ($i + 1));
            $image = "../../SRL/spectacles/" . $new_fileName . ".$ext";
            if ($_FILES['files_spectacle']['size'][$i] <= $MAX_SIZE) {
                move_uploaded_file($_FILES['files_spectacle']['tmp_name'][$i], $image);
                $images[] = $image;
            } else {
                $_SESSION['message'] = "images error";
                header('Location: ../views/admin.php');
            };
        };
    };

    $description_json = json_encode($description);
    $site_json = json_encode($site);
    $images_json = json_encode($images);
    $info_json = json_encode($info);

    try {
        $req = $bdd->prepare("INSERT INTO spectacles(titre_spectacle,
                                                    description_spectacle,
                                                    site_spectacle,
                                                    info_spectacle,
                                                    affiche_spectacle,
                                                    images_spectacle,
                                                    video_spectacle)
                                VALUES (:titre_spectacle,
                                :description_spectacle,
                                :site_spectacle,
                                :info_spectacle,
                                :affiche_spectacle,
                                :images_spectacle,
                                :video_spectacle)
                            ");
        $req->bindParam(':titre_spectacle', $titre);
        $req->bindParam(':description_spectacle', $description_json);
        $req->bindParam(':site_spectacle', $site_json);
        $req->bindParam(':info_spectacle', $info_json);
        $req->bindParam(':affiche_spectacle', $affiche);
        $req->bindParam(':images_spectacle', $images_json);
        $req->bindParam(':video_spectacle', $video);
        $req->execute();
        $_SESSION['message'] = "add ok";
        header('Location: ../views/admin.php');
    } catch (Exception $e) {
        $_SESSION['message'] = "add error";
        header('Location: ../views/admin.php');
        // die("Erreur:" . $e->getMessage());
    };
};

/* DELETE REQUEST */
if (!empty($_POST['form_delete'])) {
    $file_spectacle_affiche = $_POST['file_delete'];
    $id_spectacle = $_POST['id_delete'];

    //Selecting the images's URL to the unlink function
    $tab_spectacles_images = $bdd->query("SELECT images_spectacle FROM spectacles
                                            WHERE id_spectacle = $id_spectacle")->fetchAll(PDO::FETCH_ASSOC);
    foreach ($tab_spectacles_images as &$image) {
        $image = json_decode($image['images_spectacle']);
        foreach ($image as $link_image) {
            unlink($link_image);
        };
    };
    unlink($file_spectacle_affiche);
    $req = $bdd->prepare('DELETE FROM spectacles WHERE id_spectacle=:id_spectacle');
    $req->bindParam(':id_spectacle', $_POST['id_delete']);
    $req->execute();
    $_SESSION['message'] = "deleted";
    header('Location: ../views/admin.php');
}

/* UPDATE REQUEST */
if (!empty($_POST['form_update'])) {
    if (
        isset($_POST['old_files_spectacle'])
        && isset($_POST["new_titre_espectacle"])
        && isset($_POST["new_description_fr"])
        && isset($_POST["new_site_fr"])
        && isset($_POST["new_description_esp"])
        && isset($_POST["new_site_esp"])
    ) {
        $extensions_ok = array('png', 'jpg');
        $MAX_SIZE = 3 * 1024 * 1024;
        if (!empty($_FILES['new_affiche_spectacle'])) {
            $extensions_ok = array('png', 'jpg');
            if (filesize($_FILES['new_affiche_spectacle']['size'] > 3072000)  || !in_array(substr(strrchr($_FILES['new_affiche_spectacle']['name'], '.'), 1), $extensions_ok)) {
                // Setting old image if the new image is null or incorret
                $new_affiche = $_POST['old_affiche_spectacle'];
            } else {
                $ext = substr(strrchr($_FILES['new_affiche_spectacle']['name'], '.'), 1);
                if (isset($_POST['new_titre_espectacle'])) {
                    $new_fileName = str_replace(' ', '', $_POST['new_titre_espectacle']);
                    $new_affiche = "../../SRL/affiches/" . $new_fileName . ".$ext";
                    move_uploaded_file($_FILES['new_affiche_spectacle']['tmp_name'], $new_affiche);
                };
            };
        };
        // Deleting old image if it not change
        if ($new_affiche != $_POST['old_affiche_spectacle']) {
            unlink($_POST['old_affiche_spectacle']);
        }

        $titre = ucwords($_POST['new_titre_espectacle']);
        $video = $_POST['new_video_spectacle'];

        $description = array(
            'description_fr' => ucfirst($_POST['new_description_fr']),
            'description_esp' => ucfirst($_POST['new_description_esp'])
        );
        $site = array(
            'site_fr' => ucfirst($_POST['new_site_fr']),
            'site_esp' => ucfirst($_POST['new_site_esp'])
        );

        $info = array();
        foreach ($_POST as $key => $value) {
            if (strpos($key, 'contenue_info_') === 0) {
                $index = substr($key, 14);
                $info[$index] = array(
                    'titre_info_fr' => ucfirst($_POST['titre_info_fr_' . $index]),
                    'titre_info_esp' => ucfirst($_POST['titre_info_esp_' . $index]),
                    'contenue_info' => ucfirst($_POST['contenue_info_' . $index])
                );
            };
        };

        $images = array();

        if (!empty($_FILES['new_files_spectacle']['name'][0])) {
            $old_images = $_POST['old_files_spectacle'];
            $images_array = explode(',', $old_images);
            foreach ($images_array as $link) {
                unlink($link);
            };
            $count = count($_FILES['new_files_spectacle']['name']);
            for ($i = 0; $i < $count; $i++) {
                $ext = strtolower(pathinfo($_FILES['new_files_spectacle']['name'][$i], PATHINFO_EXTENSION));
                $new_fileName = str_replace(' ', '', $titre . '_' . ($i + 1));
                $image = "../../SRL/spectacles/" . $new_fileName . ".$ext";
                if ($_FILES['new_files_spectacle']['size'][$i] <= $MAX_SIZE) {
                    move_uploaded_file($_FILES['new_files_spectacle']['tmp_name'][$i], $image);
                    $images[] = $image;
                    $images_json = json_encode($images);
                } else {
                    $_SESSION['message'] = "images error";
                    header('Location: ../views/admin.php');
                    // echo "<p> Extension ou taille incorrect </p>";
                };
            };
        } else {
            $old_images = $_POST['old_files_spectacle'];
            $images_array = explode(',', $old_images);
            $images_json = json_encode($images_array);
        };

        $description_json = json_encode($description);
        $site_json = json_encode($site);
        $info_json = json_encode($info);

        try {
            $sql = 'UPDATE spectacles
                    SET titre_spectacle=:titre_spectacle, 
                        description_spectacle=:description_spectacle, 
                        site_spectacle=:site_spectacle,
                        info_spectacle=:info_spectacle,
                        site_spectacle=:site_spectacle,
                        affiche_spectacle=:affiche_spectacle,
                        images_spectacle=:images_spectacle,
                        video_spectacle=:video_spectacle';
            $sql .= " WHERE id_spectacle=:id_spectacle";

            $req = $bdd->prepare($sql);
            $req->bindParam(':id_spectacle', $_POST['id_spectacle']);
            $req->bindParam(':titre_spectacle', $titre);
            $req->bindParam(':description_spectacle', $description_json);
            $req->bindParam(':site_spectacle', $site_json);
            $req->bindParam(':info_spectacle', $info_json);
            $req->bindParam(':affiche_spectacle', $new_affiche);
            $req->bindParam(':images_spectacle', $images_json);
            $req->bindParam(':video_spectacle', $video);
            $req->execute();
            $_SESSION['message'] = "update ok";
            header('Location: ../views/admin.php');
        } catch (Exception $e) {
            $_SESSION['message'] = "add error";
            header('Location: ../views/admin.php');
            // die("Erreur:" . $e->getMessage());
        };
    };
};

/* SELECT REQUEST */
try {
    $req = $bdd->prepare("SELECT * FROM spectacles");
    $req->execute();
    $tab_spectacles = $req->fetchAll(PDO::FETCH_ASSOC);

    foreach ($tab_spectacles as &$spectacle) {
        $spectacle['description_spectacle'] = json_decode($spectacle['description_spectacle']);
        $spectacle['site_spectacle'] = json_decode($spectacle['site_spectacle']);
        $spectacle['info_spectacle'] = json_decode($spectacle['info_spectacle']);
        $spectacle['images_spectacle'] = json_decode($spectacle['images_spectacle']);
    };
    unset($spectacle);
    die(json_encode($tab_spectacles));
} catch (Exception $e) {
    die('Erreur: ' . $e->getMessage());
};
