# INTRO

This guide includes basic steps for creating test framework: 
* configuring web application that will be tested,
* basic conditions for test framework,
* setuping additional features, that will used for providing additional options, like a custom reports
* scripts, for runing specific tests and not only
* service actions, like a deleting generated reports, cleaning test artifacts
* actions for executing the test run on local machine and remote host that should be completed if you decided to use specific reporters or execute tests by continue integration tools, like ```Jenkins```

Below are the main parts of the project to help you navigate to specific instructions that was written for Windows users. In some cases I added sections for Unix users.

# Content

[1. Cypress installation guide](#1-cypress-instalition-guide)

[2. Basic Cypress  project](#2-basic-cypress-project)

[2.1 Basic project  structure](#21-basic-cypress-project-structure)

[3. Web app for test](#3-web-app-for-test)

[3.1 How to install web app](#31-how-to-install-web-app)

[4. Good to know](#4-Good-to-know)

[5. Tips and hints](#5-tips-and-hints)

[5.1 Jenkins instalation](#51-jenkins-instalation)

[6. FIXES](#FIXES)

## 1. Cypress instalition guide
Before you start to work on tests you need to prepare everithing that Cypress reqiures. Below is a list of actions that you need to complete. Then you will find basic project structure, folders and unique files that will be created after completeing instalation steps. 
I want to note that additional actions, like a creating custom reports, usage different approaches for writing tests, also add something new to your project stracture. 
This way you will get a project structure that will be different from the original configuration.

1. Cypres installing (by console)
```sh
npm install cypress --save-dev
```
2. Cypress update (by console)

If you want to use specific Cypress version, please use '@' + preferred Cypress version, for example below is a command that install Cypress version = 7.0.1
```sh
npm install cypress@7.0.1
```

In case, if you want to use all packages that was defined in the ```package.json``` file, please use next command. It can install specific version of packages that was defined in that file.
```
npm install
```

Install binary
Install a version different than the default npm package.
```sh
CYPRESS_INSTALL_BINARY=2.0.1 npm install cypress@6.0.1
```
or 
```sh
npm install cypress@6.0.1
```
Specify an external URL (to bypass a corporate firewall).
```sh
CYPRESS_INSTALL_BINARY=https://company.domain.com/cypress.zip npm install cypress
```
 * Specify a file to install locally instead of using the internet.
```sh
CYPRESS_INSTALL_BINARY=/local/path/to/cypress.zip npm install cypress
```

[CONTENT](#content)
## 2. Basic Cypress  project
### 2.1 Basic cypress project  structure
#### Tree view
```
├───cypress
│   ├───cucumber-json
│   ├───downloads
│   ├───e2e
│   │   └───examples
│   ├───fixtures
│   ├───integration
│   │   └───examples
│   ├───plugins
│   ├───screenshots
│   ├───support
│   │   └───pageObjects
│   └───videos
├───mochawesome-report
│   └───assets
├───node_modules
└───reports
|   └───cucumber-html_reports
|       ├───assets
|       └───features
|___cypress.json
|___package_lock.json
|___package.json

```
Short explanation for each section


* `cypress` <-- parent project folder for everything that is related to the test framework except used packages and custom reports

  * `cucumber-json`, folder that includes configurations for existing Cucumber test. Those tests created by 3rd part application. Installation  guide you can find here: [Run cucumber/gherkin-syntaxed specs with Cypress.io](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

* `downloads` <-- folder, that was created by developer for storing temporarly files that were used during test execution or test creation.
* `e2e/examples` <-- custom folder that contains examples of test scripts. You can create any folder and put there your tests. 
* `fixtures` <-- custom folder that contains examples of test data. In some cases you can create any folder you like.
Fixtures are used as external pieces of static data that can be used by your tests. Fixture files are located in cypress/fixtures by default, but can be [configured](https://docs.cypress.io/guides/references/configuration#Folders-Files) to another directory.

* `integration\examples` <-- basic, parent folder, that will have different tests ordered by user defined categories.

* `pageObjects` <-- folder which contains any defined *.js files which are decribed user defined page objects. Access to the defined functions in the js page object files are available by importing and declaring exact page object file using next template: 
`import { pageObjectFileName } from "../pageObjects/pageObjectFileName"`

* `plugins` <-- folder that will be created by default. It uncludes some default configurations for executing your tests. In some cases you can modify this file and add your personal configurations that are related to used plagins in your test framework.

* `screenshots` <-- folder that will be created by default when you will execute any created UI tests. It will include pictures / screenshots of webpage when test failed.
If screenshots were taken via the [cy.screenshot()](https://docs.cypress.io/api/commands/screenshot) command or automatically when a test fails, the [screenshots](https://docs.cypress.io/guides/references/configuration#Screenshots) are stored in the screenshotsFolder which is set to cypress/screenshots by default.

* `support` <-- 
  * `commands.js` <-- place for your custom Cypress commands.
  * `index.js` <-- is processed and loaded automatically before your test files
* `package_lock` <-– It stores an exact, versioned dependency tree rather than using starred versioning like package.json itself (e.g. 1.0.*). 
* `cypress.json` <-- place for your custom configuration. All options will overwrite deafult setting in the test runner app.
* `package.json` <--  this is the folder where NPM installs all the project dependencies. Cypress. json is used to store different configurations.


# Setuping test web-site

Current test framework is connected to the existing web app that you can install  on your local or host mashine.

Web app is available on GIT: https://github.com/james-muriithi/e-shop.git
For the launching web app you need to clone GIT and run the app by commands 
```sh
$ git clone https://github.com/james-muriithi/e-shop.git
$ npm install
$ npm start
```
and then open it using http://localhost:8000/


[CONTENT](#content)
# 5. Tips and hints
## 5.1 Jenkins instalation
1. Upload jenkins.war from https://www.jenkins.io/download/
2. Create 'work' (working directory) for Jenkins
3. Move jenkins.war to this folder
4. Execute next command
```
{full_path_to_the_jenkins.war}>java -jar jenkins.war -httpPort=9090
``` 
[How to setup 'Jenkins' -aticle 1](https://city-energy-analyst.readthedocs.io/en/latest/installing-the-jenkins.html)
[How to setup 'Jenkins'-aticle 2](https://www.jenkins.io/doc/book/installing/windows/)
[How to fix Win10 credential issue during instalation by MSI file](https://stackoverflow.com/questions/63410442/jenkins-installation-windows-10-service-logon-credentials)

## Cucumber usage

[Cucumber -Cypress instruction](https://github.com/TheBrainFamily/cypress-cucumber-example)
[What is Cucumber- web site](https://cucumber.io)
[Cucumber GIT (Main  option to use Cucumber)](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
[Cucumber js GIT (second option to use Cucumber)](https://github.com/cucumber/cucumber-js)
[Cucumber plagin for VS code](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

### Running Cucumber tagged tests
[Article about running tagged Cucumber tests](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#running-tagged-tests)

You can use tags to select which test should run using [cucumber's tag expressions](https://github.com/cucumber/cucumber/tree/master/tag-expressions). Keep in mind we are using newer syntax, eg. 'not @foo and (@bar or @zap)'. In order to initialize tests using tags you will have to run cypress and pass TAGS environment variable.

Example:
```
./node_modules/.bin/cypress-tags run -e TAGS='not @foo and (@bar or @zap)'
```
OR
```
npx/cypress-tags run -e TAGS='not @foo and (@bar or @zap)'
```

### Creating Cucumber JSON report and generating HTML reports from JSON
1. Creating Cucumber JSON report. Please read [article about Cucumber](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#output)

These files are intended to be used with one of the many available Cucumber report generator packages. 
Seems to work fine with both https://github.com/jenkinsci/cucumber-reports-plugin and https://github.com/wswebcreation/multiple-cucumber-html-reporter

2. Generating HTML reports from JSON. Please read 
[article about multiple cucumber html reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter)

## WebStorm (test runs)
Install plugin from 
```html
https://plugins.jetbrains.com/plugin/13819-cypress-support
```
or by command
```
npm i cypress-intellij-  reporter -D
```
and follow instruction.

## Run local tests specifying a single test file to run instead of all tests
```sh
cypress run --spec cypress/integration/app.spec.js
```
## Run local tests specifying a glob of where to look for test files
```sh
cypress run --spec cypress/integration/login/**/*
```
## Run local tests specifying multiple test files (by ',') to run
```sh
cypress run --spec cypress/integration/filter.spec.js,cypress/integration/users.spec.js
```
## Run local tests specifying multiple test files to run
```sh
cypress run --headless --b chrome --spec cypress\integration\examples\Platform\filter.spec.js,cypress/integration/users.spec.js
```

```sh
cy.it.only()  <--  will run only tests in the JS test file
e.g.
it.only('login', () => {
  cy.visit('/login', {timeout: 5000})
  logout()
  login('user', 'password')
})
```
## Runing in headless mode by specific browser
```sh
cypress run --headless --b chrome

```
## by specific browser
```sh
cypress run --b chrome
```

## Run all tests headlessly using the Electron browser.
```sh
cypress run
```
## Passing --headed will force Electron to be shown.
```sh
cypress run --headed

cypress run --config video=false
```
## Remote runing the test (Dashboard)
```sh
cypress run --record --key e01e9dac-4f4f-4306-8fd2-354eae09bec1
```

# Debuging Cypress tests
## If Cypress cannot find the browser you should turn on debugging for additional output.
```sh
DEBUG=cypress:launcher cypress run --browser chrome
```
## More DEBUG options:
```sh
DEBUG=cypress:cli cypress run
```
## or even a 3rd level deep submodule
```sh
DEBUG=cypress:server:project cypress run
DEBUG=cypress:server:scaffold cypress run
DEBUG=cypress:server:socket cypress run
DEBUG=cypress:server:bundle cypress run
```

##---------- Else
```sh
cypress run --config pageLoadTimeout=100000,watchForFileChanges=false

cypress run --env host=api.dev.local

cypress run --port 8080
```
# Reporting 
## Run tests specifying different reporters
Before using generated reports you nee to install report generator, e.g. Mochasome: 
```sh
npm install --save-dev mochawesome
```
How to use 'Mochasome' - [article](https://autom8able.com/blog/mocha-awesome)

and install Mocha as required part for using reporters
```sh
npm install --save-dev mocha
```
```sh
```

## Cypress reports by Mocha reporter 
For using Mocha reporters you can use next command:
```sh
cypress run --reporter json
```

## Cypress report (mochawesome reporter) by command:
```sh
cypress run --reporter mochawesome
```

# Run tests specifying mocha's reporter (default) options
```sh
cypress run --reporter-options mochaFile=result.xml,toConsole=true
```

# Recording video during test execution
```sh
cypress run --record --key 
```
Or
```sh
export CYPRESS_RECORD_KEY=abc-key-123
cypress run --record
```
# Storing screenshots in different folders by config file

[cypress-tests-in-multiple-enviroments](https://kevintuck.co.uk/how-to-run-your-cypress-tests-in-multiple-enviroments/)

[CONTENT](#content)
## 3. Web app for test

Current test automation framework was created for existing and working web-application that is available on GIT. 
[e-shop](https://github.com/james-muriithi/e-shop)

Owner: https://github.com/james-muriithi

### 3.1 How to install web app
```bash
$ git clone https://github.com/james-muriithi/e-shop.git
$ npm install
$ npm start
```
Then in your browser go to http://localhost:8000/

Licence
[0BSD](https://github.com/james-muriithi/e-shop/blob/master/LICENSE)

[CONTENT](#content)
## Main test framework 


[CONTENT](#content)
## 4. Good to know:
* Cypress projectId": "r7dgx9"
* Run this command now, or in CI
```sh
cypress run --record --key {your Key}
```

[CONTENT](#content)
## FIXES
* if you have some issues related to the 

Could you upgrade to latest version ($ npm cypress@latest ) and make sure below parameters in cypress.json

```
"modifyObstructiveCode": true,

"experimentalSourceRewriting":true,

"chromeWebSecurity": true,
```
and or check articles:

1. [modifyObstructiveCode](https://docs.cypress.io/guides/references/configuration.html#modifyObstructiveCode)

2. [Configuration](https://docs.cypress.io/guides/references/experiments.html#Configuration)

3. [Set-chromeWebSecurity-to-false](https://docs.cypress.io/guides/guides/web-security.html#Set-chromeWebSecurity-to-false)

