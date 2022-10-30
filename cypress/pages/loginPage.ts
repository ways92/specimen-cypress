export class LoginPage {
  fieldUsername = '#username'
  fieldPassword = '#password'
  buttonLogin = '.fa-sign-in'
  messageLogin = '#flash'

  goToLogin() {
    cy.visit('https://the-internet.herokuapp.com/login')
  }

  enterUsername(username: string) {
    cy.get(this.fieldUsername).type(username)
  }

  enterPassword(pass: string) {
    cy.get(this.fieldPassword).type(pass)
  }

  clickLogin() {
    cy.get(this.buttonLogin).click()
  }

  verifyLogin(text: string) {
    cy.get(this.messageLogin).contains(text)
  }
}
