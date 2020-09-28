<h1 align="center">
  <img src="/Images/launchbase.svg">
</h1>

<p align="center">Projetos desenvolvidos no bootcamp da <a href="https://www.rocketseat.com.br">Rocketseat</a></p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/frankjrp/RocketSeat_LaunchBase">
  
  <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/commits/master">
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
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-1_IMC.js">Código</a>
</details>

<details>
  <summary>Cálculo de aposentadoria</summary>
  
  #### SOBRE
  - Crie um programa para calcular a aposentadoria de uma pessoa.
  - *Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta.*
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-1_Aposentadoria.js">Código</a>
</details>

<details>
  <summary>Construção e impressão de objetos</summary>
  
  #### SOBRE
  - Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado `empresa`.
  - Imprima em tela utilizando `console.log` o nome da empresa e seu endereço no seguinte formato:<br>
  `A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260`.
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-2_Objetos.js">Código</a>
</details>

<details>
  <summary>Vetores e objetos</summary>
  
  #### SOBRE
  - Crie um programa com um objeto para armazenar dados de um programador como `nome`, `idade` e `tecnologias` que trabalha.
  - Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
  - As tecnologias também devem ser objetos contendo `nome` e `especialidade`.
  - Imprima em tela o nome e especialidade da **primeira** tecnologia que o usuário utiliza no seguinte formato:<br>
  `O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop`.
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-2_Vetores.js">Código</a>
</details>

<details>
  <summary>Usuários e tecnologias</summary>
  
  #### SOBRE
  - Crie um programa que armazena um array de usuários (objetos), cada usuário tem um `nome` e suas `tecnologias.` (novo array).
  - Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários, exemplo:<br>
  `Carlos trabalha com HTML, CSS`.
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-3_Usu%C3%A1riosTecnologias.js">Código</a>
</details>

<details>
  <summary>Busca por tecnologia</summary>
  
  #### SOBRE
  - Baseado no desafio anterior, utilize a mesma lista de usuários construída.
  - Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean `true/false`.
  - Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário.
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-3_BuscaPorTecnologia.js">Código</a>
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
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-3_DespesasReceitas.js">Código</a>
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
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/blob/master/M%C3%B3dulo_01/Desafio_01/Desafio_1-4_Opera%C3%A7%C3%B5esBanc%C3%A1rias.js">Código</a>
</details>

## :rocket: Módulo 2
<details>
  <summary>Primeiro HTML</summary>
  
  #### SOBRE
  - Criar um arquivo html que contenha um `favicon` e um header com 3 links: Comunidade, Email e Telefone.
  #### ESTILIZAÇÃO
  Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:
- Deve ser aplicado um background;
- Deve ser utilizada a fonte Roboto;
- O header precisa ocupar todo o espaço lateral e superior (body sem margin);
- O header precisa ter um espaçamento interno de 30px em todas as direções;
- Os links devem ter um espaçamento de 30px entre si.

<h1 align="center">
  <img src="/Images/desafio_2-1.PNG">
</h1>

 #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_02/Desafio_02_1">Código</a>
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
- A imagem deve ter uma borda e um formato circular;
- Deve ser utilizada a fonte Roboto;
- O nome da empresa e a imagem devem ser destacar do restante;
- Os links das redes sociais devem ter alguma alteração visual quando o cursor do mouse passar por cima.

<h1 align="center">
  <img src="/Images/desafio_2-2_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_2-2_2.PNG">
</h1>

#### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_02/Desafio_02_2">Código</a>
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
- Deve ser utilizado o grid para organizar os cursos;
- O modal nunca deve abrir maximizado.
#### NOTA
- *Além do que foi solicitado, inseri também a estilização de responsividade.*

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

<h1 align="center">
  <img src="/Images/responsive_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/responsive_2.PNG">
</h1>

<h1 align="center">
  <img src="/Images/responsive_4.PNG">
</h1>

<h1 align="center">
  <img src="/Images/responsive_5.PNG">
</h1>

<h1 align="center">
  <img src="/Images/responsive_3.PNG">
</h1>

