const modalOverlay = document.querySelector(".modal_overlay");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
    const imageId = card.id;
    const foodName = card.querySelector(".card-content p#name").textContent;
    const foodBy = card.querySelector(".card-content p#by").textContent;

    card.addEventListener("click", () => {
        modalOverlay.classList.add("active");
        modalOverlay.querySelector(".card-modal .image-container img").src = (`./assets/${imageId}.png`);
        modalOverlay.querySelector(".card-modal .card-content p#name").textContent = foodName;
        modalOverlay.querySelector(".card-modal .card-content p#by").textContent = foodBy;

    })
}

document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active");
})