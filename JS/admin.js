/* <<<<<DESCRIPTION>>>>> */
fetch("../../PHP/Controllers/description.php", {
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => {
        getDataDescription(data);
    });

function getDataDescription(description) {
    const presentation = JSON.parse(description[0].presentation);
    console.log(presentation);
    const btn_description = document.getElementById('btn_description');
    const form_description = document.getElementById('form_description');
    btn_description.addEventListener('click', () => {
        form_description.classList.toggle('hidden_element');
        document.getElementById('compagnie_description_fr').textContent = presentation.description_fr;
        document.getElementById('compagnie_description_esp').textContent = presentation.description_esp;

    });
};




/* <<<<<SPECTACLES>>>>> */
fetch("../../PHP/Controllers/spectacles.php", {
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => {
        getDataSpectacles(data);
    });

const container_spectacles = document.getElementById('admin_spectacles');

function getDataSpectacles(events) {
    events.forEach(spectacle => {
        const event_box = container_spectacles.appendChild(document.createElement('div'));
        event_box.setAttribute('class', 'admin_item');
        event_box.setAttribute('id', `${spectacle.id_spectacle}`);
        event_box.style.backgroundImage = `url(${spectacle.affiche_spectacle})`;
        let hidden_div = event_box.appendChild(document.createElement('div'));
        hidden_div.setAttribute('class', 'hidden_div');
        let delete_div = hidden_div.appendChild(document.createElement('div'));
        delete_div.setAttribute('class', 'delete_div');
        let btn_delete = delete_div.appendChild(document.createElement('span'));
        btn_delete.setAttribute('class', 'material-symbols-rounded');
        btn_delete.innerHTML = 'delete';

        let update_div = hidden_div.appendChild(document.createElement('div'));
        update_div.setAttribute('class', 'update_div');
        let btn_update = update_div.appendChild(document.createElement('span'));
        btn_update.setAttribute('class', 'material-symbols-rounded');
        btn_update.innerHTML = 'edit';

        event_box.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            hidden_div.style.opacity = 1;
            hidden_div.style.visibility = 'visible';
        });
        event_box.addEventListener('mouseleave', (e) => {
            e.preventDefault();
            hidden_div.style.opacity = 0;
            hidden_div.style.visibility = 'hidden';
        });
        
        /* DELETE REQUEST */
        btn_delete.addEventListener('click', () => {
            let modal_delete = document.getElementById('modal_delete');
            let btn_close_delete = document.getElementById('btn_close_delete');
            modal_delete.style.opacity = 1;
            modal_delete.style.visibility = 'visible';

            // Seting action value to the delete form in ./views/admin.php
            delete_form.setAttribute('action', '../Controllers/spectacles.php')

            // Deleting the images of the spectacle
            let form_delete = document.getElementById('form_delete');
            let form_delete_file = document.getElementById('form_delete_file');
            form_delete.setAttribute('value', `${spectacle.id_spectacle}`);
            form_delete_file.setAttribute('value', `${spectacle.affiche_spectacle}`);

            // Confirmation message
            let titre = document.getElementById('titre_delete');
            titre.textContent = `Supprimer ${spectacle.titre_spectacle} du spectacles?`
            // Close delete dialog 'cancel'
            btn_close_delete.addEventListener('click', () => {
                form_delete.setAttribute('value', '');
                modal_delete.style.opacity = 0;
                modal_delete.style.visibility = 'hidden';
            });
        });

        /* UPDATE REQUEST */
        btn_update.addEventListener('click', () => {
            const modal_update = document.getElementById('modal_update_spectacle');
            modal_update.style.opacity = 1;
            modal_update.style.visibility = 'visible';

            const form_update = document.getElementById('id_update_spectacle');
            form_update.setAttribute('value', `${spectacle.id_spectacle}`);
            document.getElementById('titre_spectacle').setAttribute("value", `${spectacle.titre_spectacle}`);
            //document.getElementById('description_spectacle_fr').setAttribute("value", `${spectacle.description_spectacle.description_fr}`);
            document.getElementById('description_spectacle_fr').textContent = spectacle.description_spectacle.description_fr;
            //document.getElementById('site_spectacle_fr').setAttribute("value", `${spectacle.site_spectacle.site_fr}`);
            document.getElementById('site_spectacle_fr').textContent = spectacle.site_spectacle.site_fr;
            //document.getElementById('description_spectacle_esp').setAttribute("value", `${spectacle.description_spectacle.description_esp}`);
            document.getElementById('description_spectacle_esp').textContent = spectacle.description_spectacle.description_esp;
            //document.getElementById('site_spectacle_esp').setAttribute("value", `${spectacle.site_spectacle.site_esp}`);
            document.getElementById('site_spectacle_esp').textContent = spectacle.site_spectacle.site_esp;
            document.getElementById('video_spectacle').setAttribute("value", `${spectacle.video_spectacle}`);
            document.getElementById('old_affiche_spectacle').setAttribute("value", `${spectacle.affiche_spectacle}`);
            document.getElementById('old_files_spectacle').setAttribute("value", spectacle.images_spectacle);

            console.log(spectacle);
            const info_array = Object.entries(spectacle.info_spectacle);
            const btn_ajouter_new_info = document.getElementById("ajouter_new_info");
            for (let i = 1; i < info_array.length + 1; i++) {
                console.log(spectacle.info_spectacle[i]);

                //Making new field container and two inputs
                const new_field_info = document.createElement("div");
                new_field_info.classList.add("new_field_info");
                new_field_info.setAttribute("id", "field_" + i);

                const input_titre = document.createElement("input");
                input_titre.setAttribute("type", "text");
                input_titre.setAttribute("name", `titre_info_${i}`);
                input_titre.setAttribute("value", `${spectacle.info_spectacle[i].titre_info}`);

                const input_contenue = document.createElement("input");
                input_contenue.setAttribute("type", "text");
                input_contenue.setAttribute("name", `contenue_info_${i}`);
                input_contenue.setAttribute("value", `${spectacle.info_spectacle[i].contenue_info}`);

                const btn_supprimer_field = document.createElement("span");
                btn_supprimer_field.setAttribute('class', 'material-symbols-rounded btn_supr_new_field');
                btn_supprimer_field.innerHTML = 'delete';

                new_field_info.appendChild(input_titre);
                new_field_info.appendChild(input_contenue);
                new_field_info.appendChild(btn_supprimer_field);
                form_info.insertBefore(new_field_info, btn_ajouter_new_info.nextSibling);



                btn_supprimer_field.addEventListener('click', () => {
                    const field_to_del = document.getElementById(`field_${i}`);
                    field_to_del.remove();
                });
            };

            let new_field_count = info_array.length + 1;
            btn_ajouter_new_info.addEventListener('click', (e) => {
                e.preventDefault();
                const new_field_info = document.createElement("div");
                new_field_info.classList.add("new_field_info");
                new_field_info.setAttribute("id", "field_" + new_field_count);

                const input_titre = document.createElement("input");
                input_titre.setAttribute("type", "text");
                input_titre.setAttribute("name", `titre_info_${new_field_count}`);
                input_titre.setAttribute("placeholder", "Titre Info");

                const input_contenue = document.createElement("input");
                input_contenue.setAttribute("type", "text");
                input_contenue.setAttribute("name", `contenue_info_${new_field_count}`);
                input_contenue.setAttribute("placeholder", "Contenue Info");

                const btn_supprimer_field = document.createElement("span");
                btn_supprimer_field.setAttribute('id', new_field_count);
                btn_supprimer_field.setAttribute('class', 'material-symbols-rounded btn_supr_new_field');
                btn_supprimer_field.innerHTML = 'delete';
                new_field_info.appendChild(input_titre);
                new_field_info.appendChild(input_contenue);
                new_field_info.appendChild(btn_supprimer_field);

                form_info.insertBefore(new_field_info, btn_ajouter_new_info.nextSibling);

                new_field_count++;

                btn_supprimer_field.addEventListener('click', (e) => {
                    const field_to_del = document.getElementById(`field_${e.target.id}`);
                    field_to_del.remove();
                });
            });
            
        });
    });
};


