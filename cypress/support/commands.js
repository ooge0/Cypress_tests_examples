import 'cypress-file-upload';
const user_prefix = 'test012345' // here is a prefix that can help to unify a user credentials
Cypress.Commands.add("SignIn", () =>{
     // before of implementing custom commands request for redirecting to the home page was doing by cy.visit("https://cirosantilli-realworld-next.herokuapp.com/")   // There is no usage of any parameters, just simple usage of string URL
    cy.visit(Cypress.env('baseUrl')) //now 'baseUrl' was extracting from the cypress.config.js file
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('input[type="email"]').type(user_prefix + '@gmail.com')
    cy.get('input[type="password"]').type(user_prefix)
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    cy.get('.article-preview').then(($t) => {
        const txt = $t.text()
        // $t is the object that the previous command yielded
        expect(txt).to.equal('No articles are here... yet.')
    })
})

Cypress.Commands.add("SingOut", () =>{
    cy.get('.nav-link').contains(user_prefix).click() // opening the user profile page
    cy.get('a').contains(' Edit Profile Settings').click()
    cy.get('.btn-outline-danger').click()
    cy.get('a').contains('Sign in').should('be.visible')
})

Cypress.Commands.add("CreateNewArticle", (text) =>{
        cy.contains('New Article').click()
        cy.get('input[placeholder="Article Title"]').type(text)
        cy.get('input[placeholder="What\'s this article about?"]').type(text)
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
})

Cypress.Commands.add("DeleteExistingArticleByTitleName", (text) =>{
        cy.get('.nav-link').contains(user_prefix).click() // opening the user profile page
        cy.contains(text).click() //opening the article by title as a 'text'
        cy.get('.btn-outline-danger').first().click()
        cy.contains('No articles are here... yet.').should('be.visible')
})

