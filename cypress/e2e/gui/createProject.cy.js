import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.login()
  })

  it('cria um novo projeto com sucesso', () => {  
    const project = {
      name: `project-${faker.datatype.uuid()}`,
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
  })
})

