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
/// <reference types="Cypress" />
/// <reference types="cypress-xpath"/>
import 'cypress-keycloak';
import "cypress-keycloak-commands";

Cypress.Commands.add('getiframe',(iframe)=>{

return cy.get('iframe')
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap)

})


//custom commanad to get linktext

Cypress.Commands.add('linktext', (label)=>{
        cy.get('a').contains(label).click();

})




//custom command for login operations-filename "custom commands.cy.js"
Cypress.Commands.add("login", (username, password)=>{
    cy.get('#Email').type(username)
    cy.get('#Password').type(password)
    cy.get('form > .buttons > .button-1').click()


})

Cypress.Commands.add('typeLogin', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  })
  
  Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
  })

  
Cypress.Commands.add('loginbysession',(username, password)=>{
  cy.session([username,password],()=>{    //cy.session is used to keep the session alive so that user dont login repeatedly
    cy.visit('https://react-redux.realworld.io/#/login')
    cy.get(':nth-child(1) > .form-control').type(username)
    cy.get(':nth-child(2) > .form-control').type(password)
    cy.get('.btn').click()
    const loginname=cy.get(':nth-child(4) > .nav-link')
    loginname.should('exist')
  },
  {
    cacheAcrossSpecs:true //it is used to retain the session across all specs, otherwise new session will be created for each spec
  })
})