//Setting form to add spectacles in the DOM
const btn_add_spectacle = document.getElementById('btn_add_spectacle');
const modal_add_spectacle = document.getElementById('modal_add_spectacle');
const btn_close_spectacle = document.getElementById('btn_close_spectacle');

btn_add_spectacle.addEventListener('click', () => {
    modal_add_spectacle.style.opacity = 1;
    modal_add_spectacle.style.visibility = 'visible';
});
btn_close_spectacle.addEventListener('click', () => {
    modal_add_spectacle.style.opacity = 0;
    modal_add_spectacle.style.visibility = 'hidden';
});
//Making new flields option to the form
const btn_ajouter_info = document.getElementById("ajouter_info");
const btn_supprimer_info = document.getElementById("supprimer_info");
const form_info = document.getElementById("form_new_info");
btn_supprimer_info.style.display = "none";
//Counter fields
let field_count = 1;
btn_ajouter_info.addEventListener("click", function (event) {
    event.preventDefault();
    //Making new field container and two inputs
    const new_field_info = document.createElement("div");
    new_field_info.classList.add("new_field_info");
    new_field_info.setAttribute("id", "field_" + field_count);

    const input_titre = document.createElement("input");
    input_titre.setAttribute("type", "text");
    input_titre.setAttribute("name", `titre_info_${field_count}`);
    input_titre.setAttribute("placeholder", "Titre Info");

    const input_contenue = document.createElement("input");
    input_contenue.setAttribute("type", "text");
    input_contenue.setAttribute("name", `contenue_info_${field_count}`);
    input_contenue.setAttribute("placeholder", "Contenue Info");

    new_field_info.appendChild(input_titre);
    new_field_info.appendChild(input_contenue);

    const infos_spectacles = document.getElementById('infos_spectacle');
    infos_spectacles.appendChild(new_field_info);
    // form_info.insertBefore(new_field_info, btn_ajouter_info.nextSibling);

    field_count++;

    //Show the btn to suprime a field
    if (field_count > 1) {
        btn_supprimer_info.style.display = "inline-block";
    }
});

