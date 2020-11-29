import BasePage from '../BasePage';

export default class SignUpPage extends BasePage {
   static openSignUpPage() {       
       cy.contains('Start your free trial')
       .should('have.attr', 'href', '/?intent=register')
       .click()
   }

    static choosePlan() {
    cy.fixture('signUp').then(data => {
        switch(data.plan)
        {
            case 'Basic' : cy.contains('Basic').click()             
            break
            case 'Standard' : cy.contains('Standard').click()
            break
            case 'Premium' : cy.contains('Premium')
            break
            default : break
        }
        cy.get('button[title="Continue"]').click()
        cy.get('.wizard__subtitle')
          .should('have.text', data.plan) 
    })              
   }

   static disabledStartWatchingButton(){
    cy.contains('Start watching')
    .should('have.class', '-disabled')
   }

   static completeSignUp()
   {
       cy.fixture('signUp').then( data => {
        cy.get('form[name="form-sign-up"]').within(() => {
            cy.get('input[name="email"]').type(data.email)
        cy.get('input[name="password"]').type(data.password)
 
        cy.get('input[name="firstName"]').type(data.firstName)
        cy.get('input[name="lastName"]').type(data.lastName)
 
        if(data.gender == "Female")
         cy.get('input[label="Female"]').check()
        else
         cy.get('input[label="Male"]').check() 

        cy.get('input[name="birthDay"]').type(data.birthDay)
        cy.get('input[name="birthMonth"]').type(data.birthMonth)
        cy.get('input[name="birthYear"]').type(data.birthYear)

        cy.get('input[name="postcode"]').type(data.postCode) 
        }) 

        if(data.payment == "0") 
        {
            cy.get('input[name="paymentMethod"]').should('have.value', "0")

            cy.get('span[data-hosted-id="encryptedCardNumber"]').within(() =>
             {
                cy.get('iframe.js-iframe').should(
                    $iframe =>
                      expect($iframe.contents().find('input[placeholder="Card Number"]')).to.exist                        
                  )
                  cy.get('iframe.js-iframe').then($iframe => {
                    const $body = $iframe.contents().find("body");
                    cy.wrap($body)
                      .find('input[placeholder="Card Number"]')
                      .type("4242424242424242");
                    }) 
              }) 
              cy.get('span[data-hosted-id="encryptedExpiryDate"]').within(() =>
              {
                 cy.get('iframe.js-iframe').should(
                     $iframe =>
                       expect($iframe.contents().find('input[placeholder="MM/YY"]')).to.exist                        
                   )
                   .then($iframe => {
                     const $body = $iframe.contents().find("body");
                     cy.wrap($body)
                       .find('input[placeholder="MM/YY"]')
                       .type("1222");
                     }) 
               }) 
               cy.get('span[data-hosted-id="encryptedSecurityCode"]').within(() =>
               {
                  cy.get('iframe.js-iframe').should(
                      $iframe =>
                        expect($iframe.contents().find('input[placeholder="CVV"]')).to.exist                        
                    )
                    .then($iframe => {
                      const $body = $iframe.contents().find("body");
                      cy.wrap($body)
                        .find('input[placeholder="CVV"]')
                        .type("122");
                      }) 
                })     
        }
        else
        cy.get('input[name="paymentMethod"]').should('have.value', "1").check 
        
        cy.get('input[name="terms"]').check()
        cy.contains('Start watching')
        .should('not.have.class', '-disabled').click        
       })    

   }

}
