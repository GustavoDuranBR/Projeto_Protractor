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

## Pré requisitos 
Protractor é um programa Node.js, portanto, para executá-lo é necessário possuir o Node instalado.
Ao realizar o download do Protractor via npm, o Node será instalado e o Jasmine será o framework utilizado para teste de interface.


Abra o projeto no editor de sua preferência.
No meu caso, utilizei o Visual Studio Code para desenvolver todo o projeto de teste.
Com o projeto aberto no editor, abre o terminal e navegue até a pasta do projeto.

### Execute os seguintes comandos para executar os testes.
```bash
# Comando para instalar o servidor e o ChromeDriver
$ webdriver-manager update

# Comando para inicializar o servidor
$ webdriver-manager start

```
```bash
# Rodar o comando "docker run -p 4400:80 pedroballona/tester-test:1.0"
# Esse comando está configurado no arquivo package.json do projeto
$ npm run app-start

```
```bash
# Comando para iniciar a Protractor e executar os testes E2E da aplicação.
# Esse comando está condigurado no arquivo package.json do projeto
$ npm run test

```

## ✔️ Técnicas e tecnologias utilizadas

- ``JavaScript``
- ``Protractor``
- ``@faker-js/faker``
- ``protractor-beautiful-reporter``

## Explicando o código

Essa parte do códico realiza o cadastro de um usuário sem o privilégio de administrador.
```bash
describe('Cadastro de usuário sem privilégio administrador: ', function(){
    beforeAll(function(){
        homePage.visit();
    });
    
    it('Cadastro de Usuario preenchendo todos os campos',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroSimples.loginUser(faker.name.firstName(), faker.internet.userName(),
        faker.internet.password(), faker.internet.email(), fakerbr.br.cpf());
        expect(await myAccount.getTextName()).to.be.eq("Regal Auctions")
    })
});

```

<p> Essa parte do códico realiza o cadastro de um usuário com o privilégio de administrador.</p>
Obs. No campo CPF utilizei a opção faker.seed('857.156.050-16') pois o próximo teste irá validar o campo CPF. 

```bash
describe('Cadastro de usuário com privilégio administrador: ', function(){
    beforeAll(function(){
        homePage.visit();
    });

    it('Cadastro de Usuario Adm preenchendo todos os campos',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroADM.loginAdm(faker.name.firstName(), faker.internet.userName(),
        faker.internet.password(), faker.internet.email(), faker.seed('857.156.050-16'));
        expect(await myAccountAdm.getTextName()).to.be.eq("Regal Auctions")
    })
});

```

<p> Essa parte do códico realiza o cadastro de um usuário com o privilégio de administrador. </p>
Obs. O CPF faker.seed('857.156.050-16') utilizado mais uma vez para testar se o campo CPF aceita o registro para usuários diferentes.

```bash
describe('Validar Campo CPF: ', function(){
    beforeAll(function(){
        homePage.visit();
    });

    it('Cadastro de Usuario Adm com CPF duplicado',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroADM.loginAdm(faker.name.firstName(), faker.internet.userName(),
        faker.internet.password(), faker.internet.email(), faker.seed('857.156.050-16'));
        expect(await myAccountAdm.getTextName()).to.be.eq("Regal Auctions")
    })
});

```

<p> Essa parte do códico realiza o cadastro de um usuário utilizando uma senha com apenas 3 dígitos. </p>
Obs. Esse teste serve para validar se o campo senha tem alguma formatação para um padrão de senhas.

```bash
describe('Validar Campo Senha: ', function(){
    beforeAll(function(){
        homePage.visit();
    });

    it('Cadastro de Usuario Adm utilizando senha fraca',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroADM.loginAdm(faker.name.firstName(), faker.internet.userName(),
        faker.seed(123), faker.internet.email(), fakerbr.br.cpf());
        expect(await myAccountAdm.getTextName()).to.be.eq("Regal Auctions")
    })
});

```

<p> Essa parte do códico realiza o cadastro de um produto. </p>

```bash
describe('Cadastro de Produto: ', function(){
    beforeAll(function(){
        newAuctionPage.visit();
    });

    it('Cadastrar Produto',
    async function(){
        await newAuctionPage.visit();
        await cadastroTv.registrationTv(fakerbr.commerce.product(), fakerbr.finance.amount());
        expect(await myAccountAdm.getTextName()).to.be.eq("Regal Auctions")
    })
});

```

<p> Por fim o teste redireciona para a página principal e finaliza os testes. </p>

```bash
describe('Voltar para a HomePage: ', function(){
    it('Retornando para a HomePage',
    async function(){
        await backHomePage.pageOut();
    })
});

```


