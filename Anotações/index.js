// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.

/* Operações de comparação:
== igual a
=== igual a e do mesmo tipo
!= diferente de
!== diferente, inclusive do tipo */

console.log(4 == "4") //true
console.log(4 === "4") //false
console.log(4 != "5") //true
console.log(4 !== "4") //true

const aluno01 = "João"
const notaAluno01 = 9.8

const aluno02 = "Maria"
const notaAluno02 = 10

const notaAluno03 = 2
const aluno03 = "José"
//const aluno04 = `Victoria e ${aluno01}` //Esta é uma template string (entre crases) que permite a inclusão de variáveis

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parabenizar a turma

if (media > 5) {
    console.log(`A média foi de ${media.toFixed(2)}. Parabéns!`) //Com 2 casas decimais

} else {
    console.log('A média foi menor que 5')
}

//console.log(typeof media) //exibe o tipo da variável

//Exemplos de MAP, REDUCE E FILTER

/* ### MAP ###
É usado para CRIAR um novo array, percorrendo todos os itens de um Array já existente,
aplicando alguma função para cada um dos elementos */

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log("Resultado de MAP: " + doubled); // [2, 4, 6, 8]


/* ### REDUCE ###
É usado para REDUZIR os valores de um array em apenas um valor, percorre por todos os
elementos e os transforma em apenas um valor final */

const nums = [1, 2, 3, 4];
const sum = nums.reduce((result, item) => { //Outra forma de declarar: const sum = nums.reduce(function (result, item)
    return result + item;
}, 0);
console.log("Resultado de REDUCE: " + sum); // 10

/* Nesse próximo exemplo do Reduce, ele é usando para transformar um array de Strings
num único objeto que exibe quantas vezes cada elemento (cada string) aparece no array.
NOTA: nesse exemplo é passado no parâmetro inicialValue um objeto vazio {},
que será usando como valor inicial para o acumulador (primeiro argumento) */

const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const petCounts = pets.reduce((obj, pet) => {
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log("Resultado de REDUCE (array de Strings):");
console.log(petCounts);


/* ### FILTER ###
É usado para FILTRAR os valores de um array, aplicando uma condição para cada elemento,
se a condição retornar TRUE, o elemento é inserido no novo array de resultado; se retornar
false, ele não é inserido. */

const numbers2 = [1, 2, 3, 4];
const evens = numbers2.filter(item => item % 2 === 0);
console.log("Resultado de FILTER: " + evens); // [2, 4]

/* Outro exemplo de FILTER, trazendo todos os alunos com nota igual ou acima de 90 */

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

const studentGrades = students.filter(student => student.grade >= 90);
console.log("Resultado de FILTER com as notas:");
console.log(studentGrades);


/* ### SOME ###
É usado para FILTRAR os valores de um array, verificando se ALGUM dos elementos
satisfaz a condição informada, retornando então TRUE ou FALSE */

const numbers3 = [1, 2, 3, -1, 4]
const hasNegativeNumbers = numbers3.some((item) => {
    return item < 0;
});
console.log("Resultado de SOME: " + hasNegativeNumbers);


/* ### EVERY ###
É usado para FILTRAR os valores de um array, verificando se TODOS os elementos
satisfazem a condição informada, retornando então TRUE ou FALSE */

const numbers4 = [1, 2, 3, -1, 4]
const allPositiveNumbers = numbers4.every((item) => {
    return item > 0;
});
console.log("Resultado de EVERY: " + allPositiveNumbers);


/* ### FIND ###
É usado para FILTRAR os valores de um array, verificando se algum dos elementos
é igual a condição passada na verificação, retornando então o objeto se TRUE e
retornando UNDEFINED se FALSE */

const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];
const foundElement = objects.find((item) => {
    return item.id === 'a'; //item.id === 'aa' || item.id === 'a';
});

console.log("Retorno de FIND:");
console.log(foundElement);


/* ### FIND INDEX ###
É usado para FILTRAR os valores de um array, verificando se algum dos elementos
é igual a condição passada na verificação, retornando então a POSIÇÃO INDEX se TRUE e
retornando -1 se FALSE */

const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];
const foundIndex = objects2.findIndex((item) => {
    return item.id === 'a'; //item.id === 'aa' || item.id === 'a';
});

console.log("Retorno de FINDINDEX: " + foundIndex);


//Objetos: são declarados entre as chaves

const aluno001 = {
    nome: "Mayk",
    nota: 9.8
}

const aluno002 = {
    nome: "Diego",
    nota: 10
}

const aluno003 = {
    nome: "Fulano",
    nota: 2
}

const mediaAlunos = (aluno001.nota + aluno002.nota + aluno003.nota) / 3
console.log("Média no exemplo com objetos: " + mediaAlunos.toFixed(2))


//Array de objetos

const arraydeAlunos = [
    {
        nome: "Mayk",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 5
    }
]

let somaNotas = 0;

for (notaAluno of arraydeAlunos) {
    somaNotas += notaAluno.nota
}

console.log("Resultado da média em Array de objetos: " + (somaNotas / arraydeAlunos.length).toFixed(2));

//Outra forma de fazer, porém, é mais verbosa e não é dinâmica
//const mediaArray = (arraydeAlunos[0].nota + arraydeAlunos[1].nota + arraydeAlunos[2].nota) / 3
//console.log("Resultado da média em Array de objetos: " + mediaArray.toFixed(2))