import { LoginPage } from '../../pages/loginPage'
import listData from '../../fixtures/dataLogin.json'

var loginPage = new LoginPage()

describe('login test', () => {
  it('login valid data', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa-sign-in').click()
    cy.contains('You logged into a secure area!')
    cy.get('#flash').contains('You logged into a secure area!')
  })
  it('login using POM', () => {
    loginPage.goToLogin()
    loginPage.enterUsername('tomsmith')
    loginPage.enterPassword('SuperSecretPassword!')
    loginPage.clickLogin()
    loginPage.verifyLogin('You logged into a secure area!')
  })

  listData.forEach((dataJson) => {
    it('Login DDT ' + dataJson.case, () => {
      loginPage.goToLogin()
      if (dataJson.username != '') loginPage.enterUsername(dataJson.username)
      if (dataJson.password != '') loginPage.enterPassword(dataJson.password)
      loginPage.clickLogin()
      loginPage.verifyLogin(dataJson.verify)
    })
  })
})
