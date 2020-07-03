const modalOverlay = document.querySelector(".modal_overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
    const imageId = card.id;
    const foodName = card.querySelector("p#name").textContent;
    const foodBy = card.querySelector("p#by").textContent;

    card.addEventListener("click", () => {
        modalOverlay.classList.add("active");

        modalOverlay.querySelector("img").src = (`./assets/${imageId}.png`);
        modalOverlay.querySelector("p#name").textContent = foodName;
        modalOverlay.querySelector("p#by").textContent = foodBy;        

    })
}

document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active");
})