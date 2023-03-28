// burguer menu

let burguer_menu = document.getElementById('bars_menu');
let li_nav_menu = document.querySelectorAll('nav.hidden_nav_menu li');
let nav_menu = document.getElementById('nav_menu');

toogle_menu = () => {
    document.querySelector('.line1_bars_menu').classList.toggle('activeline1_bars_menu');
    document.querySelector('.line2_bars_menu').classList.toggle('activeline2_bars_menu');
    document.querySelector('.line3_bars_menu').classList.toggle('activeline3_bars_menu');

    if (nav_menu.className === 'hidden_nav_menu') {
        nav_menu.classList.replace('hidden_nav_menu', 'active_nav_menu')
    } else if (nav_menu.className === 'active_nav_menu') {
        nav_menu.classList.replace('active_nav_menu', 'hidden_nav_menu')
    }

    li_nav_menu.forEach((li_item, i) => {
        if (li_item.className === 'hidden_menu_items') {
            li_item.classList.replace('hidden_menu_items', `active_menu_item_${i++}`);
        } else if (li_item.className != `hidden_menu_items`) {
            li_item.classList.replace(`active_menu_item_${i++}`, 'hidden_menu_items');
        };
    });
}

burguer_menu.addEventListener('click', toogle_menu);

document.onclick = (e) => {
    if (!burguer_menu.contains(e.target) && nav_menu.className != 'hidden_nav_menu') {
        toogle_menu();
    };
};