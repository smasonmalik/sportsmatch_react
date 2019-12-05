describe("log in", function() {
  it("can log a user in", function () {
    cy.visit('/');
    cy.get('#email-input').type('dom@dom.com');
    cy.get('#password-input').type('password');
    cy.get('.login-button').click();
    cy.contains('Filter By').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it("logged in user should not be able to visit signup page", function() {
    cy.login();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.visit('/signup');
    cy.url().should('eq', 'http://localhost:3000/profile');
    cy.get('.signup-button').should('not.exist');
  })

//   it("user cannot log in with incorrect password", function() {
//       cy.route({
//           method: 'POST',      // Route all POST requests
//           url: '/api/v1/players/login',    // that have a URL that matches '/users/*'
//           response: 'fixtures:login_signup', 
//        error: 2
//       })
 
//     cy.visit('/');
//     cy.get('#email-input').type('dom@dom.com');
//     cy.get('#password-input').type('incorrect');
//     cy.get('.login-button').click();
//     cy.url().should('eq', 'http://localhost:3000/');
//     cy.get('.login-button').should('exist');
//   })
})
