fetch("../../PHP/Controllers/equipe.php", {
    method: "POST", 
})
.then((response) => response.json())
.then((data) => {
    getData(data);
});

const cards_equipe = document.getElementById('cards_equipe');

function getData(membre) {
    console.log(membre);
    membre.forEach((membre, i) => {
        const person_card = cards_equipe.appendChild(document.createElement("div"));
        person_card.setAttribute("class", "person_card");
        const block_person_card = person_card.appendChild(document.createElement("div"));
        block_person_card.setAttribute("class", "block_person_card");
        block_person_card.setAttribute("id", `block_person_card_${i}`);
        const person_image = block_person_card.appendChild(document.createElement("div"));
        person_image.setAttribute("class", "person_card_image");
        person_image.style.backgroundImage = `url(${membre.image_membre})`;
        const person_card_CV = block_person_card.appendChild(document.createElement("div"));
        person_card_CV.setAttribute("class", "person_card_CV hidden_element");
        person_card_CV.setAttribute("id", `person_card_CV_${i}`);
        const titre_CV = person_card_CV.appendChild(document.createElement("h2"));
        titre_CV.setAttribute("id", `titre_CV_${i}`);
        titre_CV.textContent = `${membre.nom_membre} ${membre.prenom_membre}`;
        const text_CV = person_card_CV.appendChild(document.createElement("p"));
        text_CV.setAttribute("id", `text_CV_${i}`);
        text_CV.textContent = `${membre.description_membre}`;
        const block_text_card = person_card.appendChild(document.createElement("div"));
        block_text_card.setAttribute("class", "person_card_text");
        block_text_card.setAttribute("id", `person_card_text_${i}`);
        const person_card_titre = block_text_card.appendChild(document.createElement("h3"));
        person_card_titre.textContent = `${membre.nom_membre} ${membre.prenom_membre}`
        const person_card_text = block_text_card.appendChild(document.createElement("p"));
        person_card_text.setAttribute("id", `person_card_text_${i}`);
        person_card_text.textContent = `${membre.vignette_membre}`;
        person_image.addEventListener('click', () => {
            block_person_card.classList.toggle("block_person_card_active");
            person_card_CV.classList.toggle("hidden_element");
            block_text_card.classList.toggle("hidden_element");
        });
    });
};


//slide qui sommes
var container_slide = document.querySelector('.container_slide');
var container_equipe = document.getElementById('container_equipe');

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