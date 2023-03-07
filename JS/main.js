// burguer

document.querySelector(".bars_menu").addEventListener("click", animateBars);
var line1_bars = document.querySelector(".line1_bars_menu");
var line2_bars = document.querySelector(".line2_bars_menu");
var line3_bars = document.querySelector(".line3_bars_menu");

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