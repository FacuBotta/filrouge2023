<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Spectacles de la compagnie acquaforte theatre">
    <link rel="stylesheet" href="../CSS/styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,1,0" />
    <title>Acquaforte Spectacles</title>
</head>

<body>
    <?php
        include_once('../models/header.php')
    ?>
    <div class="container_all container_all_image" style="background-image: url(../SRL/fonds/spectacles-fond.jpg);">
        <img class="logo" src="../SRL/logo/logo-white.svg" alt="Logo Acquaforte Theatre">
        <h2 id="spectacles_titre">Spectacles</h2>
        <div id="container_spectacle_cards" class="container_cards">
            <!-- Spectacle cards added from JavaScript -->
        </div>
    </div>

    <div id="new_spectacle_modal" class="spectacle_container_modal hidden_element">
        <div class="spectacle_head">
            <h1 id="spectacle_name"></h1>
            <div class="btns_slide_spectacles">
                <button id="btn_description_spectacle" data-slide="-2" aria-label="Bouton description spectacle">Description</button>
                <button id="btn_photos_spectacle" data-slide="1" aria-label="Bouton photos spectacle">Photos</button>
                <button id="btn_videos_specetacle" data-slide="2" aria-label="Bouton videos spectacle">Videos</button>
                <a id="btn_contact_specetacle" href="./contact.php" aria-label="Bouton page contact">Contact</a>
                <a id="btn_retour_specetacle" href="./spectacles.php" aria-label="Bouton retour page spectacles">Retour</a>
            </div>
        </div>
        <div id="slider_container" class="slider_container">
            <div class="slider">
                <div id="spectacle_description" class="slide spectacle_description" data-slide="-2">
                    <h2>SYNOPSIS</h2>
                    <p id="p_description_spectacle" class="p_description_spectacle"></p>
                    <p id="p_comentaire_spectacle" class="p_comentaire_spectacle">
                    <!-- <p id="info_nomSpectacle_1">
                        <span style="font-weight: bold"> Titre: </span>
                        "nom_spectacle"
                    </p> -->
                    <!-- <p id="info_nomSpectacle_2">
                        <span style="font-weight: bold"> Titre: </span>
                        "nom_spectacle"
                    </p> -->
                    <!-- <p id="info_nomSpectacle_3">
                        <span style="font-weight: bold"> Titre: </span>
                        "nom_spectacle"
                    </p> -->
                </div>
                <div id="spectacle_images" class="slide container_cards slide_hidden" data-slide="1">
                    <div class="container_modal">
                        <span class="btn_close" ><i class="material-symbols-rounded">close</i></span>
                        <div class="slide_modal">
                            <div class="btn_slide_modal btn_prev"><i id="btn_prev" class="material-symbols-rounded" aria-label="Bouton image precedent">arrow_back_ios</i></div>
                            <div class="btn_slide_modal btn_next"><i id="btn_next" class="material-symbols-rounded" aria-label="Bouton image suivante">arrow_forward_ios</i></div>
                            <img id="slide_modal_image" src="" alt="Image du carousel">
                        </div>
                    </div>
                    <div class="container_images_spectacle" id="container_images">
                        <!-- contenue inseree avec js -->
                    </div>
                </div>
                <div id="spectacle_video" class="slide spectacle_video slide_hidden" data-slide="2">
                    <iframe  title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                            gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
    <?php
        include_once('../models/footer.php');
    ?>
    <script src="../JS/main.js"></script>
    <script src="../JS/spectacles.js"></script>
</body>

</html>