const currentPage = location.pathname
const inputs = document.querySelectorAll(".add")

if (currentPage.includes("create")) {
    document.getElementById("btn_delete").classList.add("hidden")
    document.querySelector(".title h3").textContent = "Criando receita"
}

for (let input of inputs) {
    const btn = input.querySelector("span")

    btn.addEventListener("click", () => {
        const fieldContainer = input.querySelectorAll(".addInput")

        // Realiza um clone do último ingrediente adicionado
        const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

        // Não adiciona um novo input se o último tem um valor vazio
        if (newField.children[0].value == "") return false

        // Deixa o valor do input vazio
        newField.children[0].value = ""
        input.querySelector(".inputs").appendChild(newField)

        // Coloca o foco no input recém criado
        const lastInput = input.querySelectorAll(".addInput")
        lastInput[lastInput.length - 1].querySelector("input").focus()
    })

}