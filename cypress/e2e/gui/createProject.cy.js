import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Create Project', options, () => {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.sessionLogin()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains('[data-qa-selector="project_name_content"]', project.name)
      .should('be.visible')
  })
})
