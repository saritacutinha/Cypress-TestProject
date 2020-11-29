import SignUpPage from '../../page-objects/pages/SignUpPage';
import {url} from '../../../config';

//All the function implementations in the Tests are in the  '../../page-objects/pages/SignUpPage';
describe('Sign Up Page Test', () => {
    before(() =>  {
        cy.visit(url)       
    })

    //Test to Redirect to SIgn up page.
    it('should redirect to signUp Page', () => {
        //Assert the /?intent=register href attribute
        SignUpPage.openSignUpPage()
    })

    //Test to choose a plan
    it('should choose a plan', () => {
        //Assert the plan is displayed on the complete sign up form
        SignUpPage.choosePlan()
    })

    // Test the sign  up complete button should be disabled before filling in the details    
    it('Start watching button should be disabled', () => {
       // Assert on the -disable class on the Start watching button to validate.
       SignUpPage.disabledStartWatchingButton()
    })

    //Test to see form submission
    it('should enable the start watching button when all fields are filled', () => {
        //Assert to see form can be submitted.
        SignUpPage.completeSignUp()
    })

})