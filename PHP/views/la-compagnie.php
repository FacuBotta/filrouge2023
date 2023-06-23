<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Presentation acquaforte theatre et ses membres">
    <link rel="stylesheet" href="../../CSS/styles.css">
    <title>Acquaforte Qui Sommes Nous</title>
</head>

<body>
    <?php
        include_once('../models/header.php')
    ?>
    <div class="container_all container_slide">
        <img class="logo" src="../../SRL/logo/logo-white.svg" alt="logo du la compagnie">
        <h2 id="compagnie_titre">Qui Sommes Nous</h2>
        <p id="compagnie_description"><!-- Association franco-argentine créée en 2017 par Facundo Melillo, comédien et metteur en scène argentin.
            Depuis sa création, la compagnie Acquaforte Théâtre bénéficie d’une convention avec l’espace culturel du CHU
            (Centre Hospitalier Universitaire de Montpellier). Cette convention nous a permis de développer nos projets
            dans un espace fixe de création. La préparation du travail de plateau, les répétitions et les premières
            représentations auront lieu à cet endroit.Notre échange avec les patients et le personnel hospitalier nous a
            fourni une expérience riche et nous a guidé dans l’objectif principal de notre association: l’engagement
            dans le territoire par la mise en oeuvre d’interventions artistiques en fonction des besoins sociaux.Sur le
            plan artistique, Acquaforte produit des pièces de théâtre et de propositions musicales qui nous transportent
            dans la culture latino-américaine. Notre projet artistique est axé sur la création de pièces de masques et
            de marionnettes, le traitement de l’espace par des jeux d’ombre et de lumière.
            Les auteurs de nos pièces traitent de sujets philosophiques, tragiques et/ou politiques. Nos spectacles
            s’adressent donc aux adultes et au jeune public. --></p>
        <img class="btn_slide" src="../../SRL/icons/slide-btn.svg" alt="bouton ouvrir slide " tabindex="9">
    </div>

    <div id="container_equipe" class="container_all container_all_image hidden_element"
        style="background-image: url(../../SRL/fonds/fond-equipe.jpg)">
        <h2 id="equipe_titre">Notre Équipe</h2>
        <div id="cards_equipe" class="container_cards">
            <!-- cards from fetch qui-sommes.js -->
        </div>
        <h2 id="soutiens_titre">Nous Soutiens</h2>
        <div id="cards_soutiens" class="container_cards">
            <!-- cards from fetch qui-sommes.js -->
        </div>
        <img class="btn_slide_equipe" src="../../SRL/icons/slide-btn.svg" alt="bouton fermer slide">
    </div>
    <?php
        include_once('../models/footer.php');
    ?>
    <script src="../../JS/main.js"></script>
    <script src="../../JS/qui-sommes.js"></script>
</body>
</html>