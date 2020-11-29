import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command'

import {HomeURL} from '../../config'

addMatchImageSnapshotCommand();

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible')
})


Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist')
})

Cypress.Commands.add('setResolution', size => {
    if(Cypress._.isArray(size))
        cy.viewport(size[0], size[1])
    else
        cy.viewport(size)
})

Cypress.Commands.add("clickRecaptcha", () => {
    cy.window().then(win => {
      win.document
        .querySelector("iframe[src*='recaptcha']")
        .contentDocument.getElementById("recaptcha-token")
        .click();
    });
  });

Cypress.Commands.add('login', (username, password) => {
    const log = Cypress.log({
        name: "login",
        displayName: "LOGIN",
        message: [`🔐 Authenticating | ${username}`]      
       });    
       
    cy.get('.modal__form').within(() => {        
        cy.get('input[name="email"]').type('{selectall}'+ username)
        cy.get('input[name="password"]').type(password)
        cy.get('button[name="submit"]').click()       
    }) 
    cy.pause(500)
    cy.clickRecaptcha()
    cy.pause(500)
  
  cy.url().should('eq', HomeURL);
})

