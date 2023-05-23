<?php
session_start();
if (isset($_SESSION['log_error'])) {
    echo '<script> alert("'. $_SESSION['log_error'] .'"); </script>';
    unset($_SESSION['log_error']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../CSS/styles.css">
    <title>Login</title>
</head>
<body>
    <div class="container_all connexion">
        <h1>Acquaforte Theatre</h1>
        <h2>Connection</h2>
        <div class="container_form_contact">
            <form action="../Controllers/login_control.php" method="post">
                <input type="hidden" name="form_connexion" value="1">
                <input type="text" placeholder="User" name="user">
                <input type="password" placeholder="Pass" id="form_pass" name="pass">
                <input type="submit" value="Connection">
            </form>
        </div>
    </div>
</body>
</html>