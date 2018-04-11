const functions = require('../test-assets/functions')
const selector = require('../test-assets/selectors')
const value = require('../test-assets/data')

module.exports = {
    before: browser => {
        browser.url('https://www.runtastic.com')

    },
    after: browser => {
        browser.end()
    },

    // ************The below was run to create a dummy account up to the "Sign Up" that has been commented out.  Testing resumes with dummy account to verify navigation capabilities**********
    'Open New Account': browser => {
        browser
            .useXpath()
            .waitForElementVisible(selector.signUpEmail, 5000)
            .setValue(selector.signUpEmail, "hawkpete@gmail.com")
            .setValue(selector.newPassword, "Junker001!")
            .setValue(selector.passwordConf, "Junker001!")
            // .clickByText(selector.signUpButton, "Sign Up")
            .useCss()
            .clickByText(selector.loginNav, "Already have an account? Log in here!")
            .pause(5000)
            .useXpath()
            .waitForElementVisible(selector.logInButton, 3000)
            .setValue(selector.loginEmail, "hawkpete@gmail.com")
            .setValue(selector.password, "Junker001!")
            .clickByText(selector.logInButton, "Log in")
            .pause(5000)


    }
}