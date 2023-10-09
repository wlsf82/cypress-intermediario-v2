import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('CreateIssue', options,() => {

    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.api_createProject(issue.project)
    })

    it.only('successfully', () => {
        cy.gui_createIssue(issue)

        cy.url().should('contains', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${issue.project.name}/`)
        cy.get('.issue-details')
            .should('contain', issue.title)
            .and('contain', issue.description)
    })
})