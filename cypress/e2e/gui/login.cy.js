describe('Testa as funcionalidades de login e logout', () => {
  it('é possível logar com sucesso', () => {
    cy.login();
    cy.get('.gl-font-size-h1')
      .contains('Welcome to GitLab')
      .should('be.visible');
  });
})