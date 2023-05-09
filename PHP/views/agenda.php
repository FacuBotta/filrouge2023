<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Prochaines evenements de la compagnie de theatre acquaforte">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,1,0" />

    <link rel="stylesheet" href="../../CSS/styles.css">
    <title>Acquaforte Agenda</title>
</head>
<body>
    <?php
        include_once('../models/header.php')
    ?>
    <!-- <span id="tooltip_agenda" class="tooltip_agenda">Lire la suite</span> -->
    <div class="container_all container_all_image" style="background-image: url(../../SRL/fonds/agenda-fond.jpg);">
        <img class="logo" src="../../SRL/logo/logo-white.png" alt="logo compagnie acquaforte">
        <h2>Agenda</h2>
        <div id="container_events" class="container_cards">
            <!-- Content added from JavaScript -->
        </div>
    </div>
    <?php
        include_once('../models/footer.php');
    ?>
    <script src="../../JS/main.js"></script>
    <script src="../../JS/agenda.js"></script>
</body>
</html>