const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`;

Cypress.Commands.add('api_createProject', project => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/`,
    body: {
      name: project.name,
      description: project.description,
      initialize_with_readme: true,
    },
    headers: { Authorization: accessToken },
  });
});

Cypress.Commands.add('api_getAllProjects', () => {
  //Get all projects created before
  cy.request({
    method: 'GET',
    url: '/api/v4/projects/',
    headers: { Authorization: accessToken },
  });
});

Cypress.Commands.add('api_deleteProjects', () => {
  //Delete projects
  cy.api_getAllProjects().then((res) =>
    res.body.forEach((project) =>
      cy.request({
        method: 'DELETE',
        url: `/api/v4/projects/${project.id}`,
        headers: { Authorization: accessToken },
      })
    )
  );
});

Cypress.Commands.add('api_createIssue', (issue) => {
  cy.api_createProject(issue.project).then((response) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${response.body.id}/issues`,
      body: {
        title: issue.title,
        description: issue.description,
      },
      headers: { Authorization: accessToken },
    });
  });

  Cypress.Commands.add('api_createLabel', (projectId, label) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/labels`,
      body: {
        name: label.name,
        color: label.color,
      },
      headers: { Authorization: accessToken },
    });
  });

  Cypress.Commands.add('api_createMilestone', (projectId, milestone) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/milestones`,
      body: { title: milestone.title },
      headers: { Authorization: accessToken },
    });
  });
});
