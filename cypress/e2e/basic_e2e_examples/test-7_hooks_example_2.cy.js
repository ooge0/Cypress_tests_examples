describe('Login actions using custom commands', function () {
    beforeEach(function () { // Here is an example of usage 'beforeEach' hook that allows to execute some actions before each test
        cy.SignIn()
    })
    // Both tests are doing the same actions but after each test was executed 'SingOut' action.
    it('Create a new post(example-1)', function () {
        cy.contains('New Article').click()
        cy.get('input[placeholder="Article Title"]').type('Loro ipsum')
        cy.get('input[placeholder="What\'s this article about?"]').type('Loro ipsum')
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
        })

    it('Create a new post(example-2) with a custom function', function () {
        cy.CrateNewArticle()
    })

    afterEach(function(){
        cy.SingOut()
    })
})