import {url, login_username, login_password} from '../../../config';
import LogInPage from '../../page-objects/pages/LogInPage';
import Navbar from '../../page-objects/components/NavBar';

//All the function implementations in the Tests are in the  '../../page-objects/pages/LogInPage';
describe('Log In Page', () => {
    beforeEach(() =>  {
        cy.visit(url)
        Navbar.clickLogIn()
    })

    //Test to check the Page title
    it('should greet with a Log In Title', () => {
        //Assert title h2 contains text 'Log in to Stan'
        LogInPage.displayLogInPageTitle()
    })
    
    // Test to check if the SignUp link(From Log In Page) navigates to the Sign Up page
    it('links to the Sign Up Page', () => {
        //Assert redirect to sign up page. 
        LogInPage.signUpNowLink()               
    })
   
    // Test to check if the Forgot Password Link(From the Log In Page) navigates to the Password reset page
    it('should redirect to the password reset page', () => {  
         //Assert redirect to reset Password page     
        LogInPage.forgotPasswordLink()   
     })

    // Test to check if the Log in requires Email
    it('requires Email', () => {
        //Assert to check log in contains email address
       LogInPage.loginWithoutEmail()
    })

    // Test to check log in requires password
    it('requires Password', () => {
        //Assert to check log in contains password
        LogInPage.loginWithoutPassword()
     })

    // Test to check Log in Error messages on wrong email and password.
    //TODO

    //Test to check successfull login
    it('should Log in with valid username and password', () => {
        LogInPage.login(login_username, login_password)
    })
    
})



    














