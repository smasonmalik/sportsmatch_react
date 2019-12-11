describe("Create a Game Request", function() {
  it("player request a game", function() {
    cy.login()
    cy.visit('/player/13')
    cy.get('#date-input').type('2020-12-12')
    cy.get('#time-input').type('14:00')
    cy.get('.request-button.btn').click()
    cy.url().should('eq', 'http://localhost:3000/profile')
  })

  it("game requests appear on logged in users profile", function() {
    cy.login()
    cy.visit('/profile')
    cy.contains('Requests Made').should('be.visible');
    cy.get('#requests-collapse').click()
    cy.contains('Opponent: Rafa').should('be.visible');
    cy.contains('Game Date: Tue 1st Jan 2019').should('be.visible');
    cy.contains('Game Time: 20:00').should('be.visible');
    cy.contains('Game Status: Pending').should('be.visible');
    cy.get('#confirm-game').should('be.visible');
    cy.get('#decline-game').should('be.visible');
    cy.get('#edit-game').should('be.visible');
    cy.get('a[href*="/game/1/messages/3/1"]').should('be.visible');
  })

  it("confirming game changes status to pending", function() {
    cy.login()
    cy.visit('/profile')
    cy.get('#requests-collapse').click()
    cy.get('#confirm-game').click()
    cy.contains('Game Status: Confirmed').should('be.visible');
  })

  it("declining game changes status to declined", function() {
    cy.login()
    cy.visit('/profile')
    cy.get('#requests-collapse').click()
    cy.get('#decline-game').click()
    cy.contains('Game Status: Declined').should('be.visible');
  })

  it("can edit a game", function() {
    cy.login()
    cy.visit('/profile')
    cy.get('#requests-collapse').click()
    cy.get('#edit-game').first().click()
    cy.get('#hide-form').should('be.visible');
    cy.get('#date-input').type('2025-01-01')
    cy.get('#time-input').type('20:00')
    cy.get('.edit-game-submit.btn').click()
    cy.contains('Game Date: Wed 1st Jan 2025').should('be.visible');
    cy.contains('Game Time: 20:00').should('be.visible');
  })
})
