describe('Logout', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('/')
    })
  
    it('successfully', () => {
      cy.logout()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })