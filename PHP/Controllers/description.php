<?php
include('../models/connect.php');

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
        header('Location: ../views/admin.php');
    } catch (Exception $e) {
        die("Erreur:" . $e->getMessage());
    }
}

/* SELEC REQUEST */
try {
    $tab_description = $bdd->query("SELECT presentation FROM description_compagnie")->fetchAll(PDO::FETCH_ASSOC);
    die(json_encode($tab_description));
} catch (Exception $e) {
    die('Erreur: ' . $e->getMessage());
}