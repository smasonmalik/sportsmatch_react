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
    cy.contains('Roger VS. Sid').should('be.visible');
    cy.get('.btn custom-button').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/results');
  })

  // it('organiser can add result and see it on results page', function() {
  //   cy.login()
  //   cy.visit('/results')
  //   cy.get('.btn custom-button').click();
  //   cy.visit('/results/2/new')
  //   cy.get('#winner').type('Roger')
  //   cy.get('.btn custom-button mt-3').click();
  //   cy.contains('Winner: Roger').should('be.visible')
  //   cy.url().should('eq', 'http://localhost:3000/results');
  // })
})
