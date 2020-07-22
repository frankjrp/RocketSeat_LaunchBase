const cards = document.querySelectorAll(".card");

for (let card of cards) {
    const videoId = card.id; /* Ou assim: card.getAttribute("id"); */

    card.addEventListener("click", function () {
        window.location.href = `/video?id=${videoId}`
    })
}