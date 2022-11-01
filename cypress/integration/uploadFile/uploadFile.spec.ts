describe('Upload file', () => {
    it( 'upload file valid data', () =>{
      const filePath: string = 'upload1.png'
      cy.visit('https://the-internet.herokuapp.com/upload')
      cy.get('#file-upload').attachFile(filePath)
      cy.get( '#file-submit' ).click()
      cy.get('#uploaded-files').contains(filePath)
      // cy.get('#uploaded-files').should('be.visible')
  })
})
