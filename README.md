<h1 align="center"> Projeto_Protractor TOTVs </h1>

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Descrição do projeto 

<p align="justify">
 Projeto em desenvolvimento para realizar teste E2E na Aplicação Web de Leilão. </p> 
 <p>O sistema de leilão permite que o usuário realize o cadastro tanto para adicionar produtos para leilão como cadastro simples para dar lances 
 em produtos cadastrados.
</p>


# 🛠️ Abrir e rodar o projeto 🛠️

## Sobre clonagem de um repositório

**Para executar o projeto, clone o repositório do GitHub.com para o seu computador.
Ao clonar um repositório, você copia o repositório do GitHub.com para a sua máquina local.**

Dependencias necessárias para o projeto.
Protractor é um programa Node.js, portanto, para executá-lo é necessário possuir o Node instalado.
Ao realizar o download do Protractor via npm, o Node será instalado e o Jasmine será o framework utilizado para teste de interface.


Abra o projeto no editor de sua preferência.
No meu caso, utilizei o Visual Studio Code para desenvolver todo o projeto de teste.
Com o projeto aberto no editor, abre o terminal e navegue até a pasta do projeto.
Execute os seguintes comandos para executar os testes.
* Execute o comando update:  webdriver-manager update Isso instalará o servidor e o ChromeDriver.
* Execute o comando start:  webdriver-manager start Isso iniciará o servidor.
* Execute o comando app-start: Esse comando está configurado no arquivo package.json para rodar o comando "docker run -p 4400:80 pedroballona/tester-test:1.0"
* E por fim execute o comando test: npm run test O comando irá iniciar a Protractor e executar os testes E2E da aplicação.


## ✔️ Técnicas e tecnologias utilizadas

- ``JavaScript``
- ``Protractor``
- ``@faker-js/faker``
- ``protractor-beautiful-reporter``
