const {element, browser} = require('protractor');

class BackHomePage{
    get signOut(){
        return element(by.css('#Sign Out'))
    }
    get btnSignOut(){
        return element(by.xpath('//*[@id="navbarSupportedContent"]/ul/li[4]/a'))
    }
    async pageOut(){
        this.btnSignOut.click();
    }
}

module.exports = new BackHomePage();