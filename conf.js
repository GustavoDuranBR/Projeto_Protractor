exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/loginUsers.spec.js'],
    framework: 'jasmine',

    onPrepare: function () {
        let HtmlReporter = require('protractor-beautiful-reporter');
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports_new',
            screenshotsSubfolder: 'screenshotsOnFailure',
            takeScreenShotsOnlyForFailedSpecs: false,
            jsonsSubfolder: 'jsonFiles',
            excludeSkippedSpecs: false,
            preserveDirectory: false,
            clientDefaults: {
                showTotalDurationIn: "header",
                totalDurationFormat: "h:m:s",
                gatherBrowserLogs: true
            },
        }).getJasmine2Reporter());
    }
};