<?php
session_start();
if (isset($_SESSION['contact']) && $_SESSION['contact'] == 'cantact ok') {
    echo "<dialog id='contact_alert' class='contact_alert'>
            <p id='contact_alert_p'>Message envoyé!</p>
            <button id='btn_contact_alert'>OK</button>
        </dialog>";
    echo "<script> document.getElementById('contact_alert').showModal(); </script>";
    unset($_SESSION['contact']);
}
if (isset($_SESSION['contact']) && $_SESSION['contact'] == 'contact error') {
    echo '<script> alert("Une erreur est survenue, veuillez réessayer"); </script>';
    unset($_SESSION['contact']);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page de contacte de la compagnie acquaforte theatre">
    <link rel="stylesheet" href="../CSS/styles.css">
    <title>Acquaforte Contact</title>
</head>

<body>
    <?php
    include_once('../models/header.php')
    ?>

    <div class="container_all container_all_image" style="background-image: url(../SRL/fonds/contac-fond.jpg); background-position: center center;">
        <h1 id="contact_titre" class="btn_contact">NOUS CONTACTER</h1>
        <div class="container_form_contact">
            <form onsubmit="return validationForm()" id="form_contact" action="../Controllers/contact_mail.php" method="post">
                <input name="contact_nom" id="contact_nom" type="text" placeholder="Nom">
                <input name="contact_mail" id="contact_mail" type="email" placeholder="E-mail">
                <textarea name="contact_message" id="contact_textarea" name="message_contact" cols="20" rows="7" placeholder="Message"></textarea>
                <button type="submit" id="contact_submit">Envoyer</button>
            </form>
        </div>
    </div>
    <?php
    include_once('../models/footer.php');
    ?>
    <script src="../JS/main.js"></script>
    <script src="../JS/contact.js"></script>
</body>
</html>