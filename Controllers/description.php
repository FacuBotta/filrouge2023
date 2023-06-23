<?php
include('../models/connect.php');

/* if (isset($_POST['description_esp']) && isset($_POST["description_fr"])) {
    $description = array(
        'description_fr' => ucfirst($_POST['description_fr']),
        'description_esp' => ucfirst($_POST['description_esp'])
    );
    $description_json = json_encode($description);
    $req = $bdd->prepare("INSERT INTO description_compagnie(presentation)
                            VALUES (:presentation)");
        $req->bindParam(':presentation', $description_json);
        $req->execute();
} */


/* UPDATE REQUEST */
if (isset($_POST["description_esp"]) && isset($_POST["description_fr"])) {
    $description = array(
        'description_fr' => ucfirst($_POST['description_fr']),
        'description_esp' => ucfirst($_POST['description_esp'])
    );
    $description_json = json_encode($description);

    try {
        $req = $bdd->prepare("UPDATE description_compagnie SET presentation = :presentation");
        $req->bindParam(':presentation', $description_json);
        $req->execute();
        $_SESSION['message'] = "update ok";
        header('Location: ../views/admin.php');
    } catch (Exception $e) {
        $_SESSION['message'] = "add error";
        header('Location: ../views/admin.php');
        // die("Erreur:" . $e->getMessage());
    }
}

/* SELEC REQUEST */
try {
    $tab_description = $bdd->query("SELECT presentation FROM description_compagnie")->fetchAll(PDO::FETCH_ASSOC);
    die(json_encode($tab_description));
} catch (Exception $e) {
    die('Erreur: ' . $e->getMessage());
}