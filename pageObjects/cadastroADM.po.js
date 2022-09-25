const {element, browser} = require('protractor');

class CadastroADM{
    get inputName(){
        return element(by.css('#name'))
    }
    get inputUsername(){
        return element(by.css('#username'))
    }
    get inputPassword(){
        return element(by.css('#password'))
    }
    get inputEmail(){
        return element(by.css('#email'))
    }
    get inputCPF(){
        return element(by.css('#cpf'))
    }
    get checkBoxAdmin(){
        return element(by.css('#admin'))
    }
    get btnSignUp(){
        return element(by.xpath('/html/body/app-root/app-sing-up/div/div/div/div[2]/form/div[7]/button'))
    }
    async loginAdm(nome, nomeUsuario, senha, email, cpf){
        browser.wait(ExpectedConditions.elementToBeClickable(this.inputName),5000);
        this.inputName.sendKeys(nome);
        this.inputUsername.sendKeys(nomeUsuario);
        this.inputPassword.sendKeys(senha);
        this.inputEmail.sendKeys(email);
        this.inputCPF.sendKeys(cpf);
        this.checkBoxAdmin.click();
        this.btnSignUp.click();
    }
}

module.exports = new CadastroADM();