<h1 align="center">
  <img src="/Images/responsive_6.PNG">
</h1>

#### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_02/Desafio_02_3">Código</a>
#### :clapper: [Demonstração](https://www.youtube.com/watch?v=F_Et3lP1XQY)
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
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/Foodfy">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=JQpiUQX5tdQ)
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
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_03/Desafio_03_1">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=d5SEplacctU)
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
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_03/Desafio_03_2">Código</a>
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

<h1 align="center">
  <img src="/Images/desafio_3-3_2.PNG">
</h1>
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_03/Desafio_03_3">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=-D_UMwXDKLU)
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
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/Foodfy_Refatorado">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=mwzbzur2Snw)
</details>

## :rocket: Módulo 4
<details>
  <summary>Header</summary>
  
  #### SOBRE
  - Esse é o primeiro desafio da sequência de criação de um site de aulas particulares. A ideia é que você aplique, em pequenas doses, os conhecimentos aprendidos nas aulas. Nessa primeira etapa, você deve criar um header com dois links: `Teachers` e `Students`.
  #### ESTILIZAÇÃO
  Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:
- Deve ser aplicado um background;
- Deve ser utilizada a fonte Roboto;
- Utilize o conceito de `box-sizing` e o seletor `+` para centralizar os seus links;
- Utilize o `after` e o `transition` para aplicar um efeito visual nos links quando o mouse passar por cima.

<h1 align="center">
  <img src="/Images/desafio_4-1_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-1_2.PNG">
</h1>
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_04/Desafio_04_1">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=hmFB_k5huhA)
</details>

<details>
  <summary>Card do professor</summary>
  
  #### SOBRE
  - Nessa etapa você deve utilizar o browser-sync e criar um card para apresentação das informações do professor.
  #### CARD
  Esse componente deve ser dividido em duas seções: `imagem` e `detalhes`. As seguintes informações são obrigatórias:
  - Imagem randômica de uma coleção de professores (utilize a api do unsplash)
  - Nome completo
  - Idade
  - Grau de escolaridade (ex.: Doutorado)
  - Tipo de aula (presencial ou à distância)
  - Acompanhamento (ex.: Matemática e Física)
  - Desde (data de cadastro na plataforma)
  #### ESTILIZAÇÃO
  Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:
  - A imagem deve ocupar 40% do card e os detalhes 60%;
  - Utilize o seletor `first-child` e `border-top` para estilizar as divisórias entre os items;
  - Utilize o seletor `nth-child()` para estilizar o label (ex.: Desde) e valor (ex.: 02/02/2020) do item;
  - Utilize o `keyframes` e o `animation` para fazer uma animação do card;
  - Utilize o `box-shadow` para aplicar uma sombra no card.

<h1 align="center">
  <img src="/Images/desafio_4-2.PNG">
</h1>
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_04/Desafio_04_2">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=rlzawtJTyM8)
</details>

<details>
  <summary>Formulário e rota de cadastro do professor</summary>
  
  #### SOBRE
  - Nessa etapa você deve criar um formulário de cadastro do professor e uma rota do tipo `post` que irá realizar as validações e salvar os dados enviados.
  #### FORMULÁRIO
  Os seguintes campos são necessários:
  - Avatar url: campo do tipo `url` para cadastrar o caminho da imagem do professor
  - Nome completo: campo do tipo `text`
  - Data de nascimento: campo do tipo `date`
  - Grau de escolaridade: campo do tipo `select` que deve conter as opções **Ensino Médio Completo**, **Ensino Superior Completo**, **Mestrado** e **Doutorado**
  - Tipo de aula: campo do tipo `radio` que deve conter as opções **Presencial** e **À distância**
  - Área de atuação: campo do tipo `text` que deve conter as informações das matérias que o professor pode lecionar
  #### ROTA
  - Crie um arquivo `teachers.js` na raiz do seu projeto e faça a validação de todos os campos utilizando `keys` e o constructor `Object`. Além disso, utilize o método             `writeFile` da lib `fs` para gerar um arquivo `json` que irá conter um array de todos os professores cadastrados. Ao final desses dois processos (validação e salvamento), faça   o redirecionamento para a página de listagem de professores.
  #### ESTILIZAÇÃO
  - Você tem liberdade para escolher a estilização que preferir para esse desafio.
  #### NOTA
  - *Além do que foi solicitado, adicionei, na validação dos dados, uma condicional `switch` para personalizar a mensagem com o nome do campo deixado em branco.*

