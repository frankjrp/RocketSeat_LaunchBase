function addIngredient() {
    const ingredients = document.querySelector("#add .inputs");
    const fieldContainer = document.querySelectorAll("#add .ingredient");

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

function addPreparation() {
    const ingredients = document.querySelector("#prep .inputs");
    const fieldContainer = document.querySelectorAll("#prep .preparation");

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

document
    .querySelector("#add span")
    .addEventListener("click", addIngredient);

document
    .querySelector("#prep span")
    .addEventListener("click", addPreparation);