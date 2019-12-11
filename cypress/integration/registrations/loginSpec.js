describe("log in", function() {
  it("can log a user in", function () {
    cy.visit('/');
    cy.get('#email-input').type('dom@dom.com');
    cy.get('#password-input').type('password');
    cy.get('#login-button').click();
    cy.contains('Filter your search results:').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it("logged in user should not be able to visit signup page", function() {
    cy.login();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.visit('/signup');
    cy.url().should('eq', 'http://localhost:3000/profile');
    cy.get('.signup-button').should('not.exist');
  })
})
