describe('Login actions using custom commands', function () {
    beforeEach(function () {
        cy.SignIn()
    })

    it('Create a new post(example-2) with a custom function', function () {
        cy.CrateNewArticle('Loro ipsum') // Here is the same example of test as 'Create a new post(example-1)' with created custom Cypress command
    })

    it.only('Create a new post(example-2) and delete it', function () {
        cy.CreateNewArticle('Delete me') // Here is the same example of test as 'Create a new post(example-1)' with created custom Cypress command
        cy.DeleteExistingArticleByTitleName('Delete me') // Here is the custom Cypress command for deleting an article by its title
    })

    afterEach(function(){
        cy.SingOut()
    })
})