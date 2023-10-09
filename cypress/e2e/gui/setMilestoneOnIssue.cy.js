import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Set label on issue', options, () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }

    const milestones = { title: `title-${faker.random.word()}` }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.api_createIssue(issue)
            .then(response => {
                cy.api_createMilestone(response.body.project_id, milestones)
                cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
            })
    })

    it('successfully', () => {
        cy.gui_setMilestoneOnIssue(milestones)

        cy.get('.milestone > .value').should('contain', milestones.title)
    })
})