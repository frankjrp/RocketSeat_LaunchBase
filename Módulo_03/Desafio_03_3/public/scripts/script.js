const cards = document.querySelectorAll(".card");

for (let card of cards) {
    const courseId = card.id;

    card.addEventListener("click", () => {
        window.location.href = `/courses/${courseId}`

    })
}