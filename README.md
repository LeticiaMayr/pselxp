# Repositório para entrega do processo seletivo da turma XP Inc.!

Este repositório contem instruções e dados sobre a entrega da aluna Letícia Mayr ao desafio do processo seletivo.

---

### Sobre o desafio

Era necessário desenvolver uma aplicação de front-end que simulasse um aplicativo de bolsa de valores, com telas de login, depósito/saque numa conta digital, display das ações e uma de compra/venda de ações.

Optei por começar por uma simulação de API, visto que aqui é fullstack mesmo e queria me desafiar a fazer a aplicação completa \o/. A ideia era ir atualizando-a conforme fosse necessário e optei por fazer 2 arquivos .json que simulassem um banco de dados. Um destes arquivos contem as informações das pessoas usuárias como email e usuário, já o outro o das ações como quantidade disponível para compra e o valor da unidade.

Como a ideia era focar no front, fui fazendo algumas alterações na API conforme a necessidade do consumo da aplicação e alguns detalhes como arquitetura das pastas. O front começou pela tela de login, que faz algumas verificações e ao usuário "inputar" dados adequados, faz as requisições necessárias para o consumo da página de ações. Algumas alterações foram feitas na ideia de design pensando no conforto da pessoa usuária (cliente), um exemplo é disponibilizar o saldo de sua conta em todas as páginas.

A prioridade era que as telas fossem funcionais e que o banco de dados fictício não fosse alterado de maneira incorreta. Uma vez que consegui alguma satisfação nas funcionalidades resolvi aprender sobre o bootstrap e o sweet alert, os quais nunca tinha usado, para que o design fosse melhorado.

---

### Principais Tecnologias utilizadas

<details>
  <summary>Para o back</summary>
  <ul>
    <li> Node version 16.13.2
    <li> Express version 4.18.1
    <li> Nodemon version 2.0.19
    <li> Cors version 2.8.5
    <li> git version 2.25.1
  </ul>
</details>

<details>
  <summary>Para o front</summary>
  <ul>
    <li> React version 18.2.0
    <li> Bootstrap version 5.2.0
    <li> React-Boostrap version 2.4.0
    <li> Sweetalert version 2.1.2
    <li> git version 2.25.1
  </ul>
</details>

---

### Estrutura das pastas

O projeto possui 2 partes, uma contendo uma API que lê os dados de 2 arquivos .json e outra com a aplicação react que realiza o front, numa estrutura parecida com a abaixo:

**Aqui ficará a imagem das pastas**

---

### Como usar?

- Clone o repositório para a sua máquina local.
- Navegue até o diretório backend e nela use "npm run dev" para subir a simulação da API da bolsa.
- Em outro terminal, navegue até o diretório pselxp-front e use "npm start" para abrir a aplicação funcionando.

---

### Features

<details>
  - Imagem da página de login
  - Imagem da página de ações
</details>

---

### Autora

Letícia Mayr, contato: https://www.linkedin.com/in/leticia-mayr/
