/* Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas). */

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function calculaSaldo(receitas, despesas) {
    const somaReceitas = receitas.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    const somaDespesas = despesas.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    return (somaReceitas - somaDespesas).toFixed(2);
}

/* Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe 
como parâmetro as receitas e despesas do usuário: */

for (user of usuarios) {
    const saldo = calculaSaldo(user.receitas, user.despesas);

    if (saldo > 0) {
        console.log(`${user.nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${user.nome} possui saldo NEGATIVO de ${saldo}`)
    }
}