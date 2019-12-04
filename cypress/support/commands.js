// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("signup", () => {
  cy.visit('localhost:3000/signup')
  cy.get('#first-name-input').type('test')
  cy.get('#last-name-input').type('test')
  cy.get('#dob-input').type('1990-01-01')
  cy.get('#ability-input').select('Beginner')
  cy.get('#gender-input').select('Male')
  cy.get('#sport-input').select('Tennis')
  cy.get('#email-input').type('test@test.com')
  cy.get('#password-input').type('password')
  cy.get('#password-confirm-input').type('password')

  cy.get('.signup-button').click()
})

Cypress.Commands.add("login", () => {
  cy.visit('localhost:3000/login')

  cy.get('#email-input').type('test@test.com')
  cy.get('#password-input').type('password')
  cy.get('.login-button').click()
})
