<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../CSS/styles.css">
    <title>Acquaforte Agenda</title>
</head>
<body>
    <?php
        include_once('../models/header.php')
    ?>
    <div class="container_all container_all_image" style="background-image: url(../../SRL/fonds/agenda-fond.jpg);">
        <img class="logo" src="../../SRL/logo/logo-white.png">
        <h2>Agenda</h2>
        <div class="container_cards">
            <div class="event_card new_event">
                <div class="event_card_image">
                </div>
                <div class="event_card_text">
                    <h3 class="event_card_title">Escurial</h3>
                    <p class="date">10/03/2023</p>
                    <p class="adresse">60 Rue de Theatre de example lalalalallala</p>
                </div>
                <a href="spectacles.php" class="btn_event_card">LIRE LA SUITE</a>
            </div>
        </div>
    </div>
    <?php
        include_once('../models/footer.php');
    ?>
    <script src="../../JS/main.js"></script>
    <script src="../../JS/agenda.js"></script>
</body>
</html>