describe("playerProfile", function() {
    it('player can see another users profile page', function() {
        cy.login()
        cy.visit('/player/13')
        cy.contains('Rafa').should('be.visible');
        cy.contains('Advanced').should('be.visible');
        cy.contains('Spain').should('be.visible');
      })
})
