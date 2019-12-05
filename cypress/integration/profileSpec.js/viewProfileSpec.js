describe("viewProfile", function() {
  it('player can view their own profile page', function() {
    cy.login()
    cy.get('#profile-link')
    cy.contains('Roger').should('be.visible');
    cy.contains('Advanced').should('be.visible');
    cy.contains('Swisss alps').should('be.visible');
  })

  it('unlogged in user cannot see profile page', function() {
    cy.visit('http://localhost:3000/login')
    cy.get('#profile-link')
    cy.url().should('eq', 'http://localhost:3000/login')
  })
})
