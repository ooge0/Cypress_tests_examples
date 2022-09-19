describe('Home page tests(Desktop)', function() 
{
    it('Home page content loads(test with a Cypress variables) ',function() {
        cy.visit("https://cirosantilli-realworld-next.herokuapp.com/")   // There is no usage of any parameters, just simple usage of string URL
    })

    it('Logo is visible on the Home page',function() {
        cy.get('.navbar-brand').should('be.visible')
        })

    it('Header bar has 3 menu items on the Home page',function() {
        cy.get('ul.navbar-nav').children().should('have.length', 3) // simple assertion that header has specific amount of items
        })

    it('Header bar has specific menu items when user logged out ',function() { // this test expect that user will be logged in on the platform        c
        const original_header_bar_item_labels = [ 'Home', 'Sign in', 'Sign up' ]
        const first_header_bar_item = cy.get('.nav > :nth-child(1) > .active')
        const second_header_bar_item = cy.get('.nav > :nth-child(2)')
        const third_header_bar_item = cy.get('.nav > :nth-child(3)')
        const header_bar_item_labels = [] 
        header_bar_item_labels.push(third_header_bar_item.invoke('text'), second_header_bar_item.invoke('text'), first_header_bar_item.invoke('text'))
        header_bar_item_labels[0].should('eq', original_header_bar_item_labels[0])
        })
        
    it('Footer has 2 itmes on the Home page',function() {
        cy.get('footer > .container').children().should('have.length', 2)
        })
    
    it('Footer has platform logo on the Home page',function() {
        cy.get('footer > .container > .logo-font').should('be.visible')
    })
    
    it('Footer has exact trademark text on the Home page',function() {
        cy.get('.attribution')
            .should('be.visible')
            .should('have.text', ' © 2021. An interactive learning project from Thinkster. Code licensed under MIT.')
    })

})
