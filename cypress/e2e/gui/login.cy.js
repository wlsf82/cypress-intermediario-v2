describe('Testa a página de login', () => {
  it('passes', () => {
    cy.login();
    cy.get('.gl-font-size-h1')
      .contains('Welcome to GitLab')
      .should('be.visible');

  })
})