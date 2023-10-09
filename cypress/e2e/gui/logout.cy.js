describe('Logout', () => {

    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })
    it('Logout com sucesso', () => {
        cy.logout()

        cy.get('[data-qa-selector="sign_in_tab"]').should('be.visible')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})