// Calling data
fetch("../Controllers/agenda.php", {
    method: "POST"
})
.then((response) => response.json())
.then((data) => {
    getDataAgenda(data);
});

const container_events = document.getElementById("container_events");

// Haldling the data
function getDataAgenda(events) {
    if (events.length == 0) {
        const message = container_events.appendChild(document.createElement("h1"));
        message.textContent = "Message on n´a pas des dates pour l´instant";
    };
    events.forEach(date => {
        const new_event = container_events.appendChild(document.createElement('div'));
        new_event.setAttribute('class', 'new_event');
        const image_event = new_event.appendChild(document.createElement('div'));
        image_event.setAttribute('class', 'event_card_image');
        image_event.setAttribute('alt', `Afiche du évènement ${date.titre_event}`)
        image_event.style.backgroundImage = `url(${date.image_event})`;
        const text_event = new_event.appendChild(document.createElement('div'));
        
        const titre_event = text_event.appendChild(document.createElement('h3'));
        titre_event.textContent = date.titre_event;
        const date_event = text_event.appendChild(document.createElement('p'));
        date_event.setAttribute('class', 'p_events_cards');

        // Setting format of sql dateTime
        const dateTime = new Date(date.date_event);
        
        // Format date
        const dateFormat = dateTime.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        });
        
        // Format hours
        const heuresFormat = dateTime.toLocaleTimeString('fr-FR', {
            hour: 'numeric',
            minute: 'numeric'
        }).replace(':', 'h');

        const calendar_symbol = document.createElement('span');
        calendar_symbol.setAttribute('class', 'material-symbols-rounded p_events_cards');
        calendar_symbol.innerHTML = 'event';
        const time_symbol = document.createElement('span');
        time_symbol.setAttribute('class', 'material-symbols-rounded p_events_cards');
        time_symbol.innerHTML = 'schedule'
        date_event.innerHTML = `${calendar_symbol.outerHTML} ${dateFormat} ${time_symbol.outerHTML} ${heuresFormat}`;

        // Setting address
        const adresse = `${date.adr_num_event} ${date.adr_rue_event}, ${date.adr_ville_event}`;
        const lieu_event = text_event.appendChild(document.createElement('p'));
        lieu_event.setAttribute('class', 'p_events_cards');
        lieu_event.style.fontWeight = 'bold';
        
        const home_symbol = document.createElement('span');
        home_symbol.setAttribute('class', 'material-symbols-rounded p_events_cards');
        home_symbol.innerHTML = 'home';
        lieu_event.innerHTML = `${home_symbol.outerHTML} ${date.lieu_event}`;

        // Setting the URL into correct format to google maps search with encodeURIComponent
        const adresse_event = text_event.appendChild(document.createElement('a'));
        adresse_event.href = `https://www.google.com/maps/search/${encodeURIComponent(adresse)}`;
        adresse_event.setAttribute('target', '_blank');
        adresse_event.setAttribute('class', 'adresse_link');
        adresse_event.setAttribute('aria-label', `Lien adresse Google Maps pour le spectacle ${date.titre_event}`);
        adresse_event.textContent = adresse;
        // More info link
        const link_espectacles = text_event.appendChild(document.createElement('a'));
        link_espectacles.setAttribute('href', 'spectacles.php');
        link_espectacles.setAttribute('aria-label', 'Lire la suite. Lien vers page spectacles');
        // Tooltip symbol
        const link_espectacles_symbol = link_espectacles.appendChild(document.createElement('span'));
        link_espectacles_symbol.setAttribute('class', 'material-symbols-rounded btn_event_card');
        link_espectacles_symbol.innerHTML = 'info';
        // Keyboard focus handler to 'more info' link
        link_espectacles.addEventListener('focus', (e)=> {
            e.preventDefault();
            link_espectacles_symbol.style.scale = 1.3;
            link_espectacles_symbol.style.color = 'black'
        });
        link_espectacles.addEventListener('focusout', (e)=> {
            e.preventDefault();
            link_espectacles_symbol.style.scale = 1;
            link_espectacles_symbol.style.color = 'var(--active-color)';
        });

        // Tooltip link spectacles
        const tooltip_agenda = container_events.appendChild(document.createElement('span'));
        tooltip_agenda.innerHTML = 'Lire la suite';
        tooltip_agenda.setAttribute('class', 'tooltip_agenda');
        function showTooltip(e) {
            tooltip_agenda.style.top = `${e.clientY - 35}px`;
            tooltip_agenda.style.left = `${e.clientX}px`;
            tooltip_agenda.style.visibility = 'visible';
            tooltip_agenda.style.opacity = 1;
            link_espectacles_symbol.addEventListener('mouseleave', ()=> {
                tooltip_agenda.style.visibility = 'hidden';
                tooltip_agenda.style.opacity = 0;
            });
        };
        link_espectacles_symbol.addEventListener('mousemove', (e) => showTooltip(e));
    });
};