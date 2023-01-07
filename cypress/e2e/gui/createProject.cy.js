import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Create Project', options, () => {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.sessionLogin()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
