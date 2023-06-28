<?php
include('../models/connect.php');

if (!empty($_POST["form_connexion"])) {

    $username = $_POST['user'];
    $password = $_POST['pass'];

    if (strpos($username, '-') !== false || strpos($password, '-') !== false) {
        $_SESSION['log_error'] = "Informations incorrectes";
        header("Location: ../views/connexion.php");
        exit();
    }
    $select = $bdd->prepare("SELECT * FROM utilisateur WHERE user=:user;");
    $select->bindParam(":user", $_POST["user"]);
    $select->execute();

    if ($select->rowCount() === 1) {
        $user = $select->fetch(PDO::FETCH_ASSOC);
        if (password_verify($_POST["pass"], $user['pass'])) {
            $_SESSION['user'] = $user;
            header("Location: ../views/admin.php");
            exit();
        } else {
            $_SESSION['log_error'] = "Informations incorrectes";
            header("Location: ../views/connexion.php");
            exit();
        }
    } else {
        unset($_SESSION['user']);
        $_SESSION['log_error'] = "Informations incorrectes";
        header("Location: ../views/connexion.php");
        exit();
    }
}


/*
include('../models/connect.php');

if (!isset($_SESSION['count'])) {
    $_SESSION['count'] = 5;
}

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
            $_SESSION['count']--;
            $_SESSION['log_error'] = 'Informations incorrectes vous avez' . $_SESSION['count'] . 'esseis';
            header("Location: ../views/connexion.php");
        }
    } else {
        unset($_SESSION['user']);
        $_SESSION['count']--;
        $_SESSION['log_error'] = 'Informations incorrectes vous avez' . $_SESSION['count'] . 'esseis';
        header("Location: ../views/connexion.php");
    }
    if ($_SESSION['count'] === 0) {
        session_unset();
        session_destroy();
        echo "<script> alert(Limite tentatives. Vous devez attendre 30 minutes); </script>";
        sleep(60);
        header("Location: ../views/connexion.php");
    }
} */