<h1 align="center">
  <img src="/Images/launchbase.svg">
</h1>

<p align="center">Projetos desenvolvidos no bootcamp da <a href="https://www.rocketseat.com.br">Rocketseat</a></p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/frankjrp/RocketSeat_LaunchBase">
  
  <a href="https://github.com/frankjrp/RocketSeat-NLW/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/frankjrp/RocketSeat_LaunchBase">
  </a>
</p>

## 🔖 Sobre
Projetos desenvolvidos mediante os desafios propostos no bootcamp em cada módulo do curso, demonstrando assim o conteúdo aprendido.

## :rocket: Módulo 1
<details>
  <summary>Cálculo de IMC</summary>
  
  #### SOBRE
  - Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-1_IMC.js">Resposta</a>
</details>

<details>
  <summary>Cálculo de aposentadoria</summary>
  
  #### SOBRE
  - Crie um programa para calcular a aposentadoria de uma pessoa.
  - *Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta.*
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-1_Aposentadoria.js">Resposta</a>
</details>

<details>
  <summary>Construção e impressão de objetos</summary>
  
  #### SOBRE
  - Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado `empresa`.
  - Imprima em tela utilizando `console.log` o nome da empresa e seu endereço no seguinte formato:<br>
  `A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260`
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-2_Objetos.js">Resposta</a>
</details>

<details>
  <summary>Vetores e objetos</summary>
  
  #### SOBRE
  - Crie um programa com um objeto para armazenar dados de um programador como `nome`, `idade` e `tecnologias` que trabalha.
  - Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
  - As tecnologias também devem ser objetos contendo `nome` e `especialidade`.
  - Imprima em tela o nome e especialidade da **primeira** tecnologia que o usuário utiliza no seguinte formato:<br>
  `O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop`
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-2_Vetores.js">Resposta</a>
</details>

<details>
  <summary>Usuários e tecnologias</summary>
  
  #### SOBRE
  - Crie um programa que armazena um array de usuários (objetos), cada usuário tem um `nome` e suas `tecnologias.` (novo array)
  - Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários, exemplo:<br>
  `Carlos trabalha com HTML, CSS`
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-3_Usu%C3%A1riosTecnologias.js">Resposta</a>
</details>

<details>
  <summary>Busca por tecnologia</summary>
  
  #### SOBRE
  - Baseado no desafio anterior, utilize a mesma lista de usuários construída.
  - Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean `true/false`.
  - Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário.
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-3_BuscaPorTecnologia.js">Resposta</a>
</details>

<details>
  <summary>Soma de despesas e receitas</summary>
  
  #### SOBRE
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
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-3_DespesasReceitas.js">Resposta</a>
</details>

<details>
  <summary>Operações bancárias</summary>
  
  #### SOBRE
  - Crie um programa para realizar operações bancárias na conta de um usuário.
  - Comece criando um objeto com o nome do usuário, suas transações e saldo.
  - As transações (transactions) devem iniciar como um array vazio `[]` e o saldo (balance) em `0` (zero).
  #### ADICIONAR TRANSAÇÕES
  - Crie uma função `createTransaction` para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:<br>
  ```
  {
  type: 'credit',
  value: 50.5
}
  ```
  - O `type` pode ser `credit` para créditos e `debit` para débitos da conta do usuário.
  - Quanto uma transação for do tipo `credit` ela deve também somar o valor do crédito no saldo (balance) do usuário.
  - Se for uma transação do tipo `debit` ela deve subtrair o valor do débito no saldo (balance) do usuário.
  #### RELATÓRIOS
  - Crie uma função chamada `getHigherTransactionByType` que recebe como parâmetro o tipo de transação `credit/debit`, percorre as transações do usuário e retorna o **objeto** da transação de maior valor com aquele tipo.
  - Crie uma função chamada `getAverageTransactionValue` que retorna o valor médio das transações de um usuário independente do seu tipo.
  - Crie uma função chamada `getTransactionsCount` que retorna o número de transações de cada tipo `credit/debit`, o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:<br>
  `getTransactionsCount(); // { credit: 5, debit: 3 }`
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-4_Opera%C3%A7%C3%B5esBanc%C3%A1rias.js">Resposta</a>
</details>

## :rocket: Módulo 2
<details>
  <summary>Primeiro HTML</summary>
  
  #### SOBRE
  - Criar um arquivo html que contenha um `favicon` e um header com 3 links: Comunidade, Email e Telefone.
  #### ESTILIZAÇÃO
  Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:
- Deve ser aplicado um background
- Deve ser utilizada a fonte Roboto
- O header precisa ocupar todo o espaço lateral e superior (body sem margin)
- O header precisa ter um espaçamento interno de 30px em todas as direções
- Os links devem ter um espaçamento de 30px entre si

