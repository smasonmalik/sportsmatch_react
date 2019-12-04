// describe("log in", function() {
//   it("can log a user in", function () {
//     cy.signup()
//     cy.login()
//     cy.url().should('eq', 'http://localhost:3000/home')
//   })

//   it("logged in user should not be able to go back to login page", function() {
//     cy.login()
//     cy.url().should('eq', 'http://localhost:3000/home')
//     cy.get('#login-link').click()
//     cy.url().should('eq', 'http://localhost:3000/home')
//   })
// })
