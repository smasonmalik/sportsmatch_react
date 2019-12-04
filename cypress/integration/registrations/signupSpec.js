describe('signup', function() {
  it('user can successfully sign up', function() {
    cy.visit('/signup')

    cy.get('#first-name-input').type('D')
    cy.get('#last-name-input').type('T')
    cy.get('#dob-input').type('1991-01-01')
    cy.get('#ability-input').select('Beginner')
    cy.get('#postcode-input').type('se233ly')
    cy.get('#gender-input').select('Male')
    cy.get('#sport-input').select('Tennis')
    cy.get('#email-input').type('dom@dom.com')
    cy.get('#password-input').type('password')
    cy.get('#password-confirm-input').type('password')
  
    cy.get('.signup-button').click()
    cy.contains('Profile Page').should('be.visible')  
    cy.url().should('eq', 'http://localhost:3000/profile')
  })

  it('user has to be 16 to signup', function() {
    cy.visit('/signup')

    cy.get('#first-name-input').type('D')
    cy.get('#last-name-input').type('T')
    cy.get('#dob-input').type('2012-01-01')
    // .then(() => {
    //   expect(stub.getCall(0)).to.be.calledWith('You must be at least 16 to register on SportsMatch')
    // })
    cy.get('#ability-input').select('Beginner')
    cy.get('#postcode-input').type('se233ly')
    cy.get('#gender-input').select('Male')
    cy.get('#sport-input').select('Tennis')
    cy.get('#email-input').type('dom@dom.com')
    cy.get('#password-input').type('password')
    cy.get('#password-confirm-input').type('password')
  
    cy.get('.signup-button').click()
    cy.contains('Profile Page').should('be.visible')  
    cy.url().should('eq', 'http://localhost:3000/signup')
  })

  it('user can\'t sign up if passwords don\'t match', function() {
    cy.visit('/signup')

    cy.get('#first-name-input').type('D')
    cy.get('#last-name-input').type('T')
    cy.get('#dob-input').type('1990-01-01')
    cy.get('#ability-input').select('Beginner')
    cy.get('#postcode-input').type('se233ly')
    cy.get('#gender-input').select('Male')
    cy.get('#sport-input').select('Tennis')
    cy.get('#email-input').type('dom@dom.com')
    cy.get('#password-input').type('password')
    cy.get('#password-confirm-input').type('123456')
    cy.get('.signup-button').click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Passwords don\'t match')
    })
    cy.contains('Signup').should('be.visible')  
    cy.url().should('eq', 'http://localhost:3000/signup')
  })
})