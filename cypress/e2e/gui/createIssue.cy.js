import { faker } from '@faker-js/faker'

describe('Testa a criação de uma nova issue', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.login();
  });

  it('cria uma nova issue', () => {
    const issue = {
      name: `issue-${ faker.datatype.uuid() }`
    }
    cy.gui_createIssue(issue);
    cy.get('.gl-button-text').contains('Close issue').should('be.visible');

  });
});