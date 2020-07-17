<h1 align="center">
  <img src="launchbase.svg">
</h1>

<p align="center">Projetos desenvolvidos no bootcamp da <a href="https://www.rocketseat.com.br" target="_blank">Rocketseat</a></p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/frankjrp/RocketSeat_LaunchBase">
  
  <a href="https://github.com/frankjrp/RocketSeat-NLW/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/frankjrp/RocketSeat_LaunchBase">
  </a>
</p>

## 🔖 Sobre
Projetos desenvolvidos mediante os desafios propostos no bootcamp em cada módulo do curso, demonstrando assim o conteúdo aprendido.

## Módulo 1
<details>
  <summary>Cálculo de IMC</summary>
  
  - Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
  <br><br>
  <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-1_IMC.js" target="_blank">Resposta</a>
</details>

<details>
  <summary>Cálculo de aposentadoria</summary>
  
  - Crie um programa para calcular a aposentadoria de uma pessoa.
  - *Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta.*
  <br><br>
  <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-1_Aposentadoria.js" target="_blank">Resposta</a>
</details>

<details>
  <summary>Construção e impressão de objetos</summary>
  
  - Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado `empresa`.
  - Imprima em tela utilizando `console.log` o nome da empresa e seu endereço no seguinte formato:<br>
  `A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260`
  <br><br>
  <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-2_Objetos.js" target="_blank">Resposta</a>
</details>

<details>
  <summary>Vetores e objetos</summary>
  
  - Crie um programa com um objeto para armazenar dados de um programador como `nome`, `idade` e `tecnologias` que trabalha.
  - Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
  - As tecnologias também devem ser objetos contendo `nome` e `especialidade`.
  - Imprima em tela o nome e especialidade da **primeira** tecnologia que o usuário utiliza no seguinte formato:<br>
  `O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop`
  <br><br>
  <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-2_Vetores.js" target="_blank">Resposta</a>
</details>

<details>
  <summary>Usuários e tecnologias</summary>
  
  - Crie um programa que armazena um array de usuários (objetos), cada usuário tem um `nome` e suas `tecnologias.` (novo array)
  - Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários, exemplo:<br>
  `Carlos trabalha com HTML, CSS`
  <br><br>
  <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-3_Usu%C3%A1riosTecnologias.js" target="_blank">Resposta</a>
</details>

<details>
  <summary>Busca por tecnologia</summary>
  
  - Baseado no desafio anterior, utilize a mesma lista de usuários construída.
  - Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean `true/false`.
  - Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário.
  <br><br>
  <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-3_BuscaPorTecnologia.js" target="_blank">Resposta</a>
</details>

<details>
  <summary>Soma de despesas e receitas</summary>
  
  - Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (`receitas - despesas`).
  - Utilize o array de usuários abaixo:<br>
  ```js
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
```
- Percorra o array de usuários e para cada usuário chame uma função chamada `calculaSaldo` que recebe como parâmetro as receitas e despesas do usuário.
- Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função `calculaSaldo`.
- A função `calculaSaldo` deve utilizar a função `somaNumeros` para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja `receitas - despesas`.
- No fim exiba todos os usuários em tela, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO, exemplo:
```
Fulano possui saldo POSITIVO de 43.3
Sicrano possui saldo NEGATIVO de -90.3
```
  <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-3_DespesasReceitas.js" target="_blank">Resposta</a>
</details>

<details>
  <summary>Operações bancárias</summary>
  
  - Crie um programa para realizar operações bancárias na conta de um usuário.
  - Comece criando um objeto com o nome do usuário, suas transações e saldo.
  - As transações (transactions) devem iniciar como um array vazio `[]` e o saldo (balance) em `0` (zero).<br><br>
  **ADICIONAR TRANSAÇÕES**:
  - Crie uma função `createTransaction` para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:<br>
  ```
  {
  type: 'credit',
  value: 50.5
}
  ```
  - O `type` pode ser `credit` para créditos e `debit` para débitos da conta do usuário.
  - Quanto uma transação for do tipo `credit` ela deve também somar o valor do crédito no saldo (balance) do usuário.
  - Se for uma transação do tipo `debit` ela deve subtrair o valor do débito no saldo (balance) do usuário.<br><br>
  **RELATÓRIOS**:
  - Crie uma função chamada `getHigherTransactionByType` que recebe como parâmetro o tipo de transação `credit/debit`, percorre as transações do usuário e retorna o **objeto** da transação de maior valor com aquele tipo.
  - Crie uma função chamada `getAverageTransactionValue` que retorna o valor médio das transações de um usuário independente do seu tipo.
  - Crie uma função chamada `getTransactionsCount` que retorna o número de transações de cada tipo `credit/debit`, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:<br>
  `getTransactionsCount(); // { credit: 5, debit: 3 }`
  <br><br>
  <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-4_Opera%C3%A7%C3%B5esBanc%C3%A1rias.js" target="_blank">Resposta</a>
</details>
