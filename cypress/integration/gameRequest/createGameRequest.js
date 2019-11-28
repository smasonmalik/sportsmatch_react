describe("log in", function() {
  it("can log a user in", function () {
    cy.visit('localhost:3000/login')

    cy.get('#email-input').type('mj@test.com')
    cy.get('#password-input').type('password')
    cy.get('.login-button').click()

    cy.visit('localhost:3000/players/13')


    cy.get('#time-input').type('14:00')
    cy.get('#date-input').type('12/12/2019')
    cy.get('.request-button').click()

    cy.url().should('eq', 'http://localhost:3000/profile')



  })
})
