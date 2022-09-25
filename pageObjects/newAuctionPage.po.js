const {browser} = require('protractor');

class AuctionPage {
    async visit(){
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.get('http://localhost:4400/app/#/main/newauction')
    }
}

module.exports = new AuctionPage();