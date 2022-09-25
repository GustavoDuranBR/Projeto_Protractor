const {element, browser} = require('protractor');

class MyAccountAdm {
    get pageUserAdm(){
        return element(by.css('.navbar-brand'))
    };
    async getTextName(){
        browser.wait(ExpectedConditions.elementToBeClickable(this.pageUserAdm),5000);
        return await this.pageUserAdm.getText();
    }
}

module.exports = new MyAccountAdm();