//sliders spectacles

const slider_container = document.getElementById("slider_container");
const btn_description_spectacle = document.getElementById("btn_description_spectacle");
const btn_photos_spectacle = document.getElementById("btn_photos_spectacle");
const btn_videos_specetacle = document.getElementById("btn_videos_specetacle");

const spectacle_description = document.getElementById("spectacle_description");
const spectacle_video = document.getElementById("spectacle_video");
const spectacle_images = document.getElementById("spectacle_images");

const btns_slide_spectacles = document.querySelectorAll(".btns_slide_spectacles a");
btns_slide_spectacles.forEach((item,i) => {
    item.addEventListener("click", () => {
        btns_slide_spectacles.forEach(item => item.classList.remove("element_active"));
        btns_slide_spectacles[i].classList.add("element_active");
    });
});

btn_photos_spectacle.addEventListener("click", () => {
    slider_container.scrollLeft = slider_container.offsetWidth;
    spectacle_images.classList.remove("slide_hidden");
    spectacle_description.classList.add("slide_hidden");
    spectacle_video.classList.add("slide_hidden");
})
btn_description_spectacle.addEventListener("click", () => {
    slider_container.scrollLeft = -2 * slider_container.offsetWidth;
    spectacle_description.classList.remove("slide_hidden");
    spectacle_images.classList.add("slide_hidden");
    spectacle_video.classList.add("slide_hidden");
})
btn_videos_specetacle.addEventListener("click", () => {
    slider_container.scrollLeft = 2 * slider_container.offsetWidth;
    spectacle_video.classList.remove("slide_hidden");
    spectacle_description.classList.add("slide_hidden");
    spectacle_images.classList.add("slide_hidden");
})

const btn_spectacle = document.querySelectorAll(".new_spectacle")

btn_spectacle.forEach((card, i) => {
    card.addEventListener("click", () => {
        let container_spectacle_cards = document.getElementById("container_spectacle_cards");
        let new_spectacle = document.getElementById(`new_spectacle_${i}`);
        btn_description_spectacle.classList.toggle("element_active");
        new_spectacle.classList.toggle("hidden_element");
        container_spectacle_cards.classList.toggle("slide_hidden");
    });
});