//Test Case for Logout on GitLab application
describe('Logout', () => {
  //First condition - Need to be logged on platform.
  beforeEach(() => {
    cy.login();
    cy.visit('/');
  });
  it('Successfully', () => {
    cy.logout();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`);
  });
});
