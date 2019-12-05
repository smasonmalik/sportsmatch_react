describe("logout", function() {
  it("successfully logs user out", function() {
    cy.login()
    cy.get('#logout-link').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.login-button').should('exist');
  })
})