btn_supprimer_info.addEventListener("click", function (event) {
    event.preventDefault();
    if (field_count > 1) {
        const last_field_info = document.getElementById("field_" + (field_count - 1));
        last_field_info.parentNode.removeChild(last_field_info);
        field_count--;
    }
    if (field_count === 1) {
        btn_supprimer_info.style.display = "none";
    }
});



/* <<<<<AGENDA>>>>> */
const btn_add_event = document.getElementById('btn_add_event');
const modal_add_event = document.getElementById('modal_add_event');
const btn_close_agenda = document.getElementById('btn_close_agenda');
const container_agenda = document.getElementById('admin_agenda');

btn_add_event.addEventListener('click', () => {
    modal_add_event.style.opacity = 1;
    modal_add_event.style.visibility = 'visible';
});
btn_close_agenda.addEventListener('click', () => {
    modal_add_event.style.opacity = 0;
    modal_add_event.style.visibility = 'hidden';
});

fetch("../../PHP/Controllers/agenda.php", {
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => {
        getDataAgenda(data);
    });
function getDataAgenda(events) {
    events.forEach(date => {
        const event_box = container_agenda.appendChild(document.createElement('div'));
        event_box.setAttribute('class', 'admin_item');
        event_box.setAttribute('id', `${date.id_event}`);
        event_box.style.backgroundImage = `url(${date.image_event})`;
        let hidden_div = event_box.appendChild(document.createElement('div'));
        hidden_div.setAttribute('class', 'hidden_div');
        let delete_div = hidden_div.appendChild(document.createElement('div'));
        delete_div.setAttribute('class', 'delete_div');
        let btn_delete = delete_div.appendChild(document.createElement('span'));
        btn_delete.setAttribute('class', 'material-symbols-rounded');
        btn_delete.innerHTML = 'delete';

        let update_div = hidden_div.appendChild(document.createElement('div'));
        update_div.setAttribute('class', 'update_div');
        let btn_update = update_div.appendChild(document.createElement('span'));
        btn_update.setAttribute('class', 'material-symbols-rounded');
        btn_update.innerHTML = 'edit';

        event_box.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            hidden_div.style.opacity = 1;
            hidden_div.style.visibility = 'visible';
        });
        event_box.addEventListener('mouseleave', (e) => {
            e.preventDefault();
            hidden_div.style.opacity = 0;
            hidden_div.style.visibility = 'hidden';
        });

        /* DELETE REQUEST */
        btn_delete.addEventListener('click', () => {
            console.log(date);
            let modal_delete = document.getElementById('modal_delete');
            let btn_close_delete = document.getElementById('btn_close_delete');
            modal_delete.style.opacity = 1;
            modal_delete.style.visibility = 'visible';

            // Seting action value to the delete form in ./views/admin.php
            delete_form.setAttribute('action', '../Controllers/agenda.php')

            // Deleting the image of the membre
            const form_delete = document.getElementById('form_delete');
            const form_delete_file = document.getElementById('form_delete_file');
            form_delete.setAttribute('value', `${date.id_event}`);
            form_delete_file.setAttribute('value', `${date.image_event}`);

            // Confirmation message
            let titre = document.getElementById('titre_delete');
            titre.textContent = `Supprimer ${date.titre_event} de la agenda?`
            // Close delete dialog 'cancel'
            btn_close_delete.addEventListener('click', () => {
                form_delete.setAttribute('value', '');
                modal_delete.style.opacity = 0;
                modal_delete.style.visibility = 'hidden';
            });
        });
        /* UPDATE REQUEST */
        btn_update.addEventListener('click', () => {
            const modal_update = document.getElementById('modal_update_agenda');
            modal_update.style.opacity = 1;
            modal_update.style.visibility = 'visible';

            const form_update = document.getElementById('id_update_agenda');
            form_update.setAttribute('value', `${date.id_event}`);
            document.getElementById('nom_agenda').setAttribute("value", `${date.titre_event}`);
            document.getElementById('date_agenda').setAttribute("value", `${date.date_event}`);
            document.getElementById('old_image_agenda').setAttribute("value", `${date.image_event}`);
            document.getElementById('adresse_lieu').setAttribute("value", `${date.lieu_event}`);
            document.getElementById('adresse_num').setAttribute("value", `${date.adr_num_event}`);
            document.getElementById('adresse_rue').setAttribute("value", `${date.adr_rue_event}`);
            document.getElementById('adresse_ville').setAttribute("value", `${date.adr_ville_event}`);
            
        });
    });
};

