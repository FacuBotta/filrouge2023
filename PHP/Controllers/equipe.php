<?php
include('../models/connect.php');


/* INSERT REQUEST */
if (isset($_FILES['image_membre']) && isset($_POST["nom_membre"]) && isset($_POST["prenom_membre"]) && isset($_POST["vignette_membre"]) && isset($_POST["description_membre"]) && isset($_POST["vignette_membre_esp"]) && isset($_POST["description_membre_esp"])) {
    $extensions_ok = array('png', 'jpg');
    if (filesize($_FILES['image_membre']['size'] > 3072000)  || !in_array(substr(strrchr($_FILES['image_membre']['name'], '.'), 1), $extensions_ok)) {
        echo "<p> Extension ou taille incorrect </p>";
    } else {
        $ext = substr(strrchr($_FILES['image_membre']['name'], '.'), 1);
        if (isset($_POST['prenom_membre'])) {
            $new_fileName = str_replace(' ', '', $_POST['prenom_membre']);
            $image = "../../SRL/membres/" . $new_fileName . ".$ext";
            move_uploaded_file($_FILES['image_membre']['tmp_name'], $image);
        }
    }

    $nom = ucwords($_POST['nom_membre']);
    $prenom = ucwords($_POST['prenom_membre']);

    $description = array(
        'description_fr' => ucfirst($_POST['description_membre']),
        'description_esp' => ucfirst($_POST['description_membre_esp']),
        'vignette_fr' => ucfirst($_POST['vignette_membre']),
        'vignette_esp' => ucfirst($_POST['vignette_membre_esp'])
    );
    $description_json = json_encode($description);


    try {
        $req = $bdd->prepare("INSERT INTO membres(nom_membre, prenom_membre, image_membre, description_membre)
                            VALUES (:nom_membre, :prenom_membre, :image_membre, :description_membre)");
        $req->bindParam(':nom_membre', $nom);
        $req->bindParam(':prenom_membre', $prenom);
        $req->bindParam(':image_membre', $image);
        $req->bindParam(':description_membre', $description_json);
        $req->execute();
        header('Location: ../views/admin.php');
    } catch (Exception $e) {
        die("Erreur:" . $e->getMessage());
    }
}

/* DELETE REQUEST */
if (!empty($_POST['form_delete'])) {
    $file_membre = $_POST['file_delete'];
    unlink($file_membre);
    $req = $bdd->prepare('DELETE FROM membres WHERE id_membre=:id_membre');
    $req->bindParam(':id_membre', $_POST['id_delete']);
    $req->execute();
    header('Location: ../views/admin.php');
}

/* UPDATE REQUEST */
if (!empty($_POST['form_update'])) {
    try {
        if (!empty($_FILES['new_image_membre'])) {

            $extensions_ok = array('png', 'jpg');
            if (filesize($_FILES['new_image_membre']['size'] > 3072000)  || !in_array(substr(strrchr($_FILES['new_image_membre']['name'], '.'), 1), $extensions_ok)) {
                // Seting old image if the new image is null or incorret
                $new_image = $_POST['old_image_membre'];

            } else {
                $ext = substr(strrchr($_FILES['new_image_membre']['name'], '.'), 1);
                if (isset($_POST['prenom_membre'])) {
                    $new_fileName = str_replace(' ', '', $_POST['prenom_membre']);
                    $new_image = "../../SRL/membres/" . $new_fileName . ".$ext";
                    move_uploaded_file($_FILES['new_image_membre']['tmp_name'], $new_image);
                }
            }
        }
        // Deleting old image if it not change
        if ($new_image != $_POST['old_image_membre']) {
                unlink($_POST['old_image_membre']);
        }

        $sql = 'UPDATE membres
            SET nom_membre=:nom_membre, 
                prenom_membre=:prenom_membre, 
                image_membre=:image_membre,
                description_membre=:description_membre';
        $sql .= " WHERE id_membre=:id_membre";
        $req = $bdd->prepare($sql);
        
        $nom = ucwords($_POST['nom_membre']);
        $prenom = ucwords($_POST['prenom_membre']);

        $description = array(
            'description_fr' => ucfirst($_POST['description_membre']),
            'description_esp' => ucfirst($_POST['description_membre_esp']),
            'vignette_fr' => ucfirst($_POST['vignette_membre']),
            'vignette_esp' => ucfirst($_POST['vignette_membre_esp'])
        );
        $description_json = json_encode($description);

        $req->bindParam(':id_membre', $_POST['id_membre']);
        $req->bindParam(':nom_membre', $nom);
        $req->bindParam(':prenom_membre', $prenom);
        $req->bindParam(':description_membre', $description_json);
        $req->bindParam(':image_membre', $new_image);
        $req->execute();
        header('Location: ../views/admin.php');
    } catch (Exception $e) {
        die("Erreur:" . $e->getMessage());
    }
}

/* SELEC REQUEST */
try {
    $tab_membres = $bdd->query("SELECT * FROM membres")->fetchAll(PDO::FETCH_ASSOC);
    foreach ($tab_membres as &$membre) {
        $membre['description_membre'] = json_decode($membre['description_membre']);
    }
    die(json_encode($tab_membres));
} catch (Exception $e) {
    die('Erreur: ' . $e->getMessage());
}