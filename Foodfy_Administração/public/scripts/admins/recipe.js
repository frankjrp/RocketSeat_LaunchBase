const recipes = document.querySelectorAll(".card")

for (let i = 0; i < recipes.length; i++) {
    const recipeId = i

    recipes[i].querySelector("p#show").addEventListener("click", () => {
        window.location.href = `/admin/recipes/${recipeId}`
    })
}