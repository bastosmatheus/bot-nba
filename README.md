<h1 align="center" style="font-weight: bold">bot-nba 🏀</h1>

## Descrição 📜

Esse projeto consiste em uma automação que fornece informações dos elencos dos times da NBA. O sistema em questão é uma aplicação console que fornece opções de escolha, o usuário digita a opção que deseja e as informações são mostradas de acordo com essa opção.

Todas as informações são retiradas do site oficial da [NBA](https://www.nba.com/). Para efetuar o acesso ao site é utilizado a biblioteca de web scrapping [Puppeteer](https://pptr.dev/) e os registros de input do usuário ficam por conta da lib [Readline-Sync](https://github.com/anseki/readline-sync).

## Próxs. funcionalidades

- Possibilidade de ver as próximas partidas de cada time.
- Possibilidade de ver a comissão técnica de cada time.

## Tecnologias 🖥️

Este projeto está utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en)
- [Puppeteer](https://pptr.dev/)
- [Readline-Sync](https://github.com/anseki/readline-sync)

## Como rodar esse projeto? 💿

<h3>Pré-requisitos</h3>

- [Git](https://git-scm.com/)
- [Github](https://github.com/)
- [Node.js](https://nodejs.org/en)

<h3>Clonagem</h3>

```bash
# clone o repositório
$ git clone https://github.com/bastosmatheus/bot-corinthians.git
```

<h3>Projeto</h3>

```bash
# depois de clonado, procure a pasta do projeto
$ cd bot-corinthians

# instale todas as dependências
$ npm install

# execute o projeto
$ npm run dev
```