<h1 align="center">
  <img src="/Images/desafio_2-1.PNG">
</h1>

 #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_02/Desafio_02_1">Resposta</a>
</details>

<details>
  <summary>Página de descrição</summary>
  
  #### SOBRE
  - A partir do arquivo do desafio 2-1 (Primeiro HTML), adicionar um novo link no header chamado `Sobre`. Essa página deverá mostrar informações referentes a Rocketseat.
  #### INFORMAÇÕES DA PÁGINA
- Uma imagem da logo da empresa
- O nome da empresa
- Uma breve descrição da empresa
- Uma lista com as principais tecnologias utilizadas
- Links para as redes sociais da empresa (Github, Instagram e Facebook)
#### ESTILIZAÇÃO
  Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:
- A imagem deve ter uma borda e um formato circular
- Deve ser utilizada a fonte Roboto
- O nome da empresa e a imagem devem ser destacar do restante
- Os links das redes sociais devem ter alguma alteração visual quando o cursor do mouse passar por cima

<h1 align="center">
  <img src="/Images/desafio_2-2_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_2-2_2.PNG">
</h1>

#### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_02/Desafio_02_2">Resposta</a>
</details>

<details>
  <summary>Página de cursos e iframe</summary>
  
  #### SOBRE
  - A partir do arquivo do desafio 2-2 (Página de descrição), adicionar no header um link chamado `Conteúdos`. Essa página deve conter um grid onde devem ser mostrados os 3 principais cursos da Rocketseat: Starter, Launchbase e GoStack. Ao clicar em um dos cursos, deve ser aberta uma modal onde um iframe irá carregar as informações do curso selecionado.
  #### INFORMAÇÕES DA PÁGINA
- Título da página
- Grid com 3 colunas e 1 linha onde serão apresentados os cards dos cursos
#### INFORMAÇÕES DO CARD
- Logo do curso
- Título do curso
- Quantidade de módulos dos cursos
- Informação se o curso é gratuito ou pago
#### MODAL
- O modal deve conter um iframe que busca a página do curso (dica: basta adicionar `starter`, `launchbase` ou `gostack` ao final de `https://rocketseat.com.br/`). Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal (dica: utilize a mesma lógica implementada para fechar o `modalOverlay`, mas trabalhe com a classe `modal` e utilize o método `contains` do `classList` para verificar se o elemento está ou não com a classe `maximize`).
#### ESTILIZAÇÃO
  Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:
- Deve ser utilizado o grid para organizar os cursos
- O modal nunca deve abrir maximizado

<h1 align="center">
  <img src="/Images/desafio_2-3_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_2-3_2.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_2-3_3.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_2-3_4.PNG">
</h1>

#### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_02/Desafio_02_3">Resposta</a>
#### [Demonstração](https://www.loom.com/share/89006d5e3eb6438686992311a18a43f2)
</details>

## :rocket: Foodfy | Front-end
<details>
  <summary>Construindo Foodfy</summary>
  
  #### SOBRE
  - Nesse desafio você vai construir um site completo para uma empresa de receitas chamada Foodfy.
  #### REGRA
  - Na página de receitas, quando o usuário clica em uma receita, um `modal` deve aparecer em tela contendo as mesmas informações da receita que ele clicou.
  
<h1 align="center">
  <img src="/Images/foodfy.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_modal.PNG">
</h1>
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/Foodfy">Resposta</a>
  #### [Demonstração](https://www.loom.com/share/4a537134137a4272859348b7416d22cc)
</details>

## :rocket: Módulo 3
<details>
  <summary>Primeiro servidor</summary>
  
  #### SOBRE
  - Nesse desafio você deve criar um servidor que tenha duas rotas que devem retornar o conteúdo dos html gerados no desafio 2-3 (Páginas de Cursos e Iframe). Além disso, deve ser implementando um arquivo padrão (layout.njk) que reaproveite o código em comum entre esses dois e também um arquivo que sirva uma página de erro 404.<br>
*Erro 404 é comum aparecer em páginas da internet, quando não foi encontrado nenhum conteúdo.*
  #### ARQUIVOS HTML
  - `courses.njk`: Arquivo referente à pagina de conteúdos, deve ser servido na rota raiz.
  - `about.njk`: Arquivo referente à pagina de descrição, deve ser servido na rota /about.
  - `layout.njk`: Arquivo referente à base comum entre as páginas.
  - `not-found.njk`: Arquivo referente à pagina de erro 404, deve ser servido quando for realizada uma requisição à uma página que não existe. Esse arquivo deve ter:
  
      - Layout.njk como base
      - Ter um texto informativo sobre o erro
  #### ESTILIZAÇÃO
  - Você tem liberdade para escolher a estilização que preferir para esse desafio.
  
