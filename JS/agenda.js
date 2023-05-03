// Calling data
fetch("../../PHP/Controllers/agenda.php", {
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
    }
    events.forEach(date => {
        const new_event = container_events.appendChild(document.createElement('div'));
        new_event.setAttribute('class', 'new_event');
        const image_event = new_event.appendChild(document.createElement('div'));
        image_event.setAttribute('class', 'event_card_image');
        image_event.setAttribute('alt', `Afiche du évènement ${date.titre_event}`)
        image_event.style.backgroundImage = `url(${date.image_event})`;
        const text_event = new_event.appendChild(document.createElement('div'));
        
        // text_event.setAttribute('class', 'event_card_text'); //SIRVE?
        const titre_event = text_event.appendChild(document.createElement('h3'));
        titre_event.textContent = date.titre_event;
        const date_event = text_event.appendChild(document.createElement('p'));
        
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
        });
        date_event.textContent = `${dateFormat} ${heuresFormat}`;

        // Setting address
        const adresse = `${date.adr_num_event} ${date.adr_rue_event}, ${date.adr_ville_event}`;
        const lieu_event = text_event.appendChild(document.createElement('p'));
        lieu_event.textContent = date.lieu_event;

        // Setting the URL into correct format to google maps search with encodeURIComponent
        const adresse_event = text_event.appendChild(document.createElement('a'));
        adresse_event.href = `https://www.google.com/maps/search/${encodeURIComponent(adresse)}`;
        adresse_event.setAttribute('target', '_blank');
        adresse_event.textContent = adresse;
        const link_espectacles = text_event.appendChild(document.createElement('a'));
        link_espectacles.textContent = 'LIRE LA SUITE';
        link_espectacles.setAttribute('class', 'btn_event_card');
        link_espectacles.setAttribute('href', 'spectacles.php');
    });
}