<h1 align="center">
  <img src="/Images/desafio_4-3.PNG">
</h1>
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_04/Desafio_04_3">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=zkO5KlfsG50)
</details>

<details>
  <summary>Apresentação, edição e formatação dos dados de um professor</summary>
  
  #### SOBRE
  - Nessa etapa você deve criar duas rotas: uma para apresentar os dados do professor (show) e outra para a edição dos dados cadastrados (edit). Além disso, realize a         formatação dos dados cadastrados para a correta exibição no HTML.
  #### SHOW
  Crie uma rota para lidar com a apresentação dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `show` para buscar e retornar o professor a partir do `id` fornecido na rota. Os seguintes dados precisam ser formatados:
  - Idade: Crie um arquivo `utils.js` que exporta uma função chamada `age`. Essa função deve retornar a idade a partir do parâmetro (data de nascimento) informado
  - Grau de escolaridade: crie uma função `graduation` no arquivo `utils.js`. Essa função deve retornar o grau de escolaridade formatado a partir do valor do `select` informado (ex.: **Ensino Médio Completo** para o valor **medio** do `select`)
  - Acompanhamento: Utilize o método `split` da string para gerar um array com as matérias que o professor leciona
  - Desde: Utilize o constructor `Intl` e seus métodos para gerar uma data no formato `dia/mes/ano`
  #### EDIÇÃO
  - Crie uma rota para lidar com a edição dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `edit` para buscar e retornar o professor a partir do `id` fornecido na rota. Utilize a mesma interface da rota de apresentação dos dados do professor (lembrando de fazer o reaproveitamento do form com um arquivo `fields.njk`). Por fim, crie uma função chamada `date` no arquivo `utils.js`. Essa função deve retornar a data no formato `yyyy-mm-dd` para a correta exibição no input do tipo `date` no HTML (lembre de tratar os dias e meses menores que 10 utilizando o método `slice` da string).
  #### ESTILIZAÇÃO
  - Você tem liberdade para escolher a estilização que preferir para esse desafio.
  #### NOTA
  - *Além do que foi solicitado, adicionei o parâmetro `required` nos campos do tipo `input` no arquivo `fields.njk`, para uma validação automática caso algum campo esteja em branco ao adicionar um novo registro através do arquivo `create.njk`*.

<h1 align="center">
  <img src="/Images/desafio_4-4_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-4_2.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-4_3.PNG">
</h1>
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_04/Desafio_04_4">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=XTh5wlLNghA)
</details>

<details>
  <summary>HTTP: PUT e DELETE</summary>
  
  #### SOBRE
  - Nessa etapa você irá implementar duas rotas: PUT e DELETE para a atualização e remoção, respectivamente, dos dados cadastrados de um professor.
  #### PUT
  - Crie uma rota para receber os dados do formulário de edição e propagar no arquivo `json`. Lembre de sobrescrever o método POST do form para PUT (utilize a lib `method-override`). Dentro do arquivo `teachers.js`, crie um método `update` para buscar e retornar o professor a partir do `id` fornecido na rota. Faça a busca pelo professor a partir do `id` e atualize no arquivo `json` os dados que foram alterados (utilize o constructor `Number` para formatar o id como número). Por fim, redirecione para a página de apresentação dos dados de um professor (show).
  #### DELETE
  - Crie um botão na página de apresentação dos dados do professor. Esse botão irá chamar uma rota para deletar o professor do arquivo `json`. Lembre de sobrescrever o método POST do form para DELETE (utilize a lib `method-override`). Dentro do arquivo `teachers.js`, crie um método `delete` e gere um array com todos os professores, exceto o que deve ser removido (`filter`). Por fim, redirecione para a página de listagem dos professores.
  #### ESTILIZAÇÃO
  Você tem liberdade para escolher a estilização que preferir para esse desafio. Porém, algumas coisas são obrigatórias:
  - O botão de deletar deve ficar ao lado do botão de editar;
  - O botão de deletar deve ser da cor vermelha.
  
