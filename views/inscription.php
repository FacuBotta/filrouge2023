<?php
include('../models/connect.php');

if (!empty($_POST["form_inscription"])) {
    $username = $_POST['user'];
    $password = $_POST['pass'];

    if (strpos($username, '-') !== false || strpos($password, '-') !== false) {
        die('<p style="color: red;">Les tires ne sont pas aceptés. </p><a href="inscription.php">Réessayer.</a>');
    }

    $select = $bdd->prepare("SELECT user FROM utilisateur WHERE user=:user;");
    $select->bindParam(":user", $_POST["user"]);
    $select->execute();
    if (empty($select->fetch(PDO::FETCH_COLUMN))) {
        $pass = password_hash($_POST['pass'], PASSWORD_BCRYPT, array("cost" => 12));
        $insert = $bdd->prepare("INSERT INTO utilisateur(user, pass)
                                    VALUES(:user, :pass);");
        $insert->bindParam(":user", $_POST['user']);
        $insert->bindParam(":pass", $pass);
        if ($insert->execute()) {
            die('<p style=”color: green;”>Inscription réussie.</p><a href="connexion.php">Se connecter.</a>');
        }
        die('<p style=”color: red;”>Inscription échouée.</p><a href="inscription.php">Réessayer.</a>');
    }
}
?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>

<body>
    <h1>inscription</h1>
    <form method="post">
        <input type="hidden" name="form_inscription" value="1">
        <label for="form_email">Email:</label>
        <input type="text" name="user" placeholder="nom user">
        <label for="pass">Mot de passe:</label>
        <input type="password" name="pass" placeholder="1234">
        <input type="submit" value="S'inscrire">
    </form>
</body>

</html>