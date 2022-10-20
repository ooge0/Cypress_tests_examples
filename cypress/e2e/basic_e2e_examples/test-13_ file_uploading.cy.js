describe('File uploading examples', function () {

    it('Simple test example with alias defined in the test body', function () {
        // This example is showing code example for file uploading on the web site
        const file_name = "cypress/fixtures/files/test_PDF.pdf"
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.fixture(file_name).then(content =>{
            cy.get('[type="file"]').attachFile(file_name);
        })
        cy.get('[type=submit]').click()
        cy.contains("File Uploaded!")
    })

    it('File Upload using selectFile with drag and drop mode', () => {
        cy.visit('https://postimages.org/')
        cy.get('#uploadFile').selectFile('cypress/fixtures/files/evening.png', { action: 'drag-drop' })
        cy.get('.filename').should('have.text', 'evening.png')
      })

    it('Multiple file upload using selectFile', () => {
        cy.visit('https://postimages.org/')
        cy.get('#uploadFile').selectFile(
          [
            'cypress/fixtures/images/morning.png',
            'cypress/fixtures/images/evening.png',
            'cypress/fixtures/images/night.png',
          ],
          {action: 'drag-drop'}
        )
        cy.get('.controls > h2', {timeout: 9000}).should(
          'have.text',
          'Upload completed!'
        )
        cy.get('.imagetitle').eq(0).should('have.text', 'evening')
        cy.get('.imagetitle').eq(1).should('have.text', 'morning')
        cy.get('.imagetitle').eq(2).should('have.text', 'night')
      })

})