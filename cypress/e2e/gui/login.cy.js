describe('Testa as funcionalidades de login e logout', () => {
  it('é possível logar com sucesso', () => {
    cy.login();
    cy.get('.gl-font-size-h1')
      .contains('Welcome to GitLab')
      .should('be.visible');
  });

  it('é possível deslogar com sucesso', () => {
    cy.viewport(1920, 1080)
    cy.login();
    cy.logout();

    cy.get('[data-qa-selector="sign_in_button"]')
    .should('be.visible');

    // outra maneira de verificar se houve logout é por meio da url.

    cy.url()
      .should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
  });
})