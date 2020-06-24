const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const soma = idade + contribuicao;
let resultado = "";

if (sexo === 'M') {
    if (contribuicao >= 35 && soma >= 95) {
        resultado = `${nome}, você pode se aposentar!`
    }else {
        resultado = `${nome}, você ainda não pode se aposentar!`
    }

}else {
    if (contribuicao >= 30 && soma >= 85) {
        resultado = `${nome}, você pode se aposentar!`
    }else {
        resultado = `${nome}, você ainda não pode se aposentar!`
    }
}

console.log(resultado);


//OBS.: poderia ser feito também dessa forma, colocando as variáveis separadas para depois usá-las no IF:
// essas variáveis irão retornar true ou false
//const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
//const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85