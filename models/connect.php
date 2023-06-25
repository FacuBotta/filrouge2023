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

$sessionDuration = 30 * 60;
session_set_cookie_params($sessionDuration);
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$_SESSION['last_activity'] = time();


$DB_HOST = $_ENV["BD_HOST"];
$DB_USER = $_ENV["BD_USER"];
$DB_PASSWORD = $_ENV["DB_PASSWORD"];
$DB_NAME = $_ENV["BD_NAME"];
$DB_PORT = $_ENV["BD_PORT"];

try {
    $bdd = new PDO("mysql:host=$DB_HOST;port=$DB_PORT;dbname=$DB_NAME", $DB_USER, $DB_PASSWORD, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
} catch (PDOException $e) {
    echo "conexion error: " . $e->getMessage();
}

