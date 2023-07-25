Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(user)
    cy.get("[data-qa-selector='password_field']").type(password, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()
  }

  const validate = () => {
    cy.visit('/')
    cy.location('pathname', { timeout: 1000 })
      .should('not.equal', '/users/sign_in')
  }
  
  const options = {
    cacheAcrossSpecs: true,
    validate,
  }

  if (cacheSession) {
    cy.session(user, login, options)
  } else {
    login()
  }
})

Cypress.Commands.add('logout', () => {
  cy.get('[data-qa-selector="user_menu"]').click();
  cy.contains('Sign out').click();
});

Cypress.Commands.add('gui_createProject', project => {
  cy.visit('projects/new#blank_project');

  cy.get('#project_name').type(project.name);
  cy.get('#__BVID__177__BV_toggle_').click();
  cy.get('.gl-dropdown-inner').contains('root').click();
  cy.get('.custom-control-input').first().check();
  cy.contains('Create project').click();
})

Cypress.Commands.add('gui_createIssue', issue => {
  cy.visit('root/project-022039dd-da1a-4e18-97f5-5a5216f4c94e');
  cy.get('a').contains('Issues').should('be.visible').click();
  cy.get('.gl-button-text').contains('New issue').should('be.visible').click();
  cy.get('#issue_title').should('be.visible').type(issue.name);
  cy.get('.gl-button-text').contains('Create issue').should('be.visible').click();
});