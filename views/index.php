<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page de accueil de la compagnie acquaforte theatre">
    <link rel="stylesheet" href="../CSS/styles.css">
    <title>Acquaforte Accueil</title>
</head>

<body>
    <?php
        include_once('../models/header.php')
    ?>
    <p id="language" class="francais hidden_element" >francais</p>
    <div class="container_all">
        <video src="../SRL/fonds/POPURRI DE ACQUA.mp4" autoplay="false" muted="true" loop="true"></video>
    </div>
    <?php
        include_once('../models/footer.php');
    ?>
    <script src="../JS/main.js"></script>
</body>

</html>