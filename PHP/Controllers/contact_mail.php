<?php
use PHPMailer\PHPMailer\PHPMailer;
require '../../vendor/autoload.php';
$mail = new PHPMailer(true);
// Paramètres du serveur
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Debugoutput = 'html';
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
// Informations envoyeur/réceptionneur
$mail->Username = 'nutuestampados@gmail.com';
$mail->Password = 'xloihibeogfaxhhw';
$mail->From = 'formtest@gmail.com';
$mail->FromName = 'acquaforte';
$mail->addAddress('nutuestampados@gmail.com');

// Contenu
if (isset($_POST['contact_nom']) && isset($_POST['contact_mail']) && isset($_POST['contact_message'])) {
    $nom = $_POST['contact_nom'];
    $message = $_POST['contact_message'];
    $mail2 = $_POST['contact_mail'];
    
    $mail->isHTML(true); // Permet l'interprétation de l'HTML dans le mail
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->Subject ='Contact de: '. $nom;
    $body = '<p>'. $nom .'<br>'. $message .'<br> Mail du reponse: '. $mail2 .'</p>';
    $mail->Body = $body;
    try {
        $mail->send();
        $_SESSION['contact'] = "cantact ok";
        header('Location: ../views/contact.php');
    } catch(Exception $e) {
        $_SESSION['contact'] = "cantact error";
        header('Location: ../views/contact.php');
        // echo "Erreur: ". $e->getMessage();
    }
    exit;
};