<h1 align="center">
  <img src="/Images/desafio_4-5_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-5_2.PNG">
</h1>
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_04/Desafio_04_5">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=b4VunyQ_O8o)
</details>

<details>
  <summary>Listagem de professores</summary>
  
  #### SOBRE
  - Nessa etapa você deve listar todos os professores salvos no arquivo `json` e apresentá-los em formato de tabela.
  #### LISTAGEM
  - Crie uma rota para repassar para o arquivo de listagem os dados dos professores salvos no arquivo `json`.
  #### TABELA
  - Crie um arquivo que irá mostrar os dados dos professores em formato de tabela. Utilize `Nome completo`, `Acompanhamento` e `Ação` como cabeçalhos.
  #### ESTILIZAÇÃO
  Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:
  - A tabela deve ocupar todo o espaçamento do cartão;
  - Os cabeçalhos e os valores devem estar centralizados;
  - A imagem deve ser apresentada antes do nome. Deve ter formato circular e tamanho de 40px;
  - O campo `Acompanhamento` deve apresentar as matérias lecionadas de forma separada (array, assim como na página de apresentação de dados de um professor).
  
<h1 align="center">
  <img src="/Images/desafio_4-6.PNG">
</h1>
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_04/Desafio_04_6">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=x-XkmLv1VCg)
</details>

<details>
  <summary>Estruturando estudantes</summary>
  
  #### SOBRE
  - Nessa etapa você deve reaproveitar para os estudantes toda a estrutura já criada para os professores. Além disso, deve implementar a lógica do menu ativo.
  #### ESTRUTURA
  Reaproveite o código obedecendo os seguintes padrões:
  - Crie um arquivo `students.js` com a mesma estrutura que o `teachers.js`. Insira ambos os arquivos dentro uma pasta `controllers`;
  - Crie um array `students` vazio dentro do arquivo `json`;
  - Crie uma pasta `students` com a mesma estrutura de views que os professores;
  - Crie as rotas dos estudantes seguindo a mesma estrutura dos professores.
  #### MENU ATIVO
  - Crie um arquivo `scripts.js` e implemente a lógica do menu ativo utilizando o `location` e o `includes` da string. Além disso, implemente um botão de cadastro nas páginas de listagem de professores e estudantes.
  #### FORMULÁRIO
  Faça os ajustes de professores para estudantes no formulário de criação. Além disso, remova os campos:
  - Grau de escolaridade;
  - Tipo de aula;
  - Acompanhamento;
  - Desde.
  
  e adicione os campos:
  - Email: campo do tipo `email`;
  - Ano escolar: campo do tipo `select` com todas as opções de anos escolares entre o 5º ano do ensino fundamental e o 3º ano do ensino médio;
  - Carga horária semanal: campo do tipo `number` que indica a quantidade de horas de aulas particulares que o aluno irá ter por semana.
  #### SALVANDO OS DADOS
  - Faça os ajustes de professores para estudantes no método `post` do arquivo `students.js`. Além disso, implemente a nova estratégia de `id` (evitar repetição).
  #### APRESENTAÇÃO
  Faça os ajustes de professores para estudantes na página de apresentação dos dados de um estudante. Além disso, faça duas alterações no arquivo `utils.js`:
  - Altere o retorno da função `date` para `day`, `month`, `year`, `iso` e `birthDay` (lembre de fazer o ajuste no método `edit` para buscar o `.iso`);
  - Crie uma função chamada `grade` que retorna os dados formatados a partir do valor selecionado no `select` (ex.: o valor 1EF representa **1º Ano do Ensino Fundamental**).
  #### EDIÇÃO
  - Faça os ajustes de professores para estudantes na página de edição dos dados de um estudante. Implemente o campo `Aniverśario` onde é apresentado o dia e o mês do aniversário do estudante. Além disso, altere tanto no `edit.njk` dos professores quanto no dos alunos a `url` da seção de avatar. Utilize o campo `avatar_url` cadastrado em vez da api do unsplash.
  #### REMOÇÃO
  - Crie um arquivo `confirm.njk` e importe ele no seu arquivo `edit.njk`. Esse arquivo deve ser responsável por escutar o evento (`addEventListener`) de `submit` do form de remoção e solicitar pela confirmação do usuário (`confirm`). Caso o usuário cancele a remoção, deve-se cancelar o form (método `preventDefault`).
  #### LISTAGEM
  - Faça os ajustes de professores para estudantes na página de listagem dos dados de um estudante. Remova a coluna de `Acompanhamento` e adicione as de `Email` e `Ano escolar`.
  #### ESTILIZAÇÃO
  - Você tem liberdade para escolher a estilização que preferir para esse desafio.
  
