var HtmlReporter = require('protractor-beautiful-reporter');

exports.config ={
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['specs/loginUsers.spec.js'],
    
    onPrepare: function(){
        // Add a screenshot reporter and store screenshots to `/tmp/`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
        }));
     }
};
