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
    cy.contains('Opponent: Rafa').should('be.visible');
    cy.contains('Game Date: 2019-01-01').should('be.visible');
    cy.contains('Game Time: 20:00:00').should('be.visible');
    cy.contains('Game Status: Pending').should('be.visible');
    cy.get('.confirm-game.btn').should('be.visible');
    cy.get('.decline-game.btn').should('be.visible');
    cy.get('.edit-game.btn').should('be.visible');
    cy.get('a[href*="/game/1/messages/3/1"]').should('be.visible');
  })

  it("confirming game changes status to pending", function() {
    cy.login()
    cy.visit('/profile')
    cy.get('.confirm-game.btn').click()
    cy.contains('Game Status: Confirmed').should('be.visible');
  })

  it("declining game changes status to declined", function() {
    cy.login()
    cy.visit('/profile')
    cy.get('.decline-game.btn').click()
    cy.contains('Game Status: Declined').should('be.visible');
  })

  it("can edit a game", function() {
    cy.login()
    cy.visit('/profile')
    cy.get('.edit-game.btn').first().click()
    cy.get('.hide-form.btn').should('be.visible');
    cy.get('#date-input').type('2021-12-12')
    cy.get('#time-input').type('15:00')
    cy.get('.edit-game-submit.btn').click()
  })
})
