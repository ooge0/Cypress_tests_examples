describe('Create and mark-unmark as favorite', function () {

    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
       cy.SignIn()
       cy.get(':nth-child(3) > .nav-link').as('settings')
    })

    it('Simple test example with alias defined in the test body', function (){
        cy.get('.container > .nav > :nth-child(1) > .active').as('home') // This is an initialisation of cypress 'alias'
        cy.get('@home').should('contain', 'Home') // Basic assertion when we are checking the inner text
    })

    it.only('Simple test example with alias defined in \'before\' hook', function (){
        const label = cy.get('@settings').invoke('text')// This is an 'alias' usage that was defined in the before hook
        label.should('contain', 'Settings') // Basic assertion when we are checking the inner text
    })


    it('Create a post', function () {
        // cy.get('ul.navbar-nav').children().contains('New Article').click() <<  It was an original line that we will transform using aliase instance
        cy.get('ul.navbar-nav').children().as('menu') // This line allows us to create a new alias - 'menu'
        cy.get('@menu').contains('New Article').click() // Here we are referring to the element using alias and manipulate with it
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark-unmark as favorite', function () {
        cy.get('ul.navbar-nav').children().contains('New Article').click() 
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.btn-primary').first().then(($fav) => {
            return $fav.text()
        }).as('favCount') // The same for 2nd test. Here we create a new alias - 'favCount' that will replace a constant that we were using before
        cy.get('@favCount').then(($cnt) => { // and here are using alias 'favCount' for redtiving the data from the related element
            expect(parseInt($cnt)).to.eq(1)
        })
        cy.get('.btn-primary').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })
})