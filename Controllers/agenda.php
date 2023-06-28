<?php
include('../models/connect.php');

/* INSERT REQUEST */
if (isset($_FILES['image_agenda']) && isset($_POST["nom_agenda"]) && isset($_POST["date_agenda"]) && isset($_POST["adresse_lieu"]) && isset($_POST["adresse_num"]) && isset($_POST["adresse_rue"]) && isset($_POST["adresse_ville"])) {
    $extensions_ok = array('png', 'jpg');
    if (filesize($_FILES['image_agenda']['size'] > 3072000)  || !in_array(substr(strrchr($_FILES['image_agenda']['name'], '.'), 1), $extensions_ok)) {
        $_SESSION['message'] = "images error";
        header('Location: ../views/admin.php');
        exit();
    } else {
        $ext = substr(strrchr($_FILES['image_agenda']['name'], '.'), 1);
        if (isset($_POST['nom_agenda'])) {
            $new_fileName = str_replace(' ', '', $_POST['nom_agenda']);
            $image = "../../SRL/agenda/" . $new_fileName . ".$ext";
            move_uploaded_file($_FILES['image_agenda']['tmp_name'], $image);
        }
    }

    $titre = ucwords($_POST['nom_agenda']);
    $date = $_POST['date_agenda'];
    $adresse_lieu = ucwords($_POST['adresse_lieu']);
    $adresse_num = $_POST['adresse_num'];
    $adresse_rue = ucwords($_POST['adresse_rue']);
    $adresse_ville = ucwords($_POST['adresse_ville']);

    try {
        $req = $bdd->prepare("INSERT INTO agenda(titre_event, date_event, image_event, lieu_event, adr_num_event, adr_rue_event, adr_ville_event)
                            VALUES (:titre_event, :date_event, :image_event, :lieu_event, :adr_num_event, :adr_rue_event, :adr_ville_event)");
        $req->bindParam(':titre_event', $titre);
        $req->bindParam(':date_event', $date);
        $req->bindParam(':lieu_event', $adresse_lieu);
        $req->bindParam(':image_event', $image);
        $req->bindParam(':adr_num_event', $adresse_num);
        $req->bindParam(':adr_rue_event', $adresse_rue);
        $req->bindParam(':adr_ville_event', $adresse_ville);
        $req->execute();
        $_SESSION['message'] = "add ok";
        header('Location: ../views/admin.php');
        exit();
    } catch (Exception $e) {
        $_SESSION['message'] = "add error";
        header('Location: ../views/admin.php');
        exit();
        // die("Erreur:" . $e->getMessage());
    }
}

/* UPDATE REQUEST */
if (!empty($_POST['form_update'])) {
    try {
        if (!empty($_FILES['new_image_agenda'])) {

            $extensions_ok = array('png', 'jpg');
            if (filesize($_FILES['new_image_agenda']['size'] > 3072000)  || !in_array(substr(strrchr($_FILES['new_image_agenda']['name'], '.'), 1), $extensions_ok)) {
                // Seting old image if the new image is null or incorret
                $new_image = $_POST['old_image_agenda'];

            } else {
                $ext = substr(strrchr($_FILES['new_image_agenda']['name'], '.'), 1);
                if (isset($_POST['nom_agenda'])) {
                    $new_fileName = str_replace(' ', '', $_POST['nom_agenda']);
                    $new_image = "../../SRL/agenda/" . $new_fileName . ".$ext";
                    move_uploaded_file($_FILES['new_image_agenda']['tmp_name'], $new_image);
                }
            }
        }
        // Deleting old image if it not change
        if ($new_image != $_POST['old_image_agenda']) {
                unlink($_POST['old_image_agenda']);
        }

        $sql = 'UPDATE agenda
            SET titre_event=:titre_event, 
                lieu_event=:lieu_event, 
                date_event=:date_event, 
                image_event=:image_event, 
                adr_num_event=:adr_num_event, 
                adr_rue_event=:adr_rue_event, 
                adr_ville_event=:adr_ville_event';
        $sql .= " WHERE id_event=:id_event";
        $req = $bdd->prepare($sql);
        
        $titre = ucwords($_POST['nom_agenda']);
        $lieu = ucwords($_POST['adresse_lieu']);
        $date = $_POST['date_agenda'];
        $adr_num = ucwords($_POST['adresse_num']);
        $adr_rue = ucwords($_POST['adresse_rue']);
        $adr_ville = ucwords($_POST['adresse_ville']);

        $req->bindParam(':id_event', $_POST['id_event']);
        $req->bindParam(':titre_event', $titre);
        $req->bindParam(':lieu_event', $lieu);
        $req->bindParam(':date_event', $date);
        $req->bindParam(':image_event', $new_image);
        $req->bindParam(':adr_num_event', $adr_num);
        $req->bindParam(':adr_rue_event', $adr_rue);
        $req->bindParam(':adr_ville_event', $adr_ville);
        $req->execute();
        $_SESSION['message'] = "update ok";
        header('Location: ../views/admin.php');
        exit();
    } catch (Exception $e) {
        $_SESSION['message'] = "add error";
        header('Location: ../views/admin.php');
        exit();
        // die("Erreur:" . $e->getMessage());
    }
}

/* DELETE REQUEST */
if (!empty($_POST['form_delete'])) {
    $file_event = $_POST['file_delete'];
    unlink($file_event);
    $req = $bdd->prepare('DELETE FROM agenda WHERE id_event=:id_event');
    $req->bindParam(':id_event', $_POST['id_delete']);
    $req->execute();
    $_SESSION['message'] = "deleted";
    header('Location: ../views/admin.php');
    exit();
}

/* SELEC REQUEST */
try {
    $tab_agenda = $bdd->query("SELECT * FROM agenda")->fetchAll(PDO::FETCH_ASSOC);
    die(json_encode($tab_agenda));
} catch (Exception $e) {
    die('Erreur: ' . $e->getMessage());
}