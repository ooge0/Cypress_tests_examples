describe('Login actions using custom commands', function () {
    before(function () { // Here is an example of usage 'before' hook that allows to execute specific actions before ALL tests in the current file
        cy.SignIn()
    })

    it('Create a new post(example-1)', function () {
        cy.contains('New Article').click()
        cy.get('input[placeholder="Article Title"]').type('Loro ipsum')
        cy.get('input[placeholder="What\'s this article about?"]').type('Loro ipsum')
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
        })

    after(function(){
        cy.SingOut()
    })
})