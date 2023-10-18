import { faker } from '@faker-js/faker'; //Faker is for generating large amounts of fake (but realistic) data for testing and development.

const options = { env: { snapshotOnly: true } };

//Testing the project creation functionality
describe('Create Project', options, () => {
  beforeEach(() => {
    cy.api_deleteProjects(); //Delete old projects (trash)
    cy.login(); //login on GitLab
  });

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`, //data obtained from faker library for create Project Name
      description: faker.random.words(5), //data obtained from faker library for create Project Description
    };

    cy.gui_createProject(project); //Actions

    //Results
    cy.url().should(
      'be.equal',
      `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`
    );
    cy.contains(project.name).should('be.visible');
    //cy.contains(project.description).should('be.visible');
  });
});
