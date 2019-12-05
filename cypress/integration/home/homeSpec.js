describe("home", function() {
    it("user can see list of players", function() {
      cy.login()
      cy.url().should('eq', 'http://localhost:3000/')
      cy.contains('Vijay').should('be.visible');
      cy.contains('Pam').should('be.visible');
      cy.get('.login-button').should('not.exist');
    })
  })
  