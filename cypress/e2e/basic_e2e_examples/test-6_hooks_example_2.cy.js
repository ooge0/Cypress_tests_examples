describe('Login actions using custom commands', function () {
    this.beforeEach(function () {
        cy.SignIn()
    })

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
