// Calling data
fetch("../../PHP/Controllers/spectacles.php", {
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => {
        getDataSpectacles(data);
        console.log(data);
    });
console.log(localStorage);

function setSpectaclesEspanol() {
    document.getElementById('spectacles_titre').innerHTML = 'Espectáculos';
    document.getElementById('btn_description_spectacle').innerHTML = 'Descripción';
    document.getElementById('btn_photos_spectacle').innerHTML = 'Fotos';
    document.getElementById('btn_contact_specetacle').innerHTML = 'Contacto';
    document.getElementById('btn_retour_specetacle').innerHTML = 'Volver';
};
function setSpectaclesFrancais() {
    document.getElementById('spectacles_titre').innerHTML = 'Spectacles';
    document.getElementById('btn_description_spectacle').innerHTML = 'Description';
    document.getElementById('btn_photos_spectacle').innerHTML = 'Photos';
    document.getElementById('btn_contact_specetacle').innerHTML = 'Contact';
    document.getElementById('btn_retour_specetacle').innerHTML = 'Retour';
};
if (localStorage.switch_class == 'switch esp') {
    setSpectaclesEspanol();
} else {
    setSpectaclesFrancais();
};

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (switch_language.classList.contains('fr')) {
                setSpectaclesFrancais();
            } else if (switch_language.classList.contains('esp')) {
                setSpectaclesEspanol();
            };
        };
    };
});
observer.observe(switch_language, { attributes: true });

// Callback fuction to add the images and this alt attribute
let imagesAdder = (tab, titre) => {
    const container_images = document.getElementById("container_images");
    tab.forEach((item, i) => {
        const image_box = container_images.appendChild(document.createElement("div"));
        image_box.setAttribute("class", "img_spectacle");
        image_box.setAttribute("id", `img_spectacle_${i}`); //tal vez no sea necesario el ID.
        let new_image = image_box.appendChild(document.createElement("img"));
        new_image.src = item;
        new_image.setAttribute("alt", `image${i} du spectacle ${titre}`);
    });
};

// Setting the base behavior of the main carousel
const slider_container = document.getElementById("slider_container");
const btn_description_spectacle = document.getElementById("btn_description_spectacle");
const btn_photos_spectacle = document.getElementById("btn_photos_spectacle");
const btn_videos_specetacle = document.getElementById("btn_videos_specetacle");
const spectacle_description = document.getElementById("spectacle_description");
const spectacle_video = document.getElementById("spectacle_video");
const spectacle_images = document.getElementById("spectacle_images");

// Each button slides the main carousel to the corresponding section and hides the other two
const btns_slide_spectacles = document.querySelectorAll(".btns_slide_spectacles a");
btns_slide_spectacles.forEach((item, i) => {
    item.addEventListener("click", () => {
        btns_slide_spectacles.forEach(item => item.classList.remove("element_active"));
        btns_slide_spectacles[i].classList.add("element_active");
        // document.querySelector('.footer_spectacles').classList.toggle('hidden_element');
        // agregar clase al footer
    });
});

// Calculating the horizontal scroll of the main carousel
// Resize function prevents behavior errors by changing the size or the orientation of the screnen
btn_photos_spectacle.addEventListener("click", () => {
    let resize = () => { slider_container.scrollLeft = slider_container.offsetWidth };
    resize();
    spectacle_images.classList.remove("slide_hidden");
    spectacle_description.classList.add("slide_hidden");
    spectacle_video.classList.add("slide_hidden");
    window.onresize = resize;
});
btn_description_spectacle.addEventListener("click", () => {
    let resize = () => { slider_container.scrollLeft = -2 * slider_container.offsetWidth };
    resize();
    spectacle_description.classList.remove("slide_hidden");
    spectacle_images.classList.add("slide_hidden");
    spectacle_video.classList.add("slide_hidden");
    window.onresize = resize;
})
btn_videos_specetacle.addEventListener("click", () => {
    let resize = () => { slider_container.scrollLeft = 2 * slider_container.offsetWidth };
    resize();
    spectacle_video.classList.remove("slide_hidden");
    spectacle_description.classList.add("slide_hidden");
    spectacle_images.classList.add("slide_hidden");
    window.onresize = resize;
});

