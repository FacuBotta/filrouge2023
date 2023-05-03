// burguer menu

let burguer_menu = document.getElementById('bars_menu');
let li_nav_menu = document.querySelectorAll('nav.hidden_nav_menu li');
let nav_menu = document.getElementById('nav_menu');

toogleMenu = () => {
    document.querySelector('.line1_bars_menu').classList.toggle('activeline1_bars_menu');
    document.querySelector('.line2_bars_menu').classList.toggle('activeline2_bars_menu');
    document.querySelector('.line3_bars_menu').classList.toggle('activeline3_bars_menu');

    if (nav_menu.className === 'hidden_nav_menu') {
        nav_menu.classList.replace('hidden_nav_menu', 'active_nav_menu')
    } else if (nav_menu.className === 'active_nav_menu') {
        nav_menu.classList.replace('active_nav_menu', 'hidden_nav_menu')
    };

    li_nav_menu.forEach((li_item, i) => {
        if (li_item.className === 'hidden_menu_items') {
            li_item.classList.replace('hidden_menu_items', `active_menu_item_${i++}`);
        } else if (li_item.className != `hidden_menu_items`) {
            li_item.classList.replace(`active_menu_item_${i++}`, 'hidden_menu_items');
        };
    });
}

burguer_menu.addEventListener('click', toogleMenu);

document.onclick = (e) => {
    if (!burguer_menu.contains(e.target) && nav_menu.className != 'hidden_nav_menu') {
        toogleMenu();
    };
};


// Items of the menu and the footer to translate
function setMenuEspanol() {
    document.getElementById('menu_compagnie').innerHTML = 'LA COMPAÑIA';
    document.getElementById('menu_spectacles').innerHTML = 'ESPECTÁCULOS';
    document.getElementById('menu_don').innerHTML = 'DONAR';
    document.getElementById('menu_contact').innerHTML = 'CONTACTO';
    document.getElementById('foot_accueil').innerHTML = 'INICIO';
    document.getElementById('foot_don').innerHTML = 'DONAR';
};
function setMenuFrancais() {
    document.getElementById('menu_compagnie').innerHTML = 'LA COMPAGNIE';
    document.getElementById('menu_spectacles').innerHTML = 'SPECTACLES';
    document.getElementById('menu_don').innerHTML = 'FAIRE UN DON';
    document.getElementById('menu_contact').innerHTML = 'CONTACT';
    document.getElementById('foot_accueil').innerHTML = 'ACCUEIL';
    document.getElementById('foot_don').innerHTML = 'FAIRE UN DON';
};


//Language switch
const switch_language = document.getElementById('language_switch');
const p_switch = switch_language.firstChild;

const saved_switch_class = localStorage.getItem('switch_class');
const saved_switch_text = localStorage.getItem('switch_text');
const saved_language = localStorage.getItem('language');

if (saved_switch_class != null) {
    switch_language.className = saved_switch_class;
    p_switch.textContent = saved_switch_text;
}

if(switch_language.classList.contains('esp')) {
    setMenuEspanol();
} else {
    setMenuFrancais()
}

toogleLanguage = () => {
    if (switch_language.className == 'switch fr') {
        switch_language.classList.replace('fr', 'esp');
        p_switch.textContent = 'E'
        localStorage.setItem('switch_class', switch_language.className);
        localStorage.setItem('switch_text', p_switch.textContent);
        setMenuEspanol();
    } else if (switch_language.className == 'switch esp') {
        switch_language.classList.replace('esp', 'fr');
        p_switch.textContent = 'F'
        localStorage.setItem('switch_class', switch_language.className);
        localStorage.setItem('switch_text', p_switch.textContent);
        setMenuFrancais();
    };
};

switch_language.addEventListener('click', toogleLanguage);