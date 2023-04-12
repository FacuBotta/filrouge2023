<?php
include('../models/connect.php');

if (isset($_FILES['image_membre']) && isset($_POST["nom_membre"]) && isset($_POST["prenom_membre"]) && isset($_POST["vignette_membre"]) && isset($_POST["description_membre"]) && isset($_POST["vignette_membre_esp"]) && isset($_POST["description_membre_esp"])) {
    $extensions_ok = array('png', 'jpg');
    if (filesize($_FILES['image_membre']['size'] > 3072000)  || !in_array(substr(strrchr($_FILES['image_membre']['name'], '.'), 1), $extensions_ok)) {
        echo "<p> Extension ou taille incorrect </p>";
    } else {
        $ext = substr(strrchr($_FILES['image_membre']['name'], '.'), 1);
        if (isset($_POST['prenom_membre'])) {
            $new_fileName = $_POST['prenom_membre'];
            $image = "../../SRL/membres/" . $new_fileName . ".$ext";
            move_uploaded_file($_FILES['image_membre']['tmp_name'], $image);
        }
    }

    $nom = $_POST['nom_membre'];
    $prenom = $_POST['prenom_membre'];
    $vignette = $_POST['vignette_membre'];
    $vignette_esp = $_POST['vignette_membre_esp'];
    $description = $_POST['description_membre'];
    $description_esp = $_POST['description_membre_esp'];

    try {
        $req = $bdd->prepare("INSERT INTO membres(nom_membre, prenom_membre, image_membre, vignette_membre, description_membre, description_membre_esp, vignette_membre_esp)
                            VALUES (:nom_membre, :prenom_membre, :image_membre, :vignette_membre, :description_membre, :description_membre_esp, :vignette_membre_esp)");
        $req->bindParam(':nom_membre', $nom);
        $req->bindParam(':prenom_membre', $prenom);
        $req->bindParam(':image_membre', $image);
        $req->bindParam(':vignette_membre', $vignette);
        $req->bindParam(':vignette_membre_esp', $vignette_esp);
        $req->bindParam(':description_membre', $description);
        $req->bindParam(':description_membre_esp', $description_esp);
        $req->execute();
        header('Location: ../views/admin.php');
    } catch (Exception $e) {
        die("Erreur:" . $e->getMessage());
    }
}

if (!empty($_POST['form_delete'])) {
    $req = $bdd->prepare('DELETE FROM membres WHERE id_membre=:id_membre');
    $req->bindParam(':id_membre', $_POST['id_membre']);
    $req->execute();
    header('Location: ../views/admin.php');
}

if (!empty($_POST['form_update'])) {
    try {
        $extensions_ok = array('png', 'jpg');
        if (filesize($_FILES['new_image_membre']['size'] > 3072000)  || !in_array(substr(strrchr($_FILES['new_image_membre']['name'], '.'), 1), $extensions_ok)) {
            echo "<p> Extension ou taille incorrect </p>";
        } else {
            $ext = substr(strrchr($_FILES['new_image_membre']['name'], '.'), 1);
            if (isset($_POST['prenom_membre'])) {
                $new_fileName = $_POST['prenom_membre'];
                $new_image = "../../SRL/membres/" . $new_fileName . ".$ext";
                move_uploaded_file($_FILES['new_image_membre']['tmp_name'], $new_image);
            }
        }
        $sql = 'UPDATE membres
            SET nom_membre=:nom_membre, 
                prenom_membre=:prenom_membre, 
                image_membre=:image_membre,
                vignette_membre=:vignette_membre,
                description_membre=:description_membre,
                vignette_membre_esp=:vignette_membre_esp,
                description_membre_esp=:description_membre_esp';
        $sql .= " WHERE id_membre=:id_membre";
        $req = $bdd->prepare($sql);
        $req->bindParam(':id_membre', $_POST['id_membre']);
        $req->bindParam(':nom_membre', $_POST['nom_membre']);
        $req->bindParam(':prenom_membre', $_POST['prenom_membre']);
        $req->bindParam(':image_membre', $new_image);
        $req->bindParam(':vignette_membre', $_POST['vignette_membre']);
        $req->bindParam(':vignette_membre_esp', $_POST['vignette_membre_esp']);
        $req->bindParam(':description_membre', $_POST['description_membre']);
        $req->bindParam(':description_membre_esp', $_POST['description_membre_esp']);
        $req->execute();
        header('Location: ../views/admin.php');
    } catch (Exception $e) {
        die("Erreur:" . $e->getMessage());
    }
}


try {
    $tab_membres = $bdd->query("SELECT * FROM membres")->fetchAll();
    die(json_encode($tab_membres));
} catch (Exception $e) {
    die('Erreur: ' . $e->getMessage());
}