//agenda

const events_container = document.querySelector(".container_cards");
console.log(events_container.childNodes.length);
console.log(events_container);

if (events_container.childNodes.length <= 5) {
    let message = events_container.appendChild(document.createElement("h1"));
    message.textContent = "Message on n´a pas des dates pour l´instant";
};

const btn_add_event = document.querySelector(".add_event_card");
const container_events = document.querySelector(".container_all");
btn_add_event.addEventListener("click", () => {
    let form_agenda = container_events.appendChild(document.createElement("div"));
    form_agenda.setAttribute("class", "container_modal");
});