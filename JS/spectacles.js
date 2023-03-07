//sliders spectacles

const slider_container = document.getElementById("slider_container")
const btn_description_spectacle = document.getElementById("btn_description_spectacle")
const btn_photos_spectacle = document.getElementById("btn_photos_spectacle")
const btn_videos_specetacle = document.getElementById("btn_videos_specetacle")

btn_photos_spectacle.addEventListener("click", () => {
    slider_container.scrollLeft = slider_container.offsetWidth;
})
btn_description_spectacle.addEventListener("click", () => {
    slider_container.scrollLeft = -2 * slider_container.offsetWidth;
})
btn_videos_specetacle.addEventListener("click", () => {
    slider_container.scrollLeft = 2 * slider_container.offsetWidth;
})

const btn_spectacle = document.querySelectorAll(".new_spectacle")

btn_spectacle.forEach((card, i) => {
    card.addEventListener("click", () => {
        let container_spectacle_cards = document.getElementById("container_spectacle_cards");
        let new_spectacle = document.getElementById(`new_spectacle_${i}`);
        new_spectacle.classList.toggle("hidden_element");
        container_spectacle_cards.classList.toggle("hidden_element");
    });
});