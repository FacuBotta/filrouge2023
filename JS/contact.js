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

setTimeout(() => {
    for (let i = 0; i < element_form_contact.length; i++) {
        if (element_form_contact[i].className === "hidden_form") {
            element_form_contact[i].classList.replace("hidden_form", `active_form_${i}`);
        } else if (element_form_contact[i].className != "hidden_form") {
            element_form_contact[i].classList.replace(`active_form_${i}`, "hidden_form");
        };
    };
}, 600);