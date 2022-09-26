const {browser} = require('protractor');
const { faker } = require('@faker-js/faker');
const fakerbr = require('faker-br');
const {expect} = require('chai');

var homePage = require('../pageObjects/homePage.po.js');
var newAuctionPage = require('../pageObjects/newAuctionPage.po.js')
var cadastroADM = require('../pageObjects/cadastroADM.po.js');
var cadastroTv = require('../pageObjects/cadastroTv.po.js');
var backHomePage = require('../pageObjects/backHomePage.po.js');
var cadastroSimples = require('../pageObjects/cadastroSimples.po.js');
var myAccountAdm = require('../pageObjects/myAccountAdm.po.js');
var myAccount = require('../pageObjects/myAccount.po.js');

 
describe('Cadastrar usuário simples: ', function(){
    beforeAll(function(){
        homePage.visit();
    });
    
    it('Cadastro de Usuario Simples na página de leilão',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroSimples.loginUser(faker.name.firstName(), faker.internet.userName(),
        faker.internet.password(), faker.internet.email(), fakerbr.br.cpf());
        expect(await myAccount.getTextName()).to.be.eq("Regal Auctions")
    })
});

describe('Acessar página de leilão: ', function(){
    beforeAll(function(){
        homePage.visit();
    });

    it('Cadastro de Usuario Adm na página de leilão',
    async function(){
        await homePage.btnSignUp.click();
        await cadastroADM.loginAdm(faker.name.firstName(), faker.internet.userName(),
        faker.internet.password(), faker.internet.email(), faker.seed('857.156.050-16'));
        expect(await myAccountAdm.getTextName()).to.be.eq("Regal Auctions")
    })
});

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

describe('Voltar para a HomePage: ', function(){
    it('Retornando para a HomePage',
    async function(){
        await backHomePage.pageOut();
    })
});
