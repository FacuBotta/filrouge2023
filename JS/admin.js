/* <<<<<SPECTACLES>>>>> */

let btn_add_spectacle = document.getElementById('btn_add_spectacle');
let modal_add_spectacle = document.getElementById('modal_add_spectacle');
let btn_close_spectacle = document.getElementById('btn_close_spectacle');

btn_add_spectacle.addEventListener('click', () => {
    modal_add_spectacle.style.opacity = 1;
    modal_add_spectacle.style.visibility = 'visible';
});
btn_close_spectacle.addEventListener('click', () => {
    modal_add_spectacle.style.opacity = 0;
    modal_add_spectacle.style.visibility = 'hidden';
});

/* <<<<<AGENDA>>>>> */

let btn_add_event = document.getElementById('btn_add_event');
let modal_add_event = document.getElementById('modal_add_event');
let btn_close_agenda = document.getElementById('btn_close_agenda');

btn_add_event.addEventListener('click', () => {
    modal_add_event.style.opacity = 1;
    modal_add_event.style.visibility = 'visible';
});
btn_close_agenda.addEventListener('click', () => {
    modal_add_event.style.opacity = 0;
    modal_add_event.style.visibility = 'hidden';
});

/* <<<<<EQUIPE>>>>> */

let btn_add_membre = document.getElementById('btn_add_membre');
let modal_add_membre = document.getElementById('modal_add_membre');
let btn_close_membre = document.getElementById('btn_close_membre');
const container_membres = document.getElementById('admin_membres');
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
        getData(data);
    });
function getData(membres) {

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
        btn_delete.innerHTML='delete';

        let update_div = hidden_div.appendChild(document.createElement('div'));
        update_div.setAttribute('class', 'update_div');
        let btn_update = update_div.appendChild(document.createElement('span'));
        btn_update.setAttribute('class', 'material-symbols-rounded');
        btn_update.innerHTML='edit';

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
        btn_delete.addEventListener('click', ()=> {
            let modal_delete = document.getElementById('modal_delete');
            let btn_close_delete = document.getElementById('btn_close_delete');
            modal_delete.style.opacity = 1;
            modal_delete.style.visibility = 'visible';

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
        btn_update.addEventListener('click', ()=> {
            let modal_update = document.getElementById('modal_update_membre');
            let btn_close_update = document.getElementById('btn_close_update');
            modal_update.style.opacity = 1;
            modal_update.style.visibility = 'visible';
            let form_update = document.getElementById('id_update');
            form_update.setAttribute('value', `${membre.id_membre}`);
            document.getElementById('nom_membre').setAttribute("value", `${membre.nom_membre}`);
            document.getElementById('prenom_membre').setAttribute("value", `${membre.prenom_membre}`);
            document.getElementById('vignette_membre').setAttribute("value", `${membre.vignette_membre}`);
            document.getElementById('description_membre').setAttribute("value", `${membre.description_membre}`);
            document.getElementById('vignette_membre_esp').setAttribute("value", `${membre.vignette_membre_esp}`);
            document.getElementById('description_membre_esp').setAttribute("value", `${membre.description_membre_esp}`);
            document.getElementById('old_image_membre').setAttribute("value", `${membre.image_membre}`);
            btn_close_update.addEventListener('click', () => {
                form_update.setAttribute('value', '');
                modal_update.style.opacity = 0;
                modal_update.style.visibility = 'hidden';
            });
        });
    });
}

/* <<<<<SOUTIENS>>>>> */

let btn_add_soutien = document.getElementById('btn_add_soutien');
let modal_add_soutien = document.getElementById('modal_add_soutien');
let btn_close_soutien = document.getElementById('btn_close_soutien');

btn_add_soutien.addEventListener('click', () => {
    modal_add_soutien.style.opacity = 1;
    modal_add_soutien.style.visibility = 'visible';
});
btn_close_soutien.addEventListener('click', () => {
    modal_add_soutien.style.opacity = 0;
    modal_add_soutien.style.visibility = 'hidden';
});