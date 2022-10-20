describe('Login actions using custom commands', function () {
    const user_prefix_name = 'test012345'
    before(function () {
        cy.SignIn()
    })
    
    it('Create a new post(example-1)', function () {
        cy.contains('New Article').click()
        cy.get('input[placeholder="Article Title"]').type('Loro ipsum')
        cy.get('input[placeholder="What\'s this article about?"]').type('Loro ipsum')
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
    })
    
    it('Like - unlike a new post', function () {
        cy.get('.nav-link').contains(user_prefix_name).click()
        cy.contains('My Posts').should('be.visible')
        cy.get('.ion-heart').first().click() // mark article as favorite
        cy.contains('Favorited Posts').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').first()
            .then(($fav)=>{ // Here is a usage of 'then' command.
                const favCount = $fav.text()
                expect(parseInt(favCount)).to.eq(1)
            }).click() // mark article as favorite
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        })
    
})
