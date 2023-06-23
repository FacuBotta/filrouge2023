// Calling data
fetch("../Controllers/spectacles.php", {
    method: "POST"
})
    .then((response) => response.json())
    .then((data) => {
        getDataSpectacles(data);
    });
// Setting the functions to translate the static content of the page
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
// Observing the changes in the 'switch_language' class to translate
function handleLanguage(tab, p1 = '', p2 = '', p3 = '', i) {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (switch_language.classList.contains('fr')) {
                    setSpectaclesFrancais();
                    if (p1 != '' & p2 != '') {
                        p1.textContent = tab.description_spectacle.description_fr;
                        p2.textContent = tab.site_spectacle.site_fr;
                    };
                    if (p3 != '') {
                        p3.textContent = `${tab.info_spectacle[i].titre_info_fr}: `;
                    };
                } else if (switch_language.classList.contains('esp')) {
                    setSpectaclesEspanol();
                    if (p1 != '' & p2 != '') {
                        p1.textContent = tab.description_spectacle.description_esp;
                        p2.textContent = tab.site_spectacle.site_esp;
                    };
                    if (p3 != '') {
                        p3.textContent = `${tab.info_spectacle[i].titre_info_esp}: `;
                    };
                };
            };
        };
    });
    observer.observe(switch_language, { attributes: true });
};
// Setting the lenguage according to the localStorage data
if (localStorage.switch_class == 'switch esp') {
    setSpectaclesEspanol();
} else {
    setSpectaclesFrancais();
};
handleLanguage();

// Fuction to add the images and this alt attribute
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

