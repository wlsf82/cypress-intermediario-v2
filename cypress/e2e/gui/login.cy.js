describe('Testa as funcionalidades de login e logout', () => {
  it('é possível logar com sucesso', () => {
    cy.login();
    cy.get('.gl-font-size-h1')
      .contains('Welcome to GitLab')
      .should('be.visible');
  });

  it.only('é possível deslogar com sucesso', () => {
    cy.viewport(1920, 1080)
    cy.login();
    cy.get('[data-qa-selector="user_menu"]')
      .should('be.visible')
      .click();
    cy.get('[data-qa-selector="sign_out_link"]')
      .should('be.visible')
      .click();
    cy.get('[data-qa-selector="sign_in_button"]')
      .should('be.visible');
  });
})