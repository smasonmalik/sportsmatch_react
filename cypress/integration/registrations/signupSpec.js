describe('signup', function() {
  it('user can successfully sign up', function() {
    cy.server()           // enable response stubbing
    cy.route({
      method: 'POST',      // Route all POST requests
      url: '/api/v1/players/new',    // that have a URL that matches '/users/*'
      response: {
        "jwt_token": "iamatoken",
        "user_id": 10
    }        // and force the response to be: []
    })
    cy.signup()
    cy.url().should('eq', 'http://localhost:3000/profile')
  })
})
