import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I navigate to login page', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
})

When('I enter username', () => {
  cy.get('#username').type('tomsmith')
})

And('I enter password', () => {
  cy.get('#password').type('SuperSecretPassword!')
})

And('I click login button', () => {
  cy.get('.fa-sign-in').click()
})

Then('I verify login', () => {
    cy.get('#flash').contains('You logged into a secure area!')
})
