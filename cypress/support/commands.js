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

Cypress.Commands.add("login", (email, senha) => {
  cy.visit('/login')
  cy.get(
    '[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input'
  ).type(email);
  cy.get(
    '[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input'
  ).type(senha);
  cy.get('[data-test="login-submit"]').click();
});

Cypress.Commands.add("perfil", (empresa,github) => {
  cy.visit('/criar-perfil')
  cy.get('#mui-component-select-status').click()
  cy.get('.MuiList-root').find('li[data-value="Especialista em QA"]').click()
  cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
  cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.AmbevTech.com')
  cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Goiânia')
  cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('JavaScript, C#, Cypress, Java')
  cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type(github)
  cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('Olá, sou o Igor Montenegro')
  cy.get('[data-test="profile-submit"]').click()
});
