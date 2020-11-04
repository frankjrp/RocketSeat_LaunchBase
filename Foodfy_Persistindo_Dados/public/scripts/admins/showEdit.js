const currentRecipe = location.pathname
const btn = document.querySelector(".card-title button")

btn.addEventListener('click', () => {
    window.location.href = `${currentRecipe}/edit`
})