<h1 align="center">
  <img src="/Images/desafio_3-1_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_3-1_2.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_3-1_3.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_3-1_4.PNG">
</h1>
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_03/Desafio_03_1">Resposta</a>
  #### [Demonstração](https://www.loom.com/share/243ae1d8b09649ba8fb6609037fb9e63)
</details>

<details>
  <summary>Arquivos nunjucks e dados dinâmicos</summary>
  
  #### SOBRE
  - Nesse desafio você deve atualizar os arquivos com informações de cursos e descrição de forma dinâmica.
  #### ESTILIZAÇÃO
  - Você tem liberdade para escolher a estilização que preferir para esse desafio.
  #### NOTA
  - *São exatamente os mesmos layouts do desafio anterior (Primeiro servidor), porém, agora os dados são passados do back-end para o front-end de forma dinâmica.*
  
<h1 align="center">
  <img src="/Images/desafio_3-1_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_3-1_2.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_3-1_3.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_3-1_4.PNG">
</h1>
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_03/Desafio_03_2">Resposta</a>
  #### [Demonstração](https://www.loom.com/share/243ae1d8b09649ba8fb6609037fb9e63)
</details>

<details>
  <summary>Página de descrição do curso</summary>
  
  #### SOBRE
  - Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.
  #### ROTA
  - A rota também será a `/courses`, porém o id do curso será passado via route params (ex.: `/courses/id_do_curso`).
  #### INFORMAÇÕES
  - Layout padrão
  - Card do curso
  - Link que redireciona para a página do curso
  #### ESTILIZAÇÃO
  - Você tem liberdade para escolher a estilização que preferir para esse desafio.
  
<h1 align="center">
  <img src="/Images/desafio_3-1_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_3-3.PNG">
</h1>
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_03/Desafio_03_3">Resposta</a>
  #### [Demonstração](https://www.loom.com/share/b96a8397b7bc4423a39ee0258c7b7a7d)
</details>

## :rocket: Foodfy | Back-end
<details>
  <summary>Refatorando Foodfy</summary>
  
  #### SOBRE
  - Nesse desafio você irá refatorar, ou seja, reescrever algumas partes, do seu código do desafio anterior, o Foodfy.
  - Até esse módulo não conhecíamos sobre back-end, ou seja, todos dados da nossa página ficavam no próprio front-end (arquivos HTML).
  - Agora que conhecemos sobre Node.js vamos tornar a exibição dos dados mais dinâmica.
  #### ARQUIVO DE DADOS
  - Crie um arquivo `data.js` na raiz do seu projeto com o conteúdo de [link](https://github.com/Rocketseat/bootcamp-launchbase-desafios-03/blob/master/assets/data.js).
  #### ALTERAÇÕES NO PROJETO
  - Use os dados das receitas contidos no arquivo `data.js` para a página de listagem de receitas e para a home.
  - Na home, liste as 6 primeiras receitas.
  - Na listagem, liste todas receitas do arquivo.
  - *Obs.: Você precisará converter seu projeto em um projeto Node.js usando Nunjucks para mostrar cada página.*
  #### DETALHE DA RECEITA
  - Ao clicar em uma receita, agora o usuário deve ser redirecionado para uma nova página contendo todas as informações da receita como ingredientes, modo de preparo e informações adicionais (todas essas informações estão contidas no arquivo `data.js`).
  - Na página de listagem não é mais necessário abrir o modal como tínhamos no desafio anterior do Foodfy.
  - *Obs.: A página do detalhe da receita precisa buscar no arquivo `data.js` apenas a receita desejada pelo usuário, por isso você usará de parâmetros na rota dessa página, por exemplo: `http://localhost:3000/recipes/3`, nesse caso estaríamos acessando os detalhes da receita com índice 3 no array de receitas (`recipes[3]`).*
  #### AÇÃO DE MOSTRAR/ESCONDER
  - Dentro da página do detalhe da receita, em cada seção "Ingredientes", "Modo de preparo" e "Informações adicionais" há um botão `Mostrar` ou `Esconder` que ao ser clicado deve mostrar ou esconder o texto abaixo do título baseado em seu estado de visibilidade.
  
<h1 align="center">
  <img src="/Images/foodfy_refatorado_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_refatorado_2.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_refatorado_3.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_refatorado_4.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_refatorado_5.PNG">
</h1>
  
  #### <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/Foodfy_Refatorado">Resposta</a>
  #### [Demonstração](https://www.loom.com/share/fe0117ba413042bd8a8d2df78d70019c)
</details>
