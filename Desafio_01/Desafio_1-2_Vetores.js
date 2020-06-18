const tecnologias = [
    {
        nome: "C++",
        especialidade: "Desktop"
    },
    {
        nome: "Python", 
        especialidade: "Data Science"
    },
    {
        nome: "JavaScript", 
        especialidade: "Web/Mobile"
    }
]

const programador = {
    nome: "Fulano",
    idade: 25,
    tecnologias: [
        tecnologias[1],
        tecnologias[2]
    ]
}

//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)