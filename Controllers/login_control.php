<?php
include('../models/connect.php');

if (!empty($_POST["form_connexion"])) {

    $select = $bdd->prepare("SELECT * FROM utilisateur WHERE user=:user;");
    $select->bindParam(":user", $_POST["user"]);
    $select->execute();

    if ($select->rowCount() === 1) {
        $user = $select->fetch(PDO::FETCH_ASSOC);
        if (password_verify($_POST["pass"], $user['pass'])) {
            $_SESSION['user'] = $user;
            header("Location: ../views/admin.php");
        } else {
            $_SESSION['log_error'] = "Informations incorrectes";
            header("Location: ../views/connexion.php");
        }
    } else {
        unset($_SESSION['user']);
        $_SESSION['log_error'] = "Informations incorrectes";
        header("Location: ../views/connexion.php");
    }
}