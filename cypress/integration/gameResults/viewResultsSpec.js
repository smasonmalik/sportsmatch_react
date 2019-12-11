describe("viewResults", function() {
  it('organiser can see result of a game', function() {
    cy.login()
    cy.visit('/results')
    cy.contains('Roger').should('be.visible');
    cy.contains('Duncan').should('be.visible');
    cy.contains('You Won!').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/results')
  })

  it('opponent can see result of a game', function() {
    cy.login()
    cy.visit('/results')
    cy.contains('Duncan').should('be.visible');
    cy.contains('Roger').should('be.visible');
    cy.contains('You Lost!').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/results')
  })

  it('player cannot see results if not logged in', function() {
    cy.visit('/results')
    cy.contains('Duncan').should('not.exist');
    cy.contains('Roger').should('not.exist');
    cy.contains('You Lost!').should('not.exist');
  })
})
