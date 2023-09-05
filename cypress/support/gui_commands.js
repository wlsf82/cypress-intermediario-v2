// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  //for commands customized
  'login',
  (
    user = Cypress.env('user_name'), //get the data from cypress.env.json
    password = Cypress.env('user_password') //get the data from cypress.env.json
  ) => {
    const login = () => {
      cy.visit('/users/sign_in');

      cy.get("[data-qa-selector='login_field']").type(user);
      cy.get("[data-qa-selector='password_field']").type(password, {
        log: false,//hide password
      }); 
      cy.get("[data-qa-selector='sign_in_button']").click();
    };

    login();
  }
);
