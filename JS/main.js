// burguer
document.querySelector(".bars_menu").addEventListener("click", animateBars);
var line1_bars = document.querySelector(".line1_bars_menu");
var line2_bars = document.querySelector(".line2_bars_menu");
var line3_bars = document.querySelector(".line3_bars_menu");
// var nav_menu = document.querySelector(".nav_menu");
function animateBars() {
    line1_bars.classList.toggle("activeline1_bars_menu");
    line2_bars.classList.toggle("activeline2_bars_menu");
    line3_bars.classList.toggle("activeline3_bars_menu");
}

var burguer_menu = document.getElementById('bars_menu');
let li_nav_menu = document.querySelectorAll(`div.container_nav li`);

burguer_menu.addEventListener('click', () => {
    let i = 0;
    li_nav_menu.forEach(li_item => {
        if (li_item.className === 'hidden_menu') {
            li_item.classList.replace('hidden_menu', `active_menu_${i++}`);
        } else if (li_item.className != `hidden_menu`) {
            li_item.classList.replace(`active_menu_${i++}`, 'hidden_menu');
        };
    });
});


// contact

var btn_contact = document.getElementById('btn_contact');
let element_form_contact = document.getElementById('form_contact').children;
console.log(element_form_contact);

btn_contact.addEventListener("click", () => {
    // here i don´t use forEach because .children contains an HTML cololection, not an array
    for (let i=0; i < element_form_contact.length; i++) {
        if (element_form_contact[i].className === "hidden_form") {
            element_form_contact[i].classList.replace("hidden_form", `active_form_${i}`)
        } else if (element_form_contact[i].className != "hidden_form") {
            element_form_contact[i].classList.replace(`active_form_${i}`, "hidden_form");
        }
    }
})


//slide qui sommes
var container_slide = document.querySelector('.container_slide');
var container_equipe = document.getElementById('container_equipe');

document.querySelector('.btn_slide').addEventListener('click', slideScreen);
document.querySelector('.btn_slide_equipe').addEventListener('click', slideScreenEquipe);

function slideScreen() {
    container_slide.classList.toggle("active_container_slide");
    container_equipe.classList.replace('hidden_container_all_equipe', 'active_container_all_equipe');
}

function slideScreenEquipe() {
    container_slide.classList.remove('active_container_slide');
    setTimeout(() => {
        container_equipe.classList.replace('active_container_all_equipe', 'hidden_container_all_equipe');
    }, 200)
}

