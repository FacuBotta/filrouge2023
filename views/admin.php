<?php
$sessionDuration = 30 * 60;
session_start();

if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > $sessionDuration)) {
    session_unset();
    session_destroy();
    header("Location: connexion.php");
    exit();
}
$_SESSION['last_activity'] = time();

if (empty($_SESSION["user"])) {
    session_destroy();
    header("Location: ./connexion.php");
}
if (isset($_SESSION['message']) && $_SESSION['message'] == 'add ok') {
    echo '<script> alert("Addition réussi!"); </script>';
    unset($_SESSION['message']);
}
if (isset($_SESSION['message']) && $_SESSION['message'] == 'add error') {
    echo '<script> alert("Un erreur est survenue veulliez réessayer"); </script>';
    unset($_SESSION['message']);
}
if (isset($_SESSION['message']) && $_SESSION['message'] == 'deleted') {
    echo '<script> alert("Suppression réussie!"); </script>';
    unset($_SESSION['message']);
}
if (isset($_SESSION['message']) && $_SESSION['message'] == 'images error') {
    echo '<script> alert("Taille ou extension incorrect"); </script>';
    unset($_SESSION['message']);
}
if (isset($_SESSION['message']) && $_SESSION['message'] == 'update ok') {
    echo '<script> alert("Mis à jour effectué!"); </script>';
    unset($_SESSION['message']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,1,0" />

    <link rel="stylesheet" href="../CSS/styles.css">
    <title>Admin page</title>
</head>
<body class="admin_body">
    <!-- DELETE FORM -->
    <div id="modal_delete" class="container_modal">
        <div class="form_delete">
            <h3 id="titre_delete"></h3>
            <button id="btn_close_delete">Annuler</button>
            <form id="delete_form" method="POST">
                <input type="hidden" name="form_delete" value="1">
                <input id="form_delete_file" type="hidden" name="file_delete">
                <input id="form_delete_files" type="hidden" name="files_delete">
                <input id="form_delete" type="hidden" name="id_delete">
                <button type="submit">Supprimer</button>
            </form>
        </div>
    </div>
    <!-- <<<<UPDATE SPECTACLE>>>> -->
    <div id="modal_update_spectacle" class="container_modal">
        <div id="form_uptade_spectacle" class="admin_form">
            <h1>Modifier Spectacle</h1>
            <form action="../Controllers/spectacles.php" method="post" enctype="multipart/form-data">
                <div>
                    <input type="hidden" name="form_update" value="1">
                    <input id="id_update_spectacle" type="hidden" name="id_spectacle">
                    <input id="titre_spectacle" name="new_titre_espectacle" type="text" placeholder="Titre"><br>
                    <textarea id="description_spectacle_fr" name="new_description_fr" placeholder="Description en français" cols="80" rows="15"></textarea><br>
                    <textarea id="site_spectacle_fr" name="new_site_fr" placeholder="Site en français" cols="80" rows="10"></textarea><br>
                    <textarea id="description_spectacle_esp" name="new_description_esp" placeholder="Descripcion en español" cols="80" rows="15"></textarea><br>
                    <textarea id="site_spectacle_esp" name="new_site_esp" placeholder="Sita en español" cols="80" rows="10"></textarea><br>
                </div>
                <div class="admin_form_infos" id="form_info">
                    <h3>Informations</h3>
                    <button id="ajouter_new_info">Ajouter une Information</button>
                    <label for="new_files_spectacle">
                        <h3>Images:</h3>
                    </label>
                    <input type="file" name="new_files_spectacle[]" multiple id="new_files_spectacle">
                    <input type="hidden" name="old_files_spectacle" id="old_files_spectacle">
                    <label for="new_affiche_spectacle">
                        <h3>Affiche:</h3>
                    </label>
                    <input type="file" name="new_affiche_spectacle">
                    <input id="old_affiche_spectacle" type="hidden" name="old_affiche_spectacle">
                    <label for="new_video_spectacle">
                        <h3>Video:</h3>
                    </label>
                    <input id="video_spectacle" type="text" placeholder="Link video" name="new_video_spectacle" id="new_video_spectacle">
                    <input type="submit" value="Mettre à jour">
                    <div class="btn_close_update"><a href="./admin.php" id="btn_close_update">Annuler</a></div>
                </div>
            </form>
        </div>
    </div>
    <!-- <<<<ADD SPECTACLE>>>> -->
    <div id="modal_add_spectacle" class="container_modal">
        <span id="btn_close_spectacle" class="btn_close"><i class="material-symbols-rounded">close</i></span>
        <div id="form_spectacles" class="admin_form">
            <h1>Ajouter un spectacle</h1>
            <form action="../Controllers/spectacles.php" method="post" enctype="multipart/form-data">
                <div>
                    <input type="hidden" name="form_add" value="1">
                    <input id="id_spectacle" type="hidden" name="id_spectacle">
                    <input name="titre_espectacle" type="text" placeholder="Titre"><br>
                    <textarea name="description_fr" placeholder="Description en français" cols="80" rows="15"></textarea><br>
                    <textarea name="site_fr" placeholder="Site en français" cols="80" rows="10"></textarea><br>
                    <textarea name="description_esp" placeholder="Descripcion en español" cols="80" rows="15"></textarea><br>
                    <textarea name="site_esp" placeholder="Sita en español" cols="80" rows="10"></textarea><br>
                </div>
                <div class="admin_form_infos" id="form_new_info">
                    <h3>Informations</h3>
                    <button id="ajouter_info">Ajouter une Information</button>
                    <div id="infos_spectacle">
                        <!-- News info fields added from JS -->
                    </div>
                    <label for="files_spectacle">
                    <h3>Images:</h3>
                    </label>
                    <input type="file" name="files_spectacle[]" multiple id="files_spectacle">
                    <label for="affiche_spectacle">
                    <h3>Affiche:</h3>
                    </label>
                    <input type="file" name="affiche_spectacle"><br>
                    <label for="video_spectacle">
                    <h3>Video:</h3>
                    </label>
                    <input type="text" placeholder="Link video" name="video_spectacle" id="video_spectacle">
                    <input type="submit" value="Ajouter spectacle">
                </div>
            </form>
        </div>
    </div>
    <!-- <<<<ADD AGENDA EVENT>>>> -->
    <div id="modal_add_event" class="container_modal">
        <span id="btn_close_agenda" class="btn_close"><i class="material-symbols-rounded">close</i></span>
        <div id="form_agenda" class="admin_form">
            <h1>Ajouter un évenement</h1>
            <form action="../Controllers/agenda.php" method="post" enctype="multipart/form-data">
                <div>
                    <input type="text" name="nom_agenda" placeholder="Titre"><br>
                    <label for="image_agenda">Affiche:</label>
                    <input type="file" name="image_agenda" id="image_agenda"><br>
                    <label for="date_agenda">Date:</label>
                    <input type="datetime-local" name="date_agenda">
                    <label for="adresse_agenda">Adresse</label>
                    <input type="text" name="adresse_lieu" placeholder="Lieu">
                    <input type="number" name="adresse_num" placeholder="Adresse num">
                    <input type="text" name="adresse_rue" placeholder="Adresse Rue">
                    <input type="text" name="adresse_ville" placeholder="Ville">
                    <input type="submit" value="Ajouter">
                </div>
            </form>
        </div>
    </div>
    <!-- <<<<UPDATE AGENDA>>>> -->
    <div id="modal_update_agenda" class="container_modal">
        <div id="form_agenda" class="admin_form">
            <h1>Modifier Agenda</h1>
            <!-- <button id="btn_close_update">Annuler</button> -->
            <form action="../Controllers/agenda.php" method="post" enctype="multipart/form-data">
                <div>
                    <input type="hidden" name="form_update" value="1">
                    <input id="id_update_agenda" type="hidden" name="id_event">
                    <input id="nom_agenda" type="text" name="nom_agenda" placeholder="Titre"><br>
                    <label for="image_agenda">Affiche:</label>
                    <!-- Seting old image like default from JS in case of not new image to membre -->
                    <input id="old_image_agenda" type="hidden" name="old_image_agenda"><br>
                    <input type="file" name="new_image_agenda"><br>
                    <label for="date_agenda">Date:</label>
                    <input id="date_agenda" type="datetime-local" name="date_agenda">
                    <label for="adresse_agenda">Adresse</label>
                    <input id="adresse_lieu" type="text" name="adresse_lieu" placeholder="Lieu">
                    <input id="adresse_num" type="number" name="adresse_num" placeholder="Adresse num">
                    <input id="adresse_rue" type="text" name="adresse_rue" placeholder="Adresse Rue">
                    <input id="adresse_ville" type="text" name="adresse_ville" placeholder="Ville">
                    <input type="submit" value="Mettre à jour">
                    <div class="btn_close_update"><a href="./admin.php" id="btn_close_update">Annuler</a></div>

                </div>
            </form>
        </div>
    </div>
    <!-- <<<<ADD MEMBRE>>>> -->
    <div id="modal_add_membre" class="container_modal">
        <span id="btn_close_membre" class="btn_close"><i class="material-symbols-rounded">close</i></span>
        <div id="form_membre" class="admin_form">
            <h1>Ajouter un membre</h1>
            <form action="../Controllers/equipe.php" method="post" enctype="multipart/form-data">
                <div>
                    <input type="text" name="nom_membre" placeholder="Nom"><br>
                    <input type="text" name="prenom_membre" placeholder="Prenom"><br>
                    <label for="files_membre">Photo:</label>
                    <input type="file" name="image_membre" id="image_membre"><br>
                    <input type="text" name="vignette_membre" placeholder="Role (francais)"><br>
                    <textarea cols="60" rows="8" name="description_membre" placeholder="Description (francais)"></textarea><br>
                    <input type="text" name="vignette_membre_esp" placeholder="Role (español)"><br>
                    <textarea cols="60" rows="8" name="description_membre_esp" placeholder="Description (español)"></textarea><br>
                    <input type="submit" value="Ajouter">
                </div>
            </form>
        </div>
    </div>
    <!-- <<<<UPDATE MEMBRE>>>> -->
    <div id="modal_update_membre" class="container_modal">
        <div id="form_membre" class="admin_form">
            <h1>Modifier Membre</h1>
            <form action="../Controllers/equipe.php" method="post" enctype="multipart/form-data">
                <div>
                    <input type="hidden" name="form_update" value="1">
                    <input id="id_update" type="hidden" name="id_membre">
                    <input id="nom_membre" type="text" name="nom_membre"><br>
                    <input id="prenom_membre" type="text" name="prenom_membre"><br>
                    <label for="new_image_membre">Photo:</label>
                    <!-- Seting old image like default from JS in case of not new image to membre -->
                    <input id="old_image_membre" type="hidden" name="old_image_membre"><br>
                    <input type="file" name="new_image_membre"><br>
                    <input id="vignette_membre" type="textarea" name="vignette_membre"><br>
                    <input id="description_membre" type="text" name="description_membre"><br>
                    <input id="vignette_membre_esp" type="text" name="vignette_membre_esp"><br>
                    <input id="description_membre_esp" type="text" name="description_membre_esp"><br>
                    <input type="submit" value="Mettre à jour">
                    <div class="btn_close_update"><a href="./admin.php" id="btn_close_update">Annuler</a></div>
                </div>
            </form>
        </div>
    </div>
    <!-- <<<<ADD SOUTIEN>>>> -->
    <div id="modal_add_soutien" class="container_modal">
        <span id="btn_close_soutien" class="btn_close"><i class="material-symbols-rounded">close</i></span>
        <div id="form_soutien" class="admin_form">
            <h1>Ajouter un colaborateur</h1>
            <form action="../Controllers/soutiens.php" method="post" enctype="multipart/form-data">
                <div>
                    <input type="text" placeholder="Nom" name="nom_soutien"><br>
                    <label for="files_soutien">Image:</label>
                    <input type="file" name="image_soutien" id="image_soutien"><br>
                    <input type="text" placeholder="Link" name="link_soutien"><br>
                    <input type="submit" value="Ajouter">
                </div>
            </form>
        </div>
    </div>
    <!-- <<<<UPDATE SOUTIEN>>>> -->
    <div id="modal_update_soutien" class="container_modal">
        <div id="form_soutien" class="admin_form">
            <h1>Modifier soutien</h1>
            <form action="../Controllers/soutiens.php" method="post" enctype="multipart/form-data">
                <div>
                    <input type="hidden" name="form_update" value="1">
                    <input id="id_update_coll" type="hidden" name="id_coll">
                    <input id="nom_coll" type="text" name="nom_coll"><br>
                    <input id="lien_coll" type="text" name="lien_coll"><br>
                    <label for="new_image_coll">Photo:</label>
                    <!-- Seting old image like default from JS in case of not new image to membre -->
                    <input id="old_image_coll" type="hidden" name="old_image_coll"><br>
                    <input type="file" name="new_image_coll"><br>
                    <input type="submit" value="Mettre à jour">
                    <div class="btn_close_update"><a href="./admin.php" id="btn_close_update">Annuler</a></div>
                </div>
            </form>
        </div>
    </div>
    <!-- <<<< BODY >>>> -->
    <div class="container_all container_admin">
        <h1>Page Admin</h1>
        <div class="container_btns_admin">
            <div>
                <a href="../Controllers/deconnexion.php">Deconnexion</a>
            </div>
            <div>
                <a target="_blank" href="./index.php">Voir page</a>
            </div>
        </div>
            <h3>Description</h3>
        <div id="btn_description" class="btn_description">
            <p>Modifier</p>
        </div>
        <div id="form_description" class="form_description hidden_element">
            <form action="../Controllers/description.php" method="post">
                <input type="hidden" name="form_update" value="1">
                <label for="description_fr">Description en français</label><br>
                <textarea name="description_fr" id="compagnie_description_fr" cols="60" rows="15"></textarea><br>
                <label for="description_esp">Descripción en español</label><br>
                <textarea name="description_esp" id="compagnie_description_esp" cols="60" rows="15"></textarea><br>
                <input type="submit" value="Mettre à jour">
            </form>
        </div>
        <h3>Spectacles</h3>
        <div id="admin_spectacles" class="container_cards">
            <div id="btn_add_spectacle" class="admin_item add_item"><span class="material-symbols-rounded">
                    add
                </span></div>
        </div>
        <h3>Agenda</h3>
        <div id="admin_agenda" class="container_cards">
            <div id="btn_add_event" class="admin_item add_item"><span class="material-symbols-rounded">
                    add
                </span></div>
        </div>
        <h3>Équipe</h3>
        <div id="admin_membres" class="container_cards">
            <div id="btn_add_membre" class="admin_item add_item"><span class="material-symbols-rounded">
                    add
                </span></div>
        </div>
        <h3>Soutiens</h3>
        <div id="admin_soutiens" class="container_cards">
            <div id="btn_add_soutien" class="admin_item add_item"><span class="material-symbols-rounded">
                    add
                </span></div>
        </div>
    </div>
    <script src="../JS/admin.js"></script>
    <script>
        function destroySession() {
            fetch('deconnexion.php', { method: 'POST'});
        };
        window.addEventListener('beforeunload', destroySession);
    </script>
</body>
</html>