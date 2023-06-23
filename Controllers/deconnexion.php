<?php
    include("../models/connect.php");
    session_unset();
    session_destroy();
    header("Location: ../views/connexion.php");
?>