/* <<<<<EQUIPE>>>>> */

const btn_add_membre = document.getElementById('btn_add_membre');
const modal_add_membre = document.getElementById('modal_add_membre');
const btn_close_membre = document.getElementById('btn_close_membre');

const container_membres = document.getElementById('admin_membres');
const delete_form = document.getElementById('delete_form');

btn_add_membre.addEventListener('click', () => {
    modal_add_membre.style.opacity = 1;
    modal_add_membre.style.visibility = 'visible';
});
btn_close_membre.addEventListener('click', () => {
    modal_add_membre.style.opacity = 0;
    modal_add_membre.style.visibility = 'hidden';
});


fetch("../../PHP/Controllers/equipe.php", {
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => {
        getDataMembre(data);
    });
function getDataMembre(membres) {

    membres.forEach(membre => {
        const membre_box = container_membres.appendChild(document.createElement('div'));
        membre_box.setAttribute('class', 'admin_item');
        membre_box.setAttribute('id', `${membre.id_membre}`);
        membre_box.style.backgroundImage = `url(${membre.image_membre})`;
        let hidden_div = membre_box.appendChild(document.createElement('div'));
        hidden_div.setAttribute('class', 'hidden_div');
        let delete_div = hidden_div.appendChild(document.createElement('div'));
        delete_div.setAttribute('class', 'delete_div');
        let btn_delete = delete_div.appendChild(document.createElement('span'));
        btn_delete.setAttribute('class', 'material-symbols-rounded');
        btn_delete.innerHTML = 'delete';

        let update_div = hidden_div.appendChild(document.createElement('div'));
        update_div.setAttribute('class', 'update_div');
        let btn_update = update_div.appendChild(document.createElement('span'));
        btn_update.setAttribute('class', 'material-symbols-rounded');
        btn_update.innerHTML = 'edit';

        membre_box.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            hidden_div.style.opacity = 1;
            hidden_div.style.visibility = 'visible';
        });
        membre_box.addEventListener('mouseleave', (e) => {
            e.preventDefault();
            hidden_div.style.opacity = 0;
            hidden_div.style.visibility = 'hidden';
        });
        /* DELETE REQUEST */
        btn_delete.addEventListener('click', () => {
            console.log(membre.description_membre);
            let modal_delete = document.getElementById('modal_delete');
            let btn_close_delete = document.getElementById('btn_close_delete');
            modal_delete.style.opacity = 1;
            modal_delete.style.visibility = 'visible';

            // Seting action value to the delete form in views/admin.php
            delete_form.setAttribute('action', '../Controllers/equipe.php')

            // Deleting the image of the membre
            let form_delete = document.getElementById('form_delete');
            let form_delete_file = document.getElementById('form_delete_file');
            form_delete.setAttribute('value', `${membre.id_membre}`);
            form_delete_file.setAttribute('value', `${membre.image_membre}`);

            // Confirmation message
            let titre = document.getElementById('titre_delete');
            titre.textContent = `Supprimer ${membre.prenom_membre} ${membre.nom_membre} du équipe?`
            // Close delete dialog 'cancel'
            btn_close_delete.addEventListener('click', () => {
                form_delete.setAttribute('value', '');
                modal_delete.style.opacity = 0;
                modal_delete.style.visibility = 'hidden';
            });
        });
        /* UPDATE REQUEST */
        btn_update.addEventListener('click', () => {
            let modal_update = document.getElementById('modal_update_membre');
            modal_update.style.opacity = 1;
            modal_update.style.visibility = 'visible';
            let form_update = document.getElementById('id_update');
            form_update.setAttribute('value', `${membre.id_membre}`);
            document.getElementById('nom_membre').setAttribute("value", `${membre.nom_membre}`);
            document.getElementById('prenom_membre').setAttribute("value", `${membre.prenom_membre}`);
            document.getElementById('vignette_membre').setAttribute("value", `${membre.description_membre.vignette_fr}`);
            document.getElementById('description_membre').setAttribute("value", `${membre.description_membre.description_fr}`);
            document.getElementById('vignette_membre_esp').setAttribute("value", `${membre.description_membre.vignette_esp}`);
            document.getElementById('description_membre_esp').setAttribute("value", `${membre.description_membre.description_esp}`);
            document.getElementById('old_image_membre').setAttribute("value", `${membre.image_membre}`);
        });
    });
}

