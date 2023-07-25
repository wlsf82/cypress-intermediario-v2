Cypress.Commands.add('gui_login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
) => {
  cy.visit('/users/sign_in')

  cy.get("[data-qa-selector='login_field']").type(user)
  cy.get("[data-qa-selector='password_field']").type(password, { log: false })
  cy.get("[data-qa-selector='sign_in_button']").click()

  cy.get('[data-testid="top-bar"] [data-testid="sidebar-icon"]').click()
  cy.get('[data-testid="user_avatar_content"]').should('be.visible')
})

Cypress.Commands.add('gui_logout', () => {
  cy.get('[data-testid="top-bar"] [data-testid="sidebar-icon"]').click()
  cy.get('[data-testid="user_avatar_content"]')
    .should('be.visible')
    .click()
  cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_createProject', project => {
  cy.visit('/projects/new#blank_project')

  cy.get('#project_name').type(project.name)
  cy.get('#blank-project-pane [data-qa-selector="select_namespace_dropdown"]').click()
  cy.contains('p', Cypress.env('user_name')).click()
  cy.contains('Create project').click()
})

Cypress.Commands.add('gui_createIssue', issue => {
  cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)

  cy.get('[data-qa-selector="issuable_form_title_field"]').type(issue.title)
  cy.get('[data-qa-selector="issuable_form_description_field"]').type(issue.description)
  cy.contains('Create issue').click()
})

Cypress.Commands.add('gui_setLabelOnIssue', label => {
  cy.get('[data-qa-selector="labels_block"]')
    .find('[data-testid="edit-button"]')
    .click()
  cy.contains(label.name).click()
  cy.get('body').click()
})

Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
  cy.get('[data-qa-selector="milestone_block"]')
    .find('[data-testid="edit-button"]')
    .click()
  cy.contains('[data-testid="milestone-items"]', milestone.title)
    .click()
})
