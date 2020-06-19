/* Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e 
suas tecnologias (novo array) */

const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
]

/* Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários: */
//Exemplo: Carlos trabalha com HTML, CSS

for (usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)
}