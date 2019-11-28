describe("viewProfile", function() {
  it('player can view their own profile page', function() {
    cy.login()
    cy.get('#profile-link').click()
    cy.url().should('eq', 'http://localhost:3000/profile/1')
  })
})