const btns_slide_spectacles = document.querySelectorAll(".btns_slide_spectacles button");
btns_slide_spectacles.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        btns_slide_spectacles.forEach(item => item.classList.remove("element_active"));
        btns_slide_spectacles[i].classList.add("element_active");
        slideHandler(e);
    });
});
// Calculating the horizontal scroll of the main carousel
// Setting the class
const slideHandler = (e) => {
    const x = parseInt(e.target.getAttribute("data-slide"));
    const resize = () => { slider_container.scrollLeft = x * slider_container.offsetWidth };
    resize();
    document.querySelectorAll('.slide').forEach(slide => {
        const btnX = parseInt(slide.getAttribute("data-slide"));
        if (x === btnX) {
            slide.classList.remove('slide_hidden');
        } else {
            slide.classList.add('slide_hidden');
        };
    });
    window.onresize = resize;
};
// Haldling the data
var tabindex = 10;
function getDataSpectacles(spectacles) {
    const container_spectacle_cards = document.getElementById('container_spectacle_cards');
    const new_spectacle_modal = document.getElementById('new_spectacle_modal');
    spectacles.forEach((spectacle, i) => {
        tabindex += i;
        // Creating a card for each spectacle in the DOM
        const new_spectacle_card = container_spectacle_cards.appendChild(document.createElement('div'));
        new_spectacle_card.setAttribute('class', 'new_spectacle');
        new_spectacle_card.setAttribute('id', `new_spectacle_${i}`);
        new_spectacle_card.style.backgroundImage = `url(${spectacle.affiche_spectacle})`;
        new_spectacle_card.setAttribute('alt', `Affiche du spectacle ${spectacle.titre_spectacle}`);
        new_spectacle_card.setAttribute('aria-label', `spectacle ${spectacle.titre_spectacle}`);
        new_spectacle_card.setAttribute('tabindex', tabindex);

        function showSpectacleModal() {
            // The content behind the modal is hidden to prevent problems with the screen height
            btn_description_spectacle.classList.toggle("element_active");
            container_spectacle_cards.classList.toggle("hidden_element");
            new_spectacle_modal.classList.toggle('hidden_element');

            // Setting the content to the first part (description) of the main carousel
            const titre = document.getElementById('spectacle_name');
            titre.textContent = spectacle.titre_spectacle;
            const p_description_spectacle = document.getElementById('p_description_spectacle'); //description
            const p_comentaire_spectacle = document.getElementById('p_comentaire_spectacle'); //site

            // Setting the description lenguage according to the current language
            if (localStorage.switch_class == 'switch esp') {
                p_description_spectacle.textContent = spectacle.description_spectacle.description_esp;
                p_comentaire_spectacle.textContent = spectacle.site_spectacle.site_esp;
            } else {
                p_description_spectacle.textContent = spectacle.description_spectacle.description_fr;
                p_comentaire_spectacle.textContent = spectacle.site_spectacle.site_fr;
            }
            handleLanguage(spectacle, p_description_spectacle, p_comentaire_spectacle);

            const spectacle_description = document.getElementById('spectacle_description');
            const info_array = Object.entries(spectacle.info_spectacle);
            for (let i = 1; i < info_array.length + 1; i++) {
                const new_info = spectacle_description.appendChild(document.createElement('p'));
                new_info.setAttribute('id', `info_${spectacle.titre_spectacle}_${i}`);
                const new_titre = document.createElement('span');
                new_titre.style.fontWeight = 'bold';

                // Setting the info lenguage according to the current language
                if (localStorage.switch_class == 'switch esp') {
                    new_titre.textContent = `${spectacle.info_spectacle[i].titre_info_esp}: `;
                } else {
                    new_titre.textContent = `${spectacle.info_spectacle[i].titre_info_fr}: `;
                };
                handleLanguage(spectacle, p1 = '', p2 = '', new_titre, i);

                new_info.appendChild(new_titre);
                new_info.appendChild(document.createTextNode(spectacle.info_spectacle[i].contenue_info));
            };

            // Setting the content to the second part of the main carousel
            // Making a modal carousel to the images that will be a child of the main carousel
            const container_slide_modal = document.querySelector('.container_modal');
            const slide_modal = document.querySelector('.slide_modal');

            // Images from the DB
            const { images_spectacle: images } = spectacle;
            // Calling the function to insert the images in the gallery
            imagesAdder(images, spectacle.titre_spectacle);
            // Creating array from the images already on the DOM to be displayed in the child carousel
            // Img elements already on the DOM tanks to imagesAdder() function
            const images_spectacle = document.querySelectorAll('.container_images_spectacle .img_spectacle');

            // Taking the target of the click event in the modal to handle the child carousel
            // handle carousel direction. img to show, tab and direction
            let count = 0;
            function handleCarouselDir(img, tab, dir) {
                if (dir == 'prev') {
                    if (count > 0) {
                        img.src = tab[count - 1];
                        count--;
                    } else {
                        img.src = tab[tab.length - 1];
                        count = tab.length - 1;
                    };
                } else if (dir == 'next') {
                    if (count < tab.length - 1) {
                        img.src = tab[count + 1];
                        count++
                    } else {
                        img.src = tab[0];
                        count = 0;
                    };
                };
            };
            function handleModal() {
                if (container_slide_modal.style.opacity == 0) {
                    container_slide_modal.style.opacity = 1;
                    container_slide_modal.style.visibility = 'visible';
                } else {
                    container_slide_modal.style.opacity = 0;
                    container_slide_modal.style.visibility = 'hidden';
                }
            };
            slide_modal.addEventListener('click', (e) => {
                let btn_prev = document.getElementById('btn_prev'),
                    btn_next = document.getElementById('btn_next'),
                    img = slide_modal.querySelector('img');
                if (e.target == btn_prev) {
                    handleCarouselDir(img, images, 'prev');
                } else if (e.target == btn_next) {
                    handleCarouselDir(img, images, 'next');
                };
            });

            const img_slide_show = document.querySelector('.slide_modal img');
            Array.from(images_spectacle).forEach((img, i) => {
                img.addEventListener('click', () => {
                    // Slide on medium and large screens
                    if (slider_container.offsetWidth > 576) {
                        const image_selected = i;
                        img_slide_show.src = images[image_selected];
                        count = image_selected;
                        handleModal();

                    // Slide on small screens and tactile feedback
                    } else if (slider_container.offsetWidth <= 576) {
                        const image_selected = i;
                        img_slide_show.src = images[image_selected];
                        count = image_selected;
                        handleModal();
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
                                handleCarouselDir(img, images, 'next');
                            };
                            // Slide right, move to previous image
                            if (touchendX > touchstartX) {
                                handleCarouselDir(img, images, 'prev');
                            };
                        };
                    };
                });
            });

            // Observing the class of the photo's button. If it's active, keys are available to handle the carousel.
            var observer_tab = new MutationObserver(function (mutationsList) {
                for (var mutation of mutationsList) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        if (btn_photos_spectacle.classList.contains('element_active') && container_slide_modal.style.opacity == 0) {
                            btn_photos_spectacle.addEventListener('keydown', (e) => {
                                if ((e.keyCode === 13 || e.keyCode === 32) && container_slide_modal.style.opacity == 0) {
                                    handleModal()
                                    img_slide_show.src = images[0];
                                    document.addEventListener('keydown', (e) => {
                                        if (e.keyCode === 39) {
                                            handleCarouselDir(img_slide_show, images, 'next');
                                        } else if (e.keyCode === 37) {
                                            handleCarouselDir(img_slide_show, images, 'prev');
                                        };
                                    });
                                    //Close the carousel modal.
                                    document.addEventListener('keydown', (e) => {
                                        if (e.keyCode === 27 && container_slide_modal.style.opacity == 1) {
                                        handleModal();
                                        };
                                    });
                                };
                            });
                        };
                    };
                };
            });
            observer_tab.observe(btn_photos_spectacle, { attributes: true });
            // Button to close the modal carousel
            document.querySelector('.btn_close').addEventListener('click', handleModal);
            // Setting the content to the last part of the main carousel
            const spectacle_video = document.querySelector('#spectacle_video iframe');
            const youtubeLink = spectacle.video_spectacle;

            // The regular expression to extract the video ID 
            const videoId = youtubeLink.match(
                /(?:\?v=|\/embed\/|\/\d\/|\/vi\/|youtu\.be\/|\/embed\/|\/v\/|\/e\/|youtu\.be\/|\/v=)([^#\&\?]*).*/
            )[1];

            // The final URL for the iframe
            const url = `https://www.youtube.com/embed/${videoId}`;
            spectacle_video.setAttribute('src', url);
        }
        // Showing the main carousel for the card clicked
        new_spectacle_card.addEventListener('click', showSpectacleModal);
        new_spectacle_card.addEventListener('keydown', (e) => {
            if (e.keyCode === 13 || e.keyCode === 32) {
                e.preventDefault();
                showSpectacleModal();
            };
        });
    });
};