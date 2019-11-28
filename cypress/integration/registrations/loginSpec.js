describe("log in", function() {
  it("can log a user in", function () {
    cy.visit('localhost:3000/login')

    cy.get('#email-input').type('mj@test.com')
    cy.get('#password-input').type('password')
    cy.get('.login-button').click()

    cy.url().should('eq', 'http://localhost:3000/home')

  })
})
