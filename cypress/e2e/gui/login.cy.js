describe('Testa a página de login', () => {
  it('passes', () => {
    cy.login();
    cy.get('h2.gl-font-size-h1[data-qa-selector="welcome_title_content"]')
      .should('be.visible');

  })
})