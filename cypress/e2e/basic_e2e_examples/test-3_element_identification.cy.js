const user_prefix = 'test012345'
describe('Home page tests(Desktop)', function () {
    it('Create a new post(example-1)', function () {
        cy.visit("https://cirosantilli-realworld-next.herokuapp.com/")   // There is no usage of any parameters, just simple usage of string URL
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('input[type="email"]').type(user_prefix + '@gmail.com')
        cy.get('input[type="password"]').type(user_prefix)
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('New Article').click()
        cy.get('input[placeholder="Article Title"]').type('Loro ipsum')
        cy.get('input[placeholder="What\'s this article about?"]').type('Loro ipsum')
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
        })

    it('Like - unlike a new post', function () {
        cy.get('.nav-link').contains(user_prefix).click()
        cy.contains('My Posts').should('be.visible')
        cy.get('.ion-heart').first().click() // mark article as favorite
        cy.contains('Favorited Posts').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').first().click() // mark article as favorite
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        })
})
