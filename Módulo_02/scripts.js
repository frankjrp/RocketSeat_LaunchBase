const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
    const videoId = card.id; /* Ou assim: card.getAttribute("id"); */

    card.addEventListener("click", function () {
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src = (`https://www.youtube.com/embed/${videoId}`);
    })
}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
})