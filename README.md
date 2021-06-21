# Desafio Front-End = Justa

## Sobre o projeto

Esse projeto foi desenvolvido de acordo com o Desafio Front-End proposto pela Justa Pagamentos. Foi feito um fork do [repositório disponibilizado pela empresa](https://github.com/justapagamentos/jst-job-challenges) através do link https://github.com/justapagamentos/jst-job-challenges.

O desafio consistia em desenvolver uma aplicação que utilizasse algum framework de desenvolvimento utilizando o Typescript, com o objetivo de consumir dados de uma API e atender o que fora proposto. A ideia era de que a aplicação resgatasse os dados da API escolhida, podendo realizar uma busca pelos dados que seriam impressos com mais detalhes de acordo com a seleção do usuário.

Para este desafio, escolhi a API "Breaking Bad API" que possui dados sobre o universo da série que vão desde os personagens e seus dados pessoais, a informações dos episódios exibidos, bem como citações dos personagens e últimas palavras dos personagens.

Neste projeto, decidi fazer uma aplicação que consultava e apresentava as informações pessoais de cada personagem a partir da seleção do usuário.


## O que foi utilizado?

De acordo com os requisitos, utilizei a biblioteca Axios para fazer as requisições dos dados da API. Também utilizei o React Hooks com o Typescript para desenvolver a aplicação. 
Foi utilizado o SASS como pré-processador CSS, onde foram feitas as estilizações e alguns breakpoints para atender o requisito de responsividade.

O ESLint também foi utilizado junto com o Prettier para análise do código, verificando a estruturação do código e validando o que era desenvolvido. 

Também utilizei o ContextAPI para a passagem de props entre os componentes.

## Como executar essa aplicação?

Utilizei o Yarn com o Create-React-App com o template de Typescript para começar com o projeto base de React Typescript. Todas as dependências foram instaladas com Yarn.

Para executar a aplicação, é necessário executar o comando yarn no terminal dentro do diretório da aplicação para instalação de dependências e, por fim, executar o yarn start para a execução.