// Haldling the data
function getDataSpectacles(spectacles) {
    const container_spectacle_cards = document.getElementById('container_spectacle_cards');
    const new_spectacle_modal = document.getElementById('new_spectacle_modal');
    spectacles.forEach((spectacle, i) => {

        // Creating a card for each spectacle in the DOM
        const new_spectacle_card = container_spectacle_cards.appendChild(document.createElement('div'));
        new_spectacle_card.setAttribute('class', 'new_spectacle');
        new_spectacle_card.setAttribute('id', `new_spectacle_${i}`);
        new_spectacle_card.style.backgroundImage = `url(${spectacle.affiche_spectacle})`;

        // Setting the content to the parent carousel in the DOM based on the card clicked
        // The parent carousel consists of three parts: description, images and video

        // Showing the main carousel for the card clicked
        // The content behind the modal is hidden to prevent problems with the screen height
        new_spectacle_card.addEventListener('click', () => {
            btn_description_spectacle.classList.toggle("element_active");
            new_spectacle_card.classList.toggle("hidden_element"); // corregir, porque solo oculta la card clikeada. debe ocultar todo el contenedor de cards.
            container_spectacle_cards.classList.toggle("slide_hidden");
            new_spectacle_modal.classList.toggle('hidden_element');

            // Setting the content to the first part (description) of the main carousel
            const titre = document.getElementById('spectacle_name');
            titre.textContent = spectacle.titre_spectacle;
            let p_description_spectacle = document.getElementById('p_description_spectacle');
            let p_comentaire_spectacle = document.getElementById('p_comentaire_spectacle');

            if (localStorage.switch_class == 'switch esp') {
                p_description_spectacle.textContent = spectacle.description_spectacle.description_esp;
                p_comentaire_spectacle.textContent = spectacle.site_spectacle.site_esp;
            } else {
                p_description_spectacle.textContent = spectacle.description_spectacle.description_fr;
                p_comentaire_spectacle.textContent = spectacle.site_spectacle.site_fr;
            };
            const observer = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        if (switch_language.classList.contains('fr')) {
                            p_description_spectacle.textContent = spectacle.description_spectacle.description_fr;
                            p_comentaire_spectacle.textContent = spectacle.site_spectacle.site_fr;
                        } else if (switch_language.classList.contains('esp')) {
                            p_description_spectacle.textContent = spectacle.description_spectacle.description_esp;
                            p_comentaire_spectacle.textContent = spectacle.site_spectacle.site_esp;
                        };
                    };
                };
            });
            observer.observe(switch_language, { attributes: true });
            const spectacle_description = document.getElementById('spectacle_description');

            const info_array = Object.entries(spectacle.info_spectacle);
            for (let i = 1; i < info_array.length + 1; i++) {
                let new_info = spectacle_description.appendChild(document.createElement('p'));
                new_info.setAttribute('id', `info_${spectacle.titre_spectacle}_${i}`);
                let new_titre = document.createElement('span');
                new_titre.style.fontWeight = 'bold';

                if (localStorage.switch_class == 'switch esp') {
                    new_titre.textContent = `${spectacle.info_spectacle[i].titre_info_esp}: `;
                } else {
                    new_titre.textContent = `${spectacle.info_spectacle[i].titre_info_fr}: `;
                };
                
                const observer = new MutationObserver((mutationsList) => {
                    for (const mutation of mutationsList) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                            if (switch_language.classList.contains('fr')) {
                                new_titre.textContent = `${spectacle.info_spectacle[i].titre_info_fr}: `;
                            } else if (switch_language.classList.contains('esp')) {
                                new_titre.textContent = `${spectacle.info_spectacle[i].titre_info_esp}: `;
                            };
                        };
                    };
                });
                observer.observe(switch_language, { attributes: true });
                
                new_info.appendChild(new_titre);
                new_info.appendChild(document.createTextNode(spectacle.info_spectacle[i].contenue_info));
            };

            // Setting the content to the second part of the main carousel
            // Calling the function to insert the images in the gallery
            imagesAdder(spectacle.images_spectacle, spectacle.titre_spectacle);
            
            // Making a modal carousel to the images that will be a child of the main carousel
            const container_slide_modal = document.querySelector('.container_modal');
            const slide_modal = document.querySelector('.slide_modal');
            
            // Img elements already on the DOM
            const images_spectacle = document.querySelectorAll('.container_images_spectacle .img_spectacle img');
            const img_slide_show = document.querySelector('.slide_modal img');
            
            // Images from the DB
            const images = spectacle.images_spectacle;
            let count = 0;

            // Taking the target of the click event in the modal to handle the child carousel
            slide_modal.addEventListener('click', (e) => {
                let btn_prev = document.getElementById('btn_prev'),
                    btn_next = document.getElementById('btn_next'),
                    img = slide_modal.querySelector('img');

                if (e.target == btn_prev) {
                    if (count > 0) {
                        img.src = images[count - 1];
                        count--;
                    } else {
                        img.src = images[images.length - 1];
                        count = images.length - 1;
                    };
                } else if (e.target == btn_next) {
                    if (count < images.length - 1) {
                        img.src = images[count + 1];
                        count++
                    } else {
                        img.src = images[0];
                        count = 0;
                    };
                };
            });

            // Creating array from the images already on the DOM to be displayed in the child carousel
            Array.from(images_spectacle).forEach((img, i) => {
                img.addEventListener('click', () => {

                    // Slide on medium and large screens
                    if (slider_container.offsetWidth > 576) {
                        const image_selected = i;
                        img_slide_show.src = images[image_selected];
                        count = image_selected;
                        container_slide_modal.style.opacity = 1;
                        container_slide_modal.style.visibility = 'visible';

                    // Slide on small screens and tactile feedback
                    } else if (slider_container.offsetWidth <= 576) {
                        const image_selected = i;
                        img_slide_show.src = images[image_selected];
                        count = image_selected;
                        container_slide_modal.style.opacity = 1;
                        container_slide_modal.style.visibility = 'visible';

                        // Detect touch events
                        let touchstartX = 0,
                            touchendX = 0;
                        slide_modal.addEventListener('touchstart', (e) => {
                            touchstartX = e.changedTouches[0].screenX;
                        });
                        slide_modal.addEventListener('touchend', (e) => {
                            touchendX = e.changedTouches[0].screenX;
                            handleTouch();
                        });

                        // Detect direction of touch event
                        function handleTouch() {
                            // Slide left, move to next image
                            if (touchendX < touchstartX) {
                                if (count < images.length - 1) {
                                    img_slide_show.src = images[count + 1];
                                    count++;
                                } else {
                                    img_slide_show.src = images[0];
                                    count = 0;
                                };
                            };

                            // Slide right, move to previous image
                            if (touchendX > touchstartX) {
                                if (count > 0) {
                                    img_slide_show.src = images[count - 1];
                                    count--;
                                } else {
                                    img_slide_show.src = images[images.length - 1];
                                    count = images.length - 1;
                                };
                            };
                        };
                    };
                });
            });

            // Button to close the child carousel
            document.querySelector('.btn_close').addEventListener('click', () => {
                container_slide_modal.style.opacity = 0;
                container_slide_modal.style.visibility = 'hidden'
            });

            // Setting the content to the last part of the main carousel
            const spectacle_video = document.querySelector('#spectacle_video iframe');
            spectacle_video.setAttribute('src', spectacle.video_spectacle);
        });  
    });
};