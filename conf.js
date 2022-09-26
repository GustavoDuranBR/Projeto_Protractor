var HtmlReporter = require('protractor-beautiful-reporter');

<<<<<<< HEAD
exports.config = {
   seleniumAddress: 'http://localhost:4444/wd/hub',
   specs: ['specs/loginUsers.spec.js'],

   onPrepare: function () {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tmp/screenshots',
         takeScreenShotsOnlyForFailedSpecs: true
      }).getJasmine2Reporter());
   }
=======
exports.config ={
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['specs/loginUsers.spec.js'],
    
    onPrepare: function(){
        // Add a screenshot reporter and store screenshots to `/tmp/`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
        }));
     }
>>>>>>> c61198e2b899f002143007ff783f5271b21ec601
};
