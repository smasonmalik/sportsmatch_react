describe("confirmGame", function() {
  it("player can confirm a game", function() {
    cy.login()
    cy.visit('/player/13')
    cy.get('#date-input').type('2020-12-12')
    cy.get('#time-input').type('14:00')
    cy.get('.request-button.btn').click()
    cy.url().should('eq', '/profile')
    // cy.login_second_user()
    // cy.get('#profile-link').click()
    //
    // cy.contains('Confirm Game').click()
    //
    // // finish off test here
  })
})
