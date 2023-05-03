<?php
include('../models/connect.php');


/* INSERT REQUEST */
if (isset($_FILES['image_soutien']) && isset($_POST["nom_soutien"]) && isset($_POST["link_soutien"])) {
    $extensions_ok = array('png', 'jpg');
    if (filesize($_FILES['image_soutien']['size'] > 3072000)  || !in_array(substr(strrchr($_FILES['image_soutien']['name'], '.'), 1), $extensions_ok)) {
        echo "<p> Extension ou taille incorrect </p>";
    } else {
        $ext = substr(strrchr($_FILES['image_soutien']['name'], '.'), 1);
        if (isset($_POST['nom_soutien'])) {
            $new_fileName = str_replace(' ', '', $_POST['nom_soutien']);
            $image = "../../SRL/soutiens/" . $new_fileName . ".$ext";
            move_uploaded_file($_FILES['image_soutien']['tmp_name'], $image);
        }
    }

    $nom = ucwords($_POST['nom_soutien']);
    $link = $_POST['link_soutien'];

    try {
        $req = $bdd->prepare("INSERT INTO collaborateurs(nom_coll, lien_coll, image_coll)
                            VALUES (:nom_coll, :lien_coll, :image_coll)");
        $req->bindParam(':nom_coll', $nom);
        $req->bindParam(':lien_coll', $link);
        $req->bindParam(':image_coll', $image);
        $req->execute();
        header('Location: ../views/admin.php');
    } catch (Exception $e) {
        die("Erreur:" . $e->getMessage());
    }
}

/* DELETE REQUEST */
if (!empty($_POST['form_delete'])) {
    $file_soutien = $_POST['file_delete'];
    unlink($file_soutien);
    $req = $bdd->prepare('DELETE FROM collaborateurs WHERE id_coll=:id_coll');
    $req->bindParam(':id_coll', $_POST['id_delete']);
    $req->execute();
    header('Location: ../views/admin.php');
}

/* UPDATE REQUEST */
if (!empty($_POST['form_update'])) {
    try {
        if (!empty($_FILES['new_image_coll'])) {

            $extensions_ok = array('png', 'jpg');
            if (filesize($_FILES['new_image_coll']['size'] > 3072000)  || !in_array(substr(strrchr($_FILES['new_image_coll']['name'], '.'), 1), $extensions_ok)) {
                // Seting old image if the new image is null or incorret
                $new_image = $_POST['old_image_coll'];

            } else {
                $ext = substr(strrchr($_FILES['new_image_coll']['name'], '.'), 1);
                if (isset($_POST['nom_coll'])) {
                    $new_fileName = str_replace(' ', '', $_POST['nom_coll']);
                    $new_image = "../../SRL/soutiens/" . $new_fileName . ".$ext";
                    move_uploaded_file($_FILES['new_image_coll']['tmp_name'], $new_image);
                }
            }
        }
        // Deleting old image if it not change
        if ($new_image != $_POST['old_image_coll']) {
                unlink($_POST['old_image_coll']);
        }

        $sql = 'UPDATE collaborateurs
            SET nom_coll=:nom_coll, 
                lien_coll=:lien_coll, 
                image_coll=:image_coll';
        $sql .= " WHERE id_coll=:id_coll";
        $req = $bdd->prepare($sql);
        
        $nom = ucwords($_POST['nom_coll']);
        $link = $_POST['lien_coll'];

        $req->bindParam(':id_coll', $_POST['id_coll']);
        $req->bindParam(':nom_coll', $nom);
        $req->bindParam(':lien_coll', $link);
        $req->bindParam(':image_coll', $new_image);
        $req->execute();
        header('Location: ../views/admin.php');
    } catch (Exception $e) {
        die("Erreur:" . $e->getMessage());
    }
}

/* SELEC REQUEST */
try {
    $tab_membres = $bdd->query("SELECT * FROM collaborateurs")->fetchAll(PDO::FETCH_ASSOC);
    die(json_encode($tab_membres));
} catch (Exception $e) {
    die('Erreur: ' . $e->getMessage());
}