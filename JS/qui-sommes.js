fetch("../../PHP/Controllers/equipe.php", {
    method: "POST",
})
    .then((response) => response.json())
    .then((data) => {
        getDataMembres(data);
        // console.log(data);
    });

fetch("../../PHP/Controllers/soutiens.php", {
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => {
        getDataSoutien(data);
        // console.log(data);
    });

fetch("../../PHP/Controllers/description.php", {
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => {
        getDataDescription(data);
        // console.log(data);
    });
const compagnie_description = document.getElementById('compagnie_description');

function setEquipeEspanol() {
    document.getElementById('compagnie_titre').textContent = 'Quienes somos';
    document.getElementById('equipe_titre').textContent = 'Nuestro equipo';
    document.getElementById('soutiens_titre').textContent = 'Nuestros colaboradores';
};
function setEquipeFrancais() {
    document.getElementById('compagnie_titre').textContent = 'Qui Sommes Nous';
    document.getElementById('equipe_titre').textContent = 'Notre Équipe';
    document.getElementById('soutiens_titre').textContent = 'Nous Soutiens';
};
function getDataDescription(description) {
    const presentation = JSON.parse(description[0].presentation);
    compagnie_description.innerHTML = presentation.description_fr;
    // console.log(localStorage);

    if (localStorage.switch_class == 'switch esp') {
        compagnie_description.innerHTML = presentation.description_esp;
        setEquipeEspanol();
    } else {
        compagnie_description.innerHTML = presentation.description_fr;
        setEquipeFrancais();
    };
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (switch_language.classList.contains('fr')) {
                    compagnie_description.innerHTML = presentation.description_fr;
                    setEquipeFrancais();
                } else if (switch_language.classList.contains('esp')) {
                    compagnie_description.innerHTML = presentation.description_esp;
                    setEquipeEspanol();
                };
            };
        };
    });
    observer.observe(switch_language, { attributes: true });
};

const cards_equipe = document.getElementById('cards_equipe');
const cards_soutiens = document.getElementById('cards_soutiens');

function getDataSoutien(soutiens) {
    soutiens.forEach(soutien => {
        console.log(soutien.nom_coll);
        const link_soutien = cards_soutiens.appendChild(document.createElement("a"));
        link_soutien.setAttribute('href', soutien.lien_coll);
        link_soutien.setAttribute('target', '_blank');
        const soutien_card = link_soutien.appendChild(document.createElement("div"));
        soutien_card.setAttribute("class", "soutien");
        soutien_card.setAttribute("alt", `image de notre collaborateur ${soutien.nom_coll}`);
        soutien_card.style.backgroundImage = `url(${soutien.image_coll})`;
    });
};

function getDataMembres(membre) {
    membre.forEach((membre, i) => {
        const person_card = cards_equipe.appendChild(document.createElement("div"));
        person_card.setAttribute("class", "person_card");
        const block_person_card = person_card.appendChild(document.createElement("div"));
        block_person_card.setAttribute("class", "block_person_card");
        block_person_card.setAttribute("id", `block_person_card_${i}`);
        const person_image = block_person_card.appendChild(document.createElement("div"));
        person_image.setAttribute("class", "person_card_image");
        person_image.setAttribute("alt", `image du membre ${membre.nom_membre}`);
        person_image.style.backgroundImage = `url(${membre.image_membre})`;
        const person_card_CV = block_person_card.appendChild(document.createElement("div"));
        person_card_CV.setAttribute("class", "person_card_CV hidden_element");
        person_card_CV.setAttribute("id", `person_card_CV_${i}`);
        const titre_CV = person_card_CV.appendChild(document.createElement("h2"));
        titre_CV.setAttribute("id", `titre_CV_${i}`);
        titre_CV.textContent = `${membre.nom_membre} ${membre.prenom_membre}`;
        const text_CV = person_card_CV.appendChild(document.createElement("p"));
        text_CV.setAttribute("id", `text_CV_${i}`);
        const block_text_card = person_card.appendChild(document.createElement("div"));
        block_text_card.setAttribute("class", "person_card_text");
        block_text_card.setAttribute("id", `person_card_text_${i}`);
        const person_card_titre = block_text_card.appendChild(document.createElement("h3"));
        person_card_titre.textContent = `${membre.nom_membre} ${membre.prenom_membre}`
        const person_card_text = block_text_card.appendChild(document.createElement("p"));
        person_card_text.setAttribute("id", `person_card_text_${i}`);

        if (localStorage.switch_class == 'switch esp') {
            text_CV.textContent = `${membre.description_membre.description_esp}`;
            person_card_text.textContent = `${membre.description_membre.vignette_esp}`;
        } else {
            text_CV.textContent = `${membre.description_membre.description_fr}`;
            person_card_text.textContent = `${membre.description_membre.vignette_fr}`;
        }
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (switch_language.classList.contains('fr')) {
                        text_CV.textContent = `${membre.description_membre.description_fr}`;
                        person_card_text.textContent = `${membre.description_membre.vignette_fr}`;
                    } else if (switch_language.classList.contains('esp')) {
                        text_CV.textContent = `${membre.description_membre.description_esp}`;
                        person_card_text.textContent = `${membre.description_membre.vignette_esp}`;
                    };
                };
            };
        });
        observer.observe(switch_language, { attributes: true });

        person_image.addEventListener('click', () => {
            block_person_card.classList.toggle("block_person_card_active");
            person_card_CV.classList.toggle("hidden_element");
            block_text_card.classList.toggle("hidden_element");
        });
    });
};


//slide qui sommes
const container_slide = document.querySelector('.container_slide');
const container_equipe = document.getElementById('container_equipe');

document.querySelector('.btn_slide').addEventListener('click', slideScreen);
document.querySelector('.btn_slide_equipe').addEventListener('click', slideScreenEquipe);

function slideScreen() {
    container_slide.classList.toggle("active_container_slide");
    container_equipe.classList.toggle('hidden_element');
};
function slideScreenEquipe() {
    container_slide.classList.remove('active_container_slide');
    setTimeout(() => {
        container_equipe.classList.toggle('hidden_element');
    }, 200);
};