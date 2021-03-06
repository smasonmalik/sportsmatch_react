describe("addResults", function() {
  beforeEach(function () {
      cy.route({
          method: 'GET',      // Route all POST requests
          url: '/api/v1/games/organiser',    // that have a URL that matches '/users/*'
          response: 'fixture:organiser_add_result'       // and force the response to be: []
      })
    })
  it('organiser can see add result button if no result', function() {
    cy.login()
    cy.visit('/results')
    cy.contains('Roger').should('be.visible');
    cy.contains('Sid').should('be.visible');
    cy.get('#add-result').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/results');
  })

  it('organiser can add result and see it on results page', function() {
    cy.login()
    cy.visit('/results')
    cy.get('#winner').select('Roger')
    cy.get('#add-result').click();
    cy.contains('You Won!').should('be.visible')
    cy.url().should('eq', 'http://localhost:3000/results');
  })
})
