const {element, browser} = require('protractor');

class CadastroTv{
    get inputNameProduct(){
        return element(by.xpath('//*[@id="name"]'))
    }
    get inputInitialValue(){
        return element(by.xpath('//*[@id="value"]')).sendKeys(protractor.Key.BACK_SPACE)
    }
    get checkBoxUsedProduct(){
        return element(by.css('#used'))
    }
    get btnSignUp(){
        return element(by.xpath('/html/body/app-root/app-main/div/app-new-auction/form/div[4]/button'))
    }
    async registrationTv(product, value){
        browser.wait(ExpectedConditions.elementToBeClickable(this.inputNameProduct),5000);
        this.inputNameProduct.sendKeys(product);
        this.inputInitialValue.sendKeys(value);
        this.checkBoxUsedProduct.click();
        this.btnSignUp.click();
    }
}

module.exports = new CadastroTv();