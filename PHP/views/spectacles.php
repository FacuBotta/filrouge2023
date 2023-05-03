<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Spectacles de la compagnie acquaforte theatre">
    <link rel="stylesheet" href="../../CSS/styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,1,0" />
    <title>Acquaforte Spectacles</title>
</head>

<body>
    <?php
        include_once('../models/header.php')
    ?>
    <div class="container_all container_all_image" style="background-image: url(../../SRL/fonds/spectacles-fond.jpg);">
        <img class="logo" src="../../SRL/logo/logo-white.png">
        <h2 id="spectacles_titre">Spectacles</h2>
        <div id="container_spectacle_cards" class="container_cards">
            <!-- <div class="new_spectacle" style="background-image: url(../../SRL/afiches/afiche-escurial.png)">
            </div> -->
        </div>
    </div>
    <div id="new_spectacle_modal" class="spectacle_container_modal hidden_element">
        <div class="spectacle_head">
            <h1 id="spectacle_name"></h1>
            <div class="btns_slide_spectacles">
                <a id="btn_description_spectacle">Description</a>
                <a id="btn_photos_spectacle">Photos</a>
                <a id="btn_videos_specetacle">Videos</a>
                <a id="btn_contact_specetacle" href="./contact.php">Contact</a>
                <a id="btn_retour_specetacle" href="./spectacles.php">Retour</a>
            </div>
        </div>
        <div id="slider_container" class="slider_container">
            <div class="slider">
                <div id="spectacle_description" class="slide spectacle_description">
                    <h2>SYNOPSIS</h2>
                    <p id="p_description_spectacle" class="p_description_spectacle"><!-- Un roi fou, enfermé avec son bouffon
                        dans son palais décrépit, attend la mort d'une reine
                        agonisante. Par jeu, par défi ou par pure cruauté, le roi impose au bouffon un jeu étrange :
                        pour un temps, ils inverseront leurs attributs et leurs fonctions. Bon gré, mal gré, le
                        bouffon s'exécute, mais il se prend au jeu et, au moment de restituer au roi son sceptre et
                        sa couronne, il les garde et tente de conserver le pouvoir. --></p>
                    <p id="p_comentaire_spectacle" class="p_comentaire_spectacle"><!-- « Ghelderode, c’est le diamant qui
                        ferme le collier de poètes que la Belgique porte autour du
                        cou. Ce diamant noir jette des feux cruels et nobles. Ils ne blessent que les petites âmes.
                        Ils éblouissent les autres » Jean Cocteau --></p>
                    <!-- <p>Titre: Escurial</p>
                    <p>Auteur: Michel de Ghelderode</p>
                    <p>Mise en scène: Facundo Melillo</p>
                    <p>Assistante mise en scène: Naibi Esteban</p>
                    <p>Distribution: Julien Assié, Jean Charles Jeantet, Facundo Melillo, Antoine Pelle, Naibi
                        Esteban.</p>
                    <p>Musique originale: Julien Assié, Facundo Melillo</p>
                    <p>Masques et Costumes: Ana Melillo</p>
                    <p>Création Lumière: Acquaforte Théâtre</p>
                    <p>Technicienne Lumière: Naibi Esteban</p>
                    <p>Teaser: Louise Priam</p>
                    <p>Photographie: Paul Deruschi et Lucie Berquiere</p>
                    <p>Durée: aprox. 1h, à partir de 10 ans</p> -->
                </div>
                <div id="spectacle_images" class="slide spectacle_images slide_hidden">
                    <div class="container_modal">
                        <span class="btn_close" ><i class="material-symbols-rounded">close</i></span>
                        <div class="slide_modal">
                            <div class="btn_slide_modal btn_prev"><i id="btn_prev" class="material-symbols-rounded">arrow_back_ios</i></div>
                            <div class="btn_slide_modal btn_next"><i id="btn_next" class="material-symbols-rounded">arrow_forward_ios</i></div>
                            <img id="slide_modal_image" src="" alt="">
                        </div>
                    </div>
                    <div class="container_images_spectacle" id="container_images">
                        <!-- contenue inseree avec js depuis json -->
                    </div>
                </div>
                <div id="spectacle_video" class="slide spectacle_video slide_hidden">
                    <iframe  title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
    <?php
        include_once('../models/footer.php');
    ?>
    <script src="../../JS/main.js"></script>
    <script src="../../JS/spectacles.js"></script>
</body>

</html>