<?php
use PHPMailer\PHPMailer\PHPMailer; // On importe la classe tout en haut
require 'vendor/autoload.php'; // On charge l'autoloader de composer
$mail = new PHPMailer(true); // Instantiation
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
$mail->isHTML(true); // Permet l'interprétation de l'HTML dans le mail
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';
$mail->Subject = 'Sujet du mail';
$body = '<p>This is a test message</p>';
$mail->Body = $body;
try {
    $mail->send();
} catch(Exception $e) {
    echo "Erreur: ". $e->getMessage();
}
exit;
