// contact

var btn_contact = document.getElementById('btn_contact');
let element_form_contact = document.getElementById('form_contact').children;

/* btn_contact.addEventListener("click", () => {
    // here i don´t use forEach because .children contains an HTML cololection, not an array
    for (let i = 0; i < element_form_contact.length; i++) {
        if (element_form_contact[i].className === "hidden_form") {
            element_form_contact[i].classList.replace("hidden_form", `active_form_${i}`);
        } else if (element_form_contact[i].className != "hidden_form") {
            element_form_contact[i].classList.replace(`active_form_${i}`, "hidden_form");
        };
    };
}); */

function setContactEspanol() {
    document.getElementById('contact_titre').textContent = 'Contacto';
    document.getElementById('contact_nom').setAttribute('placeholder', 'Nombre');
    document.getElementById('contact_mail').setAttribute('placeholder', 'Mail');
    document.getElementById('contact_textarea').setAttribute('placeholder', 'Mensaje');
    document.getElementById('contact_submit').textContent = 'Enviar';
};
function setContactFrancais() {
    document.getElementById('contact_titre').textContent = 'Nous Contacter';
    document.getElementById('contact_nom').setAttribute('placeholder', 'Nom');
    document.getElementById('contact_mail').setAttribute('placeholder', 'E-mail');
    document.getElementById('contact_textarea').setAttribute('placeholder', 'Menssage');
    document.getElementById('contact_submit').textContent = 'Envoyer';
};

if (localStorage.switch_class == 'switch esp') {
    setContactEspanol();
} else {
    setContactFrancais();
};
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (switch_language.classList.contains('fr')) {
                setContactFrancais();
            } else if (switch_language.classList.contains('esp')) {
                setContactEspanol();
            };
        };
    };
});
observer.observe(switch_language, { attributes: true });

setTimeout(() => {
    for (let i = 0; i < element_form_contact.length; i++) {
        if (element_form_contact[i].className === "hidden_form") {
            element_form_contact[i].classList.replace("hidden_form", `active_form_${i}`);
        } else if (element_form_contact[i].className != "hidden_form") {
            element_form_contact[i].classList.replace(`active_form_${i}`, "hidden_form");
        };
    };
}, 600);