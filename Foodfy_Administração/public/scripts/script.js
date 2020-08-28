const recipes = document.querySelectorAll(".card")
const topics = document.querySelectorAll(".topic")

for (let i = 0; i < recipes.length; i++) {
    const recipeId = i

    recipes[i].addEventListener("click", () => {
        window.location.href = `/recipes/${recipeId}`
    })
}

for (let topic of topics) {
    const btn = topic.querySelector("span")

    btn.addEventListener("click", () => {
        if (btn.innerText == "ESCONDER") {
            topic.querySelector(".content").classList.add("hidden")
            btn.innerText = "mostrar"
        } else {
            topic.querySelector(".content").classList.remove("hidden")
            btn.innerText = "esconder"
        }
    })
}