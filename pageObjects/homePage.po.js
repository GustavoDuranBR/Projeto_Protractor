const {element, browser} = require('protractor');

class HomePage {
    async visit(){
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.get('http://localhost:4400/app/#/login')
    }
    get btnSignUp(){
        return element(by.xpath('/html/body/app-root/app-login/div/div/div/div[3]/div/a'))
    }
}

module.exports = new HomePage();