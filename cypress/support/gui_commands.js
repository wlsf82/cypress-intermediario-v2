//For commands customized - Login
Cypress.Commands.add(
  'login',
  (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {}
  ) => {
    const login = () => {
      cy.visit('/users/sign_in');
      cy.get("[data-qa-selector='login_field']").type(user);
      cy.get("[data-qa-selector='password_field']").type(password, {
        log: false,
      });
      cy.get("[data-qa-selector='sign_in_button']").click();
    };

    const validate = () => {
      cy.visit('/');
      cy.location('pathname', { timeout: 1000 }).should(
        'not.eq',
        '/users/sign_in'
      );
    };

    const options = {
      cacheAcrossSpecs: true,
      validate,
    };

    if (cacheSession) {
      cy.session(user, login, options);
    } else {
      login();
    }
  }
);
//for commands customized - Logout
Cypress.Commands.add('logout', () => {
  cy.get('.qa-user-avatar').click();
  cy.contains('Sign out').click();
});

//for commands customized - New Project
Cypress.Commands.add('gui_createProject', (project) => {
  cy.visit('/projects/new');
  cy.get('#project_name').type(project.name);
  cy.get('#project_description').type(project.description);
  cy.get('.qa-initialize-with-readme-checkbox').check();
  cy.contains('Create project').click();
});
