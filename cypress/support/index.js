// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// import './response'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(function () {
    cy.server()  
    cy.route({
        method: 'POST',      // Route all POST requests
        url: '/api/v1/players/new',    // that have a URL that matches '/users/*'
        response: 'fixtures:login_signup'       // and force the response to be: []
    })
    cy.route({
        method: 'GET',      // Route all GET requests
        url: '/api/v1/players/NaN',    // that have a URL that matches '/users/*'
        response: 'fixtures:current_player'      // and force the response to be: []
    })
  })
