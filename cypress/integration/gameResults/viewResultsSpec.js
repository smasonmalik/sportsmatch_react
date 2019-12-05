describe("viewResults", function() {
  it('organiser can see result of a game', function() {
    cy.login()
    cy.visit('/results')
    cy.contains('Roger VS. Duncan').should('be.visible');
    cy.contains('Winner: Roger').should('be.visible');
    cy.contains('Loser: Duncan').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/results')
  })

  it('opponent can see result of a game', function() {
    cy.login()
    cy.visit('/results')
    cy.contains('Duncan VS. Roger').should('be.visible');
    cy.contains('Winner: Duncan').should('be.visible');
    cy.contains('Loser: Roger').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/results')
  })

  it('player cannot see results if not logged in', function() {
    cy.visit('/results')
    cy.contains('Duncan VS. Roger').should('not.exist');
    cy.contains('Winner: Duncan').should('not.exist');
    cy.contains('Loser: Roger').should('not.exist');
  })
})
