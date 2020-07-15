const recipes = document.querySelectorAll(".card");

const btnIngredients = document.getElementById("btnIngredients");
const btnPreparation = document.getElementById("btnPreparation");
const btnInformation = document.getElementById("btnInformation");

const ingredients = document.querySelector(".ingredients .content");
const preparation = document.querySelector(".preparation .content");
const information = document.querySelector(".information .content");

for (let i = 0; i < recipes.length; i++) {
    const recipeId = i;

    recipes[i].addEventListener("click", () => {
        window.location.href = `/recipes/${recipeId}`
    })
}

btnIngredients.addEventListener("click", () => {
    if (btnIngredients.innerText == "ESCONDER") {
        ingredients.classList.add("hidden");
        btnIngredients.innerText = "mostrar";
    } else {
        ingredients.classList.remove("hidden");
        btnIngredients.innerText = "esconder";
    }
})

btnPreparation.addEventListener("click", () => {
    if (btnPreparation.innerText == "ESCONDER") {
        preparation.classList.add("hidden");
        btnPreparation.innerText = "mostrar";
    } else {
        preparation.classList.remove("hidden");
        btnPreparation.innerText = "esconder";
    }
})

btnInformation.addEventListener("click", () => {
    if (btnInformation.innerText == "ESCONDER") {
        information.classList.add("hidden");
        btnInformation.innerText = "mostrar";
    } else {
        information.classList.remove("hidden");
        btnInformation.innerText = "esconder";
    }
})