<h1 align="center">
  <img src="/Images/desafio_4-7_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-7_2.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-7_3.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-7_4.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-7_5.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-7_6.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-7_7.PNG">
</h1>

<h1 align="center">
  <img src="/Images/desafio_4-7_8.PNG">
</h1>
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_04/Desafio_04_7">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=HA9rd_mUTRs)
</details>

## :rocket: Foodfy | Administração
<details>
  <summary>Administração do Foodfy</summary>
  
  #### SOBRE
  - Nesse desafio você irá criar uma área administrativa para o Foodfy, aplicação que desenvolvemos nos desafios anteriores.<br><br>
  Você utilizará o mesmo projeto do Foodfy desenvolvido no desafio anterior e somente adicionar essa área administrativa, que será responsável por cadastrar, editar e deletar os dados que estão no seu arquivo: `data.js`
  #### ROTAS DO ADMINISTRADOR
  - Usando os conhecimentos adquiridos até aqui, você deve criar rotas para uma área administrativa, onde o usuário poderá cadastrar novas receitas, apresentá-las, além de atualizar e deletar também.<br><br>
Use a seguinte ideia para criar suas rotas:

```js
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita
routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita
```

Dica: Você pode criar pasta(s) para organizar os arquivos do seu projeto.
  #### DETALHES DA RECEITA
  - Para facilitar a busca de uma receita cadastrada, você pode usar a mesma forma de busca pelo index do `array` de `recipes` que foi apresentada no desafio anterior e desconsiderar o uso de um `id` único para cada receita, como apresentado nas aulas deste módulo.
  
  Mais pra frente entenderemos o uso dos ID's de forma mais profunda.
  #### LAYOUT DO PAINEL DE ADMINISTRAÇÃO
  
 <h1 align="center">
  <img src="/Images/foodfy_adm_show.png">
 </h1>
 
  #### DADOS DO PROJETO
  - No desafio passado você criou um arquivo de dados chamado `data.js` para servir de dados da sua aplicação;
  - Utilize agora, um arquivo que levará o nome `data.json` seguindo o que você aprendeu nesse módulo, porém, mantenha a estrutura de dados que você tinha no seu arquivo: `data.js`.
  
  Exemplo:
  ```json
{
  "recipes": []
}
```

Nesse `array` de `recipes` irão as receitas cadastradas pelo seu sistema.

A fim de testar as funcionalidades da sua área administrativa, cadastre, pela área administrativa, os dados que você tinha anteriormente no seu `data.js`.
  #### ADICIONAR CAMPO DINÂMICO
  - Os campos de "Ingredientes" e "Modo de preparo", serão campos dinâmicos, onde você irá adicionar quantos campos forem necessários, usando JavaScript para isso.
  
  **GIF Exemplo**
  
 <h1 align="center">
  <img src="/Images/foodfy_adm_addExample.gif">
 </h1>
 
 **Código de exemplo**
 
 ```html
<div id="ingredients">
  <div class="ingredient">
    <input type="text" name="ingredients[]" value="" placeholder="Ingredient" />
  </div>
</div>
<button type="button" class="add-ingredient">Add Ingredient</button>
```

