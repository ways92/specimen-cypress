describe( 'Download file', () =>
{
    it( 'Download file valid use plugin', () => {
        let urlDownlod :string = 'https://the-internet.herokuapp.com/download/some-file.txt'
        let dirDownlod :string = 'cypress/downloads'
        let nameDownlod :string = 'demoDownload.txt'
        cy.downloadFile(urlDownlod, dirDownlod,nameDownlod)
        cy.verifyDownload(nameDownlod)
    });
});