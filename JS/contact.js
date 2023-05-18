// This function will bi called for de submit button of the form
function validationForm() {
    let email = document.getElementById("contact_mail").value;
    let nom = document.getElementById("contact_nom").value;
    let message = document.getElementById("contact_textarea").value;
    
    if (email == '' || nom == '' || message == '') {

        // Setting the alert text content according to language's page
        if (switch_language.classList.contains('fr')) {
            alert("Touts les champs sont obligatoires");
            return false;
        } else if (switch_language.classList.contains('esp')) {
            alert("Debe completar todos los campos");
            return false;
        };
    // Cheking de email
    } else if (!validationEmail(email)) {
        if (switch_language.classList.contains('fr')) {
            alert("Veuillez proportioner un mail valid");
            return false;
        } else if (switch_language.classList.contains('esp')) {
            alert("Ingrese un correo electrónico válido por favor");
            return false;
        };
    };
    return true;
};

// Callback function por the validation of the email
function validationEmail(email) {
    // Setting the regular expression to the validation of de email input
    // fr: expressions rationelles
    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Using function text() for check de email value
    if (!emailReg.test(email)) {
        return false;
    };
    return true;
};

// Setting the click event to close the modal only if the 'dialog' tag is already created
if (document.getElementById('contact_alert') != null) {
    document.getElementById('btn_contact_alert').addEventListener('click', () => {
        document.getElementById('contact_alert').remove();
    });
    // Adding the scape key option to close the modal
    document.addEventListener('keydown', (e) => {
        if (e.keycode = 27) {
            document.getElementById('contact_alert').remove();
        };
    });
};

// Translation of the contact page

function setContactEspanol() {
    document.getElementById('contact_titre').textContent = 'Contacto';
    document.getElementById('contact_nom').setAttribute('placeholder', 'Nombre');
    document.getElementById('contact_mail').setAttribute('placeholder', 'Mail');
    document.getElementById('contact_textarea').setAttribute('placeholder', 'Mensaje');
    document.getElementById('contact_submit').textContent = 'Enviar';
    if (document.getElementById('contact_alert') != null) {
        document.getElementById('contact_alert_p').textContent = 'Mensaje enviado!';
        document.getElementById('btn_contact_alert').textContent = 'Cerrar';
    };
};
function setContactFrancais() {
    document.getElementById('contact_titre').textContent = 'Nous Contacter';
    document.getElementById('contact_nom').setAttribute('placeholder', 'Nom');
    document.getElementById('contact_mail').setAttribute('placeholder', 'E-mail');
    document.getElementById('contact_textarea').setAttribute('placeholder', 'Menssage');
    document.getElementById('contact_submit').textContent = 'Envoyer';
    if (document.getElementById('contact_alert') != null) {
        document.getElementById('contact_alert_p').textContent = 'Message envoyé!';
        document.getElementById('btn_contact_alert').textContent = 'Fermer';
    }
};
// Using localStorage to set the lenguage, this values are defined in the main.js
if (localStorage.switch_class == 'switch esp') {
    setContactEspanol();
} else {
    setContactFrancais();
};
// Waching the class's changes of the 'switch_language' div to apply the correct translation function
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