Veja que o nome do nosso input contém `[]` no fim, isso significa que ele será um vetor, ou seja, quando o usuário enviar o formulário teremos algo assim:

```js
{
  "ingredients": [
    "Batata",
    "Queijo",
    "Bacon"
  ]
}
```

**Exemplo de JavaScript**

```js
function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");
  
  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;
  
  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);
```

  #### APRESENTAÇÃO NO SITE
  - Altere as rotas desenvolvidas no desafio anterior para exibir as receitas do novo arquivo `data.json` para o nosso site do Foodfy, no fim do desafio você deve ter então tanto a área administrativa do projeto quando o website consumindo os mesmos dados.
  #### NOTA
  - _Além do que foi solicitado, adicionei nos formulários de edição e criação de uma receita, a funcionalidade de colocar o cursor do mouse (`focus`) no campo recém criado ao se clicar em `adicionar novo ingrediente` ou `adicionar novo passo`_.

<h1 align="center">
  <img src="/Images/foodfy_adm_1.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_adm_2.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_adm_3.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_adm_4.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_adm_5.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_adm_6.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_adm_7.PNG">
</h1>

<h1 align="center">
  <img src="/Images/foodfy_adm_8.PNG">
</h1>
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/Foodfy_Administra%C3%A7%C3%A3o">Código</a>
  #### :clapper: [Demonstração](https://www.youtube.com/watch?v=SN381vXgaNY)
</details>

## :rocket: Módulo 5
<details>
  <summary>Refatorando a aplicação e configurando o BD</summary>
  
  #### SOBRE
  - Esse é o primeiro desafio de uma sequência que irá implementar o banco de dados na aplicação desenvolvida no módulo anterior.<br><br>
Nessa etapa, você deve refatorar o código da sua aplicação e preparar o seu ambiente para trabalhar com banco de dados.
  #### CRIANDO O BANCO DE DADOS
  Utilizando a ferramenta postbird, crie **através de queries** um banco de dados chamado **my_teacher** e uma tabela com o nome de **teachers** que possua os seguintes campos:
  
  - id: INT e PRIMARY KEY;
  - avatar_url: TEXT e NOT NULL;
  - name: TEXT e NOT NULL;
  - birth_date: TIMESTAMP e NOT NULL;
  - education_level: TEXT e NOT NULL;
  - class_type: TEXT e NOT NULL;
  - subjects_taught: TEXT e NOT NULL;
  - created_at: TIMESTAMP e NOT NULL.
  
  _Dicas: Para criar a tabela a partir de uma query, basta selecionar o banco no postbird e na aba **Query** rodar o comando **CREATE TABLE** especificando o nome da tabela e em seguida as colunas, por exemplo:_
  
  ```sql
CREATE TABLE TEST(
     ID INT PRIMARY KEY,
     NAME TEXT NOT NULL
);
```

_Para mais informações, dê uma olhada nesse [link](https://www.postgresqltutorial.com/postgresql-create-table/)_
  #### REFATORANDO O CÓDIGO
  Após preparar o banco de dados, é preciso refatorar a sua aplicação para utilizá-lo. Você deve fazer as seguintes alterações:
  
  - Utilizar a nova estrutura de pastas (src, app e lib);
  - Corrija nos arquivos os caminhos relativos que precisar;
  - Utilize nos arquivos da pasta `controllers` a nova forma de exportar.
  #### CONFIGURANDO O BD NA APLICAÇÃO
  - Por fim, instale a biblioteca `pg` e crie o arquivo de configuração do seu banco de dados (em uma pasta **config**) utilizando o `Pool`. Não esqueça de passar os dados necessários (**user, password, host, port e database**) na hora de instanciar (**new**) o Pool.
  #### ESTILIZAÇÃO
  - Você tem liberdade para escolher a estilização que preferir para esse desafio.
  
  #### :computer: <a href="https://github.com/frankjrp/RocketSeat_LaunchBase/tree/master/M%C3%B3dulo_05/Desafio_05_1">Código</a>
</details>