/* <<<<<SOUTIENS>>>>> */

let btn_add_soutien = document.getElementById('btn_add_soutien');
let modal_add_soutien = document.getElementById('modal_add_soutien');
let btn_close_soutien = document.getElementById('btn_close_soutien');
const container_soutiens = document.getElementById('admin_soutiens');

btn_add_soutien.addEventListener('click', () => {
    modal_add_soutien.style.opacity = 1;
    modal_add_soutien.style.visibility = 'visible';
});
btn_close_soutien.addEventListener('click', () => {
    modal_add_soutien.style.opacity = 0;
    modal_add_soutien.style.visibility = 'hidden';
});

fetch("../../PHP/Controllers/soutiens.php", {
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => {
        getDataSoutien(data);
    });

function getDataSoutien(soutiens) {

    soutiens.forEach(soutien => {
        console.log(soutien);
        const soutien_box = container_soutiens.appendChild(document.createElement('div'));
        soutien_box.setAttribute('class', 'admin_item');
        soutien_box.setAttribute('id', `${soutien.id_coll}`);
        soutien_box.style.backgroundImage = `url(${soutien.image_coll})`;
        let hidden_div = soutien_box.appendChild(document.createElement('div'));
        hidden_div.setAttribute('class', 'hidden_div');
        let delete_div = hidden_div.appendChild(document.createElement('div'));
        delete_div.setAttribute('class', 'delete_div');
        let btn_delete = delete_div.appendChild(document.createElement('span'));
        btn_delete.setAttribute('class', 'material-symbols-rounded');
        btn_delete.innerHTML = 'delete';

        let update_div = hidden_div.appendChild(document.createElement('div'));
        update_div.setAttribute('class', 'update_div');
        let btn_update = update_div.appendChild(document.createElement('span'));
        btn_update.setAttribute('class', 'material-symbols-rounded');
        btn_update.innerHTML = 'edit';

        soutien_box.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            hidden_div.style.opacity = 1;
            hidden_div.style.visibility = 'visible';
        });
        soutien_box.addEventListener('mouseleave', (e) => {
            e.preventDefault();
            hidden_div.style.opacity = 0;
            hidden_div.style.visibility = 'hidden';
        });

        /* DELETE REQUEST */
        btn_delete.addEventListener('click', () => {
            let modal_delete = document.getElementById('modal_delete');
            let btn_close_delete = document.getElementById('btn_close_delete');
            modal_delete.style.opacity = 1;
            modal_delete.style.visibility = 'visible';
            // Seting action value to the delete form in views/admin.php
            delete_form.setAttribute('action', '../Controllers/soutiens.php')

            // Deleting the image of the membre
            let form_delete = document.getElementById('form_delete');
            let form_delete_file = document.getElementById('form_delete_file');
            form_delete.setAttribute('value', `${soutien.id_coll}`);
            form_delete_file.setAttribute('value', `${soutien.image_coll}`);

            // Confirmation message
            let titre = document.getElementById('titre_delete');
            titre.textContent = `Supprimer ${soutien.nom_coll} du collaborateurs?`
            // Close delete dialog 'cancel'
            btn_close_delete.addEventListener('click', () => {
                form_delete.setAttribute('value', '');
                modal_delete.style.opacity = 0;
                modal_delete.style.visibility = 'hidden';
            });
        });

        /* UPDATE REQUEST */
        btn_update.addEventListener('click', () => {
            let modal_update = document.getElementById('modal_update_soutien');
            modal_update.style.opacity = 1;
            modal_update.style.visibility = 'visible';

            let form_update = document.getElementById('id_update_coll');
            form_update.setAttribute('value', `${soutien.id_coll}`);
            document.getElementById('nom_coll').setAttribute("value", `${soutien.nom_coll}`);
            document.getElementById('lien_coll').setAttribute("value", `${soutien.lien_coll}`);
            document.getElementById('old_image_coll').setAttribute("value", `${soutien.image_coll}`);
        });
    });
}