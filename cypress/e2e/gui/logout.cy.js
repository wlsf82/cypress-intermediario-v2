describe('Logout', () => {
  beforeEach(() => {
    cy.sessionLogin()
    cy.visit('/')
  })

  it('successfully', () => {
    cy.logout()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
  })
})
