describe('signup', function() {
  it('user can successfully sign up', function() {
    cy.visit('/signup')

    cy.get('#first-name-input').type('D')
    cy.get('#last-name-input').type('T')
    cy.get('#dob-input').type('1991-01-01')
    cy.get('#ability-input').select('Beginner')
    cy.get('#postcode-input').type('se233ly')
    cy.get('#gender-input').select('Male')
    cy.get('#sport-input').select('Tennis')
    cy.get('#email-input').type('dom@dom.com')
    cy.get('#password-input').type('password')
    cy.get('#password-confirm-input').type('password')
  
    cy.get('.signup-button').click()
    cy.url().should('eq', 'http://localhost:3000/profile')
  })
})
