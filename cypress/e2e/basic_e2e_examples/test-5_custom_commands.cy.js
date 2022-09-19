describe('Login actions using custom commands', function () {
    it('Sign in using existing user credentials(inique element identification)', function () { // Here is a usage of custom user command that was created and stored in the 'commands.js' file
        cy.SignIn()
    })
})
