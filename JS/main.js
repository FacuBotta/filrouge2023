// Burguer menu
let burguer_menu = document.getElementById('bars_menu');
let li_nav_menu = document.querySelectorAll('nav.hidden_nav_menu li');
let nav_menu = document.getElementById('nav_menu');

// Function to the toogle and replace of the classes of the burguer menu
toogleMenu = () => {
    // Toogle the classe for the three lines of the symbol menu
    document.querySelector('.line1_bars_menu').classList.toggle('activeline1_bars_menu');
    document.querySelector('.line2_bars_menu').classList.toggle('activeline2_bars_menu');
    document.querySelector('.line3_bars_menu').classList.toggle('activeline3_bars_menu');
    // Replacing the classe of the container's items menu
    if (nav_menu.className === 'hidden_nav_menu') {
        nav_menu.classList.replace('hidden_nav_menu', 'active_nav_menu')
    } else if (nav_menu.className === 'active_nav_menu') {
        nav_menu.classList.replace('active_nav_menu', 'hidden_nav_menu')
    };
    // Replacing the classes of each menu item
    li_nav_menu.forEach((li_item, i) => {
        if (li_item.className === 'hidden_menu_items') {
            li_item.classList.replace('hidden_menu_items', `active_menu_item_${i++}`);
        } else if (li_item.className != `hidden_menu_items`) {
            li_item.classList.replace(`active_menu_item_${i++}`, 'hidden_menu_items');
        };
    });
}
// Trigger to open and close the menu
burguer_menu.addEventListener('click', toogleMenu);
// Trigger to close the menu when the click is out the it
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
const switch_language_btn = document.querySelectorAll('#language_switch_container p');
const p_switch = switch_language.firstChild;

// Setting the variables to make use of localStorage
const saved_switch_class = localStorage.getItem('switch_class');
const saved_switch_text = localStorage.getItem('switch_text');
const saved_language = localStorage.getItem('language');

// Setting the class of 'switch_language' according to the localStorage value
if (saved_switch_class != null) {
    switch_language.className = saved_switch_class;
    // Setting the indicator of the current lenguage
    p_switch.textContent = saved_switch_text;
};

// Applying the correct translation function according the trigger class from 'switch_language'
if(switch_language.classList.contains('esp')) {
    setMenuEspanol();
} else {
    setMenuFrancais();
};

// Setting the class of 'switch_language', this class is the trigger to translate all the pages
// and applying the translation functions
toogleLanguage = () => {
    if (switch_language.className == 'switch fr') {
        switch_language.classList.replace('fr', 'esp');
        // Setting the indicator of the current lenguage in the buttom switch
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
// The trigger to translate all pages
switch_language_btn.forEach(btn => btn.addEventListener('click', toogleLanguage));