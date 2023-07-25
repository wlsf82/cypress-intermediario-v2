Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
  ) => {
  cy.session([user, password], () => {
    cy.visit('/users/sign_in');
    cy.get("[data-qa-selector='login_field']").type(user);
    cy.get("[data-qa-selector='password_field']").type(password, { log: false });
    cy.get("[data-qa-selector='sign_in_button']").click();
  }, { cacheAcrossSpecs: true })
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