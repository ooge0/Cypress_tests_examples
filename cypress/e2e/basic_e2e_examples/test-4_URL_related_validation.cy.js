describe('Home page tests(Desktop)', function () {
    it('Host validation', function () {
        cy.visit("https://cirosantilli-realworld-next.herokuapp.com/")   // There is no usage of any parameters, just simple usage of string URL
        cy.title().should('eq', 'Conduit')
    })

    it('Hostname validation', function () {
        cy.location('hostname').should('eq', 'cirosantilli-realworld-next.herokuapp.com')
    })

    it('Origin validation', function () {
        cy.location('origin').should('eq', Cypress.env('baseUrl'))
    })

    it('Pathname validation', function () {
        cy.location('pathname').should('eq', '/')
    })

    it('Port validation', function () {
        cy.location('port').should('eq', '')

    })

    it('HREF validation', function () {
        cy.location('href').should('eq', Cypress.env('baseUrl')+'/')
    })

    it('Protocol validation', function () {
        cy.location('protocol').should('eq', 'https:')
    })

    it('Search prefix validation', function () {
        cy.location('search').should('eq', '')
    })

    it('Title page - toString validation', function () {
        cy.location().should((loc) => {
            expect(loc.toString()).to.eq(Cypress.env('baseUrl')+'/')
          })

    })
})
