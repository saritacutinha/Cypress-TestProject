import {HomeURL, url} from '../../../config'

export default class Navbar {
    
    static clickOnLogo() {
        cy.get('a[title="Stan. The Biggest Deal In Entertainment"]')
        .should('have.attr', 'href', url)
    }

    static clickLogIn() {
        cy.get('a[href="/?intent=authenticate"]').click()
    }

    static clickStartYourFreeTrial(){
        cy.get('a[href="/?intent=register"]').should('have.attr', 'href', "/?intent=register")
    }

    static clickStartWatching() {
        cy.contains('Start Watching')
            .should('have.attr', 'href', HomeURL)
    }    
}