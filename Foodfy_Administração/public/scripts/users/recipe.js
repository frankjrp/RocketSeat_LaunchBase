const recipes = document.querySelectorAll(".card")

for (let i = 0; i < recipes.length; i++) {
    const recipeId = i

    recipes[i].addEventListener("click", () => {
        window.location.href = `/recipes/${recipeId}`
    })
}