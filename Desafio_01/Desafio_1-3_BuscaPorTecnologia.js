/* Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não.
Essa função deve retornar um boolean true/false. */

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

/* O método some() testa se ao menos um dos elementos no array passa no teste implementado
pela função atribuída e retorna um valor true ou false. */

function checaSeUsuarioUsaCSS(usuario) {

    return usuario.tecnologias.some(item => item === "CSS"); //Utilizando o método SOME
}

//console.log(checaSeUsuarioUsaCSS(usuarios[2]))


//### Outra maneira de fazer a função, percorrendo todos os itens do array de tecnologias ###

/* function checaSeUsuarioUsaCSS(usuario) {
    let possuiTec = false;

    for (tec of usuario.tecnologias) {
        if (tec === "CSS") {
            possuiTec = true;
        }
    }

    return possuiTec;
} */

//console.log(checaSeUsuarioUsaCSS(usuarios[2]))


/* Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a 
função construída acima, se SIM, imprima em tela as informações do usuário: */

for (user of usuarios) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(user);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${user.nome} trabalha com CSS`);
    }
}


//Outra forma de fazer o for seria assim:

/* for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
    }
  } */
