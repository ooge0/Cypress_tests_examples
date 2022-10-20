const user_prefix_name = 'test012345'
describe('Simple tests with \'Then\' Cypress command', function () {
    it('Delete all post with where title has specific text', function () {
        cy.SignIn()
        const message_text_that_will_be_deleted = 'Loro ipsum'
        const popup_promt_text = 'Do you really want to delete it?'
        // const text = 'Delete me'
        cy.get('.nav-link').contains(user_prefix_name).click()
        cy.contains('My Posts').should('be.visible')
        cy.get('.nav-link').contains(user_prefix_name).click() // opening the user profile page
        cy.contains('Favorited Posts').click()
        cy.get('.preview-link > h1')
            .should('have.length.greaterThan', 1)
            // now that we know the elements have loaded, get the number
            .its('length')
            .then(n => {
                // use n if you need to  
                cy.contains('My Posts').click()
                cy.get('.preview-link > h1', { timeout: 10000 }).should('be.visible').contains(message_text_that_will_be_deleted).click().wait(1000)
                cy.get('.btn-outline-danger').first().click()// click on the delete button that appears on the single post view
                cy.get('.nav-link').contains(user_prefix_name).click().wait(2000)
                cy.get('.preview-link > h1').contains(message_text_that_will_be_deleted).click()
                cy.get('.btn-outline-danger').first().click()
                // after click on 'delete article' button, a native browser popup appears and you need to confirm the action
                cy.on('window:confirm', (text) => { // here is a promt text validation
                    expect(text).to.contains(popup_promt_text);
                });
                cy.on("window:confirm", (s) => {
                    return true;
                });
                cy.reload()
            })
        cy.contains(message_text_that_will_be_deleted).should('have.length.greaterThan', 0)
    })

})
