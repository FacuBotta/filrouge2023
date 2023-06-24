<?php
/* $sessionDuration = 30 * 60;
session_set_cookie_params($sessionDuration);
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$_SESSION['last_activity'] = time();

$DB_USER = "root";
$DB_PASS = "test";
$bdd = new PDO('mysql:host=db;dbname=acquaforte_bdd', $DB_USER, $DB_PASS,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false));
 */

$servername = '34.155.36.200';
$username = 'admin';
$password = 'adminpass';
$dbname = 'acquaforte_bdd';

try {
    $bdd = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password ,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    echo 'Conexión exitosa'; // Esto es opcional, solo para verificar que la conexión se haya establecido correctamente
} catch (PDOException $e) {
    die('Error de conexión: ' . $e->getMessage());
}
