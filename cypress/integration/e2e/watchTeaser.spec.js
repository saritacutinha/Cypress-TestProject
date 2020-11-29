import Navbar from '../../page-objects/components/NavBar'
import NavBar from '../../page-objects/components/NavBar'
import {WatchTeasers} from '../../../config'

before(() => {
    cy.visit(WatchTeasers)
})

describe('Tests for Watch Teasers Page', () => {
    it('should have the Sign up page if the user is not logged in ', () => {
        NavBar.clickStartYourFreeTrial()
    })   

    it('should redirect to the Home Page on clicking the Brand', () => {
        Navbar.clickOnLogo()

    })
})

