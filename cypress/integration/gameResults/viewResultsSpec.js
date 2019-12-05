describe("viewResults", function() {
  it('organiser can see results of a game', function() {
    cy.login()
    cy.visit('/results')
    cy.contains('Roger VS. Duncan').should('be.visible');
    cy.contains('Winner: Roger').should('be.visible');
    cy.contains('Loser: Duncan').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/results')
  })

  it('opponent can see results of a game', function() {
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

  it('organiser can see add result button if no result', function() {
    cy.login()
    cy.visit('/results')
    cy.contains('Roger VS. Duncan').should('be.visible');
    cy.get('.btn custom-button').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/results');
  })

  it('organiser can add result and see it on results page', function() {
    cy.login()
    cy.visit('/results')
    cy.get('.btn custom-button').click();
    cy.visit('/results/1/new')
    cy.get('#winner').type('Roger')
    cy.get('.btn custom-button mt-3').click();
    cy.contains('Winner: Roger').should('be.visible')
    cy.url().should('eq', 'http://localhost:3000/results');
  })
})
