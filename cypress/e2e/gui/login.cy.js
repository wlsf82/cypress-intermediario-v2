describe('Testa as funcionalidades de login e logout', () => {
  it('é possível logar com sucesso', () => {
    const user = Cypress.env('user_name');
    const password = Cypress.env('user_password');
    const options = { cacheSession: false };

    cy.login(user, password, options);
    
    cy.get('.page-title')
      .contains('Projects')
      .should('be.visible');
  });
})