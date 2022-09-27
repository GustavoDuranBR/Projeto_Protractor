const {browser} = require('protractor');
const { faker } = require('@faker-js/faker');
const fakerbr = require('faker-br');
const {expect} = require('chai');

var homePage = require('../pageObjects/homePage.po.js');
var newAuctionPage = require('../pageObjects/newAuctionPage.po.js')
var cadastroADM = require('../pageObjects/cadastroADM.po.js');
var cadastroProduto = require('../pageObjects/cadastroProduto.po.js');
var backHomePage = require('../pageObjects/backHomePage.po.js');
var cadastroSimples = require('../pageObjects/cadastroSimples.po.js');
var myAccountAdm = require('../pageObjects/myAccountAdm.po.js');
var myAccount = require('../pageObjects/myAccount.po.js');

 
describe('Cadastrar usuário sem privilégio administrador: ', function(){
    beforeAll(function(){
        homePage.visit();
    });
    
    it('Deve preencher todos os campos do formulário e registrar o usuário sem privilégio administrador e retornar uma mensagem de SUCESSO para o usuário',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroSimples.loginUser(faker.name.firstName(), faker.internet.userName(),
        faker.internet.password(), faker.internet.email(), fakerbr.br.cpf());
        expect(await myAccount.getTextName()).to.be.eq("Usuário cadastrado com sucesso")
    })
});

describe('Cadastrar usuário com privilégio administrador: ', function(){
    beforeAll(function(){
        homePage.visit();
    });

    it('Deve preencher todos os campos do formulário e registrar o usuário com privilégio administrador e retornar uma mensagem de SUCESSO para o usuário',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroADM.loginAdm(faker.name.firstName(), faker.internet.userName(),
        faker.internet.password(), faker.internet.email(), faker.seed('857.156.050-16'));
        expect(await myAccountAdm.getTextName()).to.be.eq("Usuário cadastrado com sucesso")
    })
});

describe('Validar Campo CPF: ', function(){
    beforeAll(function(){
        homePage.visit();
    });

    it('Deve preencher o formulário utilizando um CPF já cadastrado e e retornar uma mensagem de ERRO para o usuário',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroADM.loginAdm(faker.name.firstName(), faker.internet.userName(),
        faker.internet.password(), faker.internet.email(), faker.seed('857.156.050-16'));
        expect(await myAccountAdm.getTextName()).to.be.eq("CPF já cadastrado no sistema")
    })
});

describe('Validar Campo Senha: ', function(){
    beforeAll(function(){
        homePage.visit();
    });

    it('Deve preencher o formulário utilizando uma Senha fraca e o sistema não deve aceitar e retornar uma mensagem de ERRO para o usuário',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroADM.loginAdm(faker.name.firstName(), faker.internet.userName(),
        faker.seed(123), faker.internet.email(), fakerbr.br.cpf());
        expect(await myAccountAdm.getTextName()).to.be.eq("Senha fraca ou fora do padrão")
    })
});

describe('Cadastro de Produto: ', function(){
    beforeAll(function(){
        newAuctionPage.visit();
    });

    it('Deve preencher os campos Name e Initial Value e registrar o produto no sistema e retornar uma mensagem de sucesso para o usuário',
    async function(){
        await newAuctionPage.visit();
        await cadastroProduto.registrationTv(fakerbr.commerce.product(), fakerbr.finance.amount());
        expect(await myAccountAdm.getTextName()).to.be.eq("Produto cadastrado com sucesso")
    })
});

describe('Voltar para a HomePage: ', function(){
    it('Deve retornar para a tela de login do sistema',
    async function(){
        await backHomePage.pageOut();
    })
});
