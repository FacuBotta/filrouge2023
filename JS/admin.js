let btn_add_spectacle = document.getElementById('btn_add_spectacle');
let modal_add_spectacle = document.getElementById('modal_add_spectacle');
let btn_close_spectacle = document.getElementById('btn_close_spectacle');

btn_add_spectacle.addEventListener('click', () => {
    modal_add_spectacle.style.opacity = 1;
    modal_add_spectacle.style.visibility = 'visible';
});
btn_close_spectacle.addEventListener('click', ()=> {
    modal_add_spectacle.style.opacity = 0;
    modal_add_spectacle.style.visibility = 'hidden';
});

let btn_add_event = document.getElementById('btn_add_event');
let modal_add_event = document.getElementById('modal_add_event');
let btn_close_agenda = document.getElementById('btn_close_agenda');

btn_add_event.addEventListener('click', () => {
    modal_add_event.style.opacity = 1;
    modal_add_event.style.visibility = 'visible';
});
btn_close_agenda.addEventListener('click', ()=> {
    modal_add_event.style.opacity = 0;
    modal_add_event.style.visibility = 'hidden';
});

let btn_add_membre = document.getElementById('btn_add_membre');
let modal_add_membre = document.getElementById('modal_add_membre');
let btn_close_membre = document.getElementById('btn_close_membre');

btn_add_membre.addEventListener('click', () => {
    modal_add_membre.style.opacity = 1;
    modal_add_membre.style.visibility = 'visible';
});
btn_close_membre.addEventListener('click', ()=> {
    modal_add_membre.style.opacity = 0;
    modal_add_membre.style.visibility = 'hidden';
});

let btn_add_soutien = document.getElementById('btn_add_soutien');
let modal_add_soutien = document.getElementById('modal_add_soutien');
let btn_close_soutien = document.getElementById('btn_close_soutien');

btn_add_soutien.addEventListener('click', () => {
    modal_add_soutien.style.opacity = 1;
    modal_add_soutien.style.visibility = 'visible';
});
btn_close_soutien.addEventListener('click', ()=> {
    modal_add_soutien.style.opacity = 0;
    modal_add_soutien.style.visibility = 'hidden';
});