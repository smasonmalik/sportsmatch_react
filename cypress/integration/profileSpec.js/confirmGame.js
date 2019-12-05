describe("confirmGame", function() {
  it("player can confirm a game", function() {
    cy.login()
    cy.visit('/player/13')
    cy.get('#date-input').type('2020-12-12')
    cy.get('#time-input').type('14:00')
    cy.get('.request-button.btn').click()
    cy.url().should('eq', 'http://localhost:3000/profile')
    cy.contains('Requests Made').should('be.visible');
    cy.contains('Challenges Received').should('be.visible');
    cy.contains('Opponent: Rafa').should('be.visible');
    cy.contains('Game Date: 2019-01-01').should('be.visible');
    cy.contains('Game Time: 20:00:00').should('be.visible');
    cy.contains('Game Status: Pending').should('be.visible');
    cy.get('.confirm-game.btn').should('be.visible')
    cy.get('.decline-game.btn').should('be.visible')
    cy.get('.edit-game.btn').should('be.visible')
    cy.get('a[href*="/game/1/messages/3/1"]').should('be.visible')
  })
})
