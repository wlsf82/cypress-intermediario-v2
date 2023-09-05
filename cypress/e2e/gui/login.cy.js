//Test Case
describe('Login', () => {
  //Function - Succesfull Login
  it('successfully', () => {
    cy.login();//personalized command

    cy.get('.qa-user-avatar').should('be.visible');
  });
}); //End describe
