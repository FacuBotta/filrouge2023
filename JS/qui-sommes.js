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

//CV equipe

const person_card = document.querySelectorAll(".person_card div .person_card_image");

person_card.forEach((card, i) => {
    card.addEventListener("click", () => {
        let person_card_CV = document.getElementById(`person_card_CV_${i}`);
        let block_person_card = document.getElementById(`block_person_card_${i}`);
        let person_card_text = document.getElementById(`person_card_text_${i}`);
        block_person_card.classList.toggle("block_person_card_active");
        person_card_CV.classList.toggle("hidden_element");
        person_card_text.classList.toggle("hidden_element");

        document.onclick = (e) => {
            console.log(e.target.classList);
            /* if (person_card.classList.contains(e.target)) {
                block_person_card.classList.toggle("block_person_card_active");
                person_card_CV.classList.toggle("hidden_element");
                person_card_text.classList.toggle("hidden_element");
            }; */
        };
    });
});