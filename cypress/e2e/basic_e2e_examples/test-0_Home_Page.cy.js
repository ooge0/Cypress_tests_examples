describe('Home page tests', function() 
{
    it('Home page content loads ',function() {
    cy.visit("https://cirosantilli-realworld-next.herokuapp.com/")   // There is no usage of any parameters, just simple usage of string URL
    })

    it('Logo is visible on the Home page',function() { // Test for validation of logo visibility
        cy.get('.navbar-brand').should('be.visible')
        })
    
    it('Banner is visible on the Home page',function() { // Test for validation of bznner visibility
    cy.get('.banner').should('be.visible')
    })
})
