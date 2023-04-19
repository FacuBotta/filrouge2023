<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,700,1,0" />

    <link rel="stylesheet" href="../../CSS/styles.css">
    <title>Admin page</title>
</head>

<!-- DELETE FORM -->
<body class="admin_body">
    <div id="modal_delete" class="container_modal">
        <div class="form_delete">
            <h3 id="titre_delete"></h3>
            <button id="btn_close_delete">Annuler</button>
            <form action="../Controllers/equipe.php" method="POST">
                <input type="hidden" name="form_delete" value="1">
                <input id="form_delete_file" type="hidden" name="file_membre">
                <input id="form_delete" type="hidden" name="id_membre">
                <button type="submit">Supprimer</button>
            </form>
        </div>
    </div>

    <div id="modal_add_spectacle" class="container_modal">
        <span id="btn_close_spectacle" class="btn_close"><i class="material-symbols-rounded">close</i></span>
        <div id="form_spectacles" class="admin_form">
            <h1>Ajouter un spectacle</h1>
            <form action="" method="post">
                <div>
                    <input type="text" placeholder="Titre"><br>
                    <textarea placeholder="Description" cols="80" rows="15"></textarea><br>
                    <textarea placeholder="Site" cols="80" rows="10"></textarea><br>
                    <label for="files_spectacle">Images:</label>
                    <input type="file" name="files_spectacle" id="files_spectacle">
                </div>
                <div>
                    <h3>Informations</h3>
                    <input type="text" placeholder="Mise en scéne"><br>
                    <input type="text" placeholder="Assistence mise en scéne"><br>
                    <input type="text" placeholder="Distribution"><br>
                    <input type="text" placeholder="Musique originale"><br>
                    <input type="text" placeholder="Costumes"><br>
                    <input type="text" placeholder="Mise en scéne"><br>
                    <input type="submit" value="Ajouter">
                </div>

            </form>
        </div>
    </div>
    <div id="modal_add_event" class="container_modal">
        <span id="btn_close_agenda" class="btn_close"><i class="material-symbols-rounded">close</i></span>
        <div id="form_agenda" class="admin_form">
            <h1>Ajouter un évenement</h1>
            <form action="" method="post">
                <div>
                    <input type="text" placeholder="Titre"><br>
                    <label for="files_agenda">Affiche:</label>
                    <input type="file" name="files_agenda" id="files_agenda"><br>
                    <label for="date_agenda">Date:</label>
                    <input type="date" name="date_agenda">
                    <label for="adresse_agenda">Adresse</label>
                    <input type="text" name="adresse_agenda" placeholder="Adresse num">
                    <input type="text" placeholder="Adresse Rue">
                    <input type="text" placeholder="Ville">
                    <input type="submit" value="Ajouter">
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
            <button id="btn_close_update">Annuler</button>
            <form action="../Controllers/equipe.php" method="post" enctype="multipart/form-data">
                <div>
                    <input type="hidden" name="form_update" value="1">
                    <input id="id_update" type="hidden" name="id_membre">
                    <input id="nom_membre" type="text" name="nom_membre"><br>
                    <input id="prenom_membre" type="text" name="prenom_membre"><br>
                    <label for="new_image_membre">Photo:</label>
                    <!-- Seting old image like default from JS in case of not new image to membre -->
                    <input id="old_image_membre" type="hidden" name="old_image_membre"><br>
                    <input type="file" name="new_image_membre" ><br>
                    <input id="vignette_membre" type="textarea" name="vignette_membre"><br>
                    <input id="description_membre" type="text" name="description_membre"><br>
                    <input id="vignette_membre_esp" type="text" name="vignette_membre_esp"><br>
                    <input id="description_membre_esp" type="text" name="description_membre_esp"><br>
                    <input type="submit" value="Mettre à jour">
                </div>
            </form>
        </div>
    </div>

    <div id="modal_add_soutien" class="container_modal">
        <span id="btn_close_soutien" class="btn_close"><i class="material-symbols-rounded">close</i></span>
        <div id="form_soutien" class="admin_form">
            <h1>Ajouter un colaborateur</h1>
            <form action="" method="post">
                <div>
                    <input type="text" placeholder="Nom"><br>
                    <label for="files_soutien">Image:</label>
                    <input type="file" name="files_soutien" id="files_soutien"><br>
                    <input type="text" placeholder="Link"><br>
                    <input type="submit" value="Ajouter">
                </div>
            </form>
        </div>
    </div>
    <!-- <<>> -->
    <h1>Page Admin</h1>
    <h3>Spectacles</h3>
    <div id="admin_spectacles" class="container_cards">
        <div id="btn_add_spectacle" class="admin_item add_item"><span class="material-symbols-rounded">
                add
            </span></div>
        <div class="admin_item"></div>
        <div class="admin_item"></div>
        <div class="admin_item"></div>
    </div>
    <h3>Agenda</h3>
    <div id="admin_agenda" class="container_cards">
        <div id="btn_add_event" class="admin_item add_item"><span class="material-symbols-rounded">
                add
            </span></div>
        <div class="admin_item"></div>
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
        <div class="admin_item"></div>
        <div class="admin_item"></div>
        <div class="admin_item"></div>
    </div>

    <script src="../../JS/admin.js"></script>
</body>

</html>