const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        reporterEnabled: "mochawesome",
        mochawesomeReporterOptions: {
            reportDir:"cypress/reports/mocha",
            quite: true,
            overwrite: false,
            html: false,
            json: true,
        }
    },
    video: false,
    screenshotOnRunFailure:	false,
    e2e: {
        baseUrl: "https://cirosantilli-realworld-next.herokuapp.com",
        setupNodeEvents(on, config) {
        },
    },
});