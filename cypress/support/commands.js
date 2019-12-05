Cypress.Commands.add("signup_response", () => {
  cy.route({
      method: 'POST',
      url: '/api/v1/players/new', 
      response: {
      "jwt_token": "iamatoken",
      "user_id": 10
  }       
  })
})

Cypress.Commands.add("signup", () => {
  cy.visit('/signup')
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
  cy.visit('/')

  cy.get('#email-input').type('test@test.com')
  cy.get('#password-input').type('password')
  cy.get('.login-button').click()
})
