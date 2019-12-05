describe("viewResults", function() {
  it('organiser can see results of a game', function() {
    cy.login()
    cy.visit('/results')
    cy.contains('Winner: Roger').should('be.visible');
    cy.contains('Loser: Duncan').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/results')
  })
})
