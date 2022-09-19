const user_prefix = 'test012345' // Here is a prefix that can help to unify an user credentials
describe('Login actions', function () {
    it('Sign up using non-existing user credentials', function () {
        //Sing in steps
        cy.visit("https://cirosantilli-realworld-next.herokuapp.com/")
        let user_prefix = 'test012345'
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('input[type="text"]').type(user_prefix)
        cy.get('input[type="email"]').type(user_prefix + '@gmail.com')
        cy.get('input[type="password"]').type(user_prefix)
        cy.get('.btn').contains('Sign up').click()
      })
    
    it('Sign in (Example-1)', function () {
        cy.visit("https://cirosantilli-realworld-next.herokuapp.com/")
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('input[type="email"]').type(user_prefix + '@gmail.com')
        cy.get('input[type="password"]').type(user_prefix)
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.get('.article-preview').then(($t) => {
            const txt = $t.text()
            // $t is the object that the previous command yielded
            expect(txt).to.equal('No articles are here... yet.')
        })
    })
    
    it('Sign in using existing user credentials (Example-2,inique element identification)', function () {
        cy.visit("https://cirosantilli-realworld-next.herokuapp.com/")
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('form').within(($form)=>{
            cy.get('input[type="email"]').type(user_prefix + '@gmail.com')
            cy.get('input[type="password"]').type(user_prefix)
            cy.root().submit() // Here is an option to execute submission because Submit button has type=submit.
        })
        cy.get('.article-preview').then(($t) => {
            const txt = $t.text()
            // $t is the object that the previous command yielded
            expect(txt).to.equal('No articles are here... yet.')
        })
          //Sing out steps
          cy.get('.nav-link').contains(user_prefix).click()
          cy.get('a').contains(' Edit Profile Settings').click()
          cy.get('.btn-outline-danger').click()
          cy.get('a').contains('Sign in').should('be.visible')
    })
    
})
