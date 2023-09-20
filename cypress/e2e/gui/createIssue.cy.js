import { faker } from '@faker-js/faker'; //For random titles

const options = { env: { snapshotOnly: true } };
//Test Case for Create Issue
describe('Create Issue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`, //issue-random id
    description: faker.random.words(3), // 3 random words
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
    },
  };

  beforeEach(() => {
    //Conditions
    cy.api_deleteProjects(); //Delete old projects (trash)
    cy.login(); //Need to be loging
    cy.api_createProject(issue.project); //Need a project created (API)
  });

  //Create an Issue with sucess
  it('successfully', () => {
    cy.gui_createIssue(issue);

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description);
  });
});
