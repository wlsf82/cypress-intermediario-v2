# Conhecendo a aplicação em teste

Antes de começarmos a configurar o Cypress e escrever scripts de testes automatizados, deixa eu te apresentar a aplicação que vamos testar.

Para o curso intermediário de Cypress da Escola TAT, vamos testar uma aplicação complexa. Esta aplicação é uma [versão _open-source_ do GitLab, rodando em um _container_](https://hub.docker.com/r/wlsf82/gitlab-ce) em seu ambiente local.

## Funcionalidades da aplicação

O GitLab possui diversas funcionalidades, porém, duruante o curso testaremos as seguintes:

- _Login_
- _Logout_
- Criação de projeto
- Criação de _issue_
- Adição de uma etiqueta (_label_) à uma _issue_
- Adição de um marco (_milestone_) à uma _issue_
- Git clone

## Teu desafio

Durante o curso de testes automatizados com Cypress (intermediário) da Escola TAT, te desafio a testar todas as funcionalidades listadas acima, tanto via API (_Application Programming Interface_), como via GUI (_Graphical User Interface_), além de testar uma delas (o git clone) via CLI (_Command Line Interface_).

Espero que esteja tão ansiosa(o) para começar como estou para te guiar ao longo do caminho! 🧑‍🏫

Vá para a [aula 0](./0.md) para fazer o _setup_ do ambiente local com Docker.
