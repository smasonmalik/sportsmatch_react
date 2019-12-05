describe("viewProfile", function() {
  it('player can view their own profile page', function() {
    cy.login()
    cy.get('#profile-link').click()
    cy.contains('Roger').should('be.visible');
    cy.contains('Advanced').should('be.visible');
    cy.contains('Swiss Alps').should('be.visible');
  })

  it('unlogged in user cannot see profile page', function() {
    cy.get('#profile-link').click()
    cy.contains('Roger').should('not.exist');
    cy.contains('Advanced').should('not.exist');
    cy.contains('Swisss Alps').should('not.exist');
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
