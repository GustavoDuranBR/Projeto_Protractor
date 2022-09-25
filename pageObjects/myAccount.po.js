const {element, browser} = require('protractor');

class MyAccount{
    get pageUser(){
        return element(by.css('.navbar-brand'))
    };
    async getTextName(){
        browser.wait(ExpectedConditions.elementToBeClickable(this.pageUser),5000);
        return await this.pageUser.getText();
    }
}

module.exports = new MyAccount();