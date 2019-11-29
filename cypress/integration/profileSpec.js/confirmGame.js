describe("confirmGame", function() {
  it("player can confirm a game", function() {
    cy.login()

    cy.contains('View Profile').click()

    cy.get('#date-input').type('2019-12-12')
    cy.get('#time-input').type('14:00')
    cy.get('.request-button').click()

    cy.logout()

    cy.login_second_user()
    cy.get('#profile-link').click()

    cy.contains('Confirm Game').click()

    // finish off test here
  })
})
