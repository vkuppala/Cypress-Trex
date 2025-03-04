import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { Login } from "../pages/LoginPage"
import { PopupPage } from "../pages/PopupPage"
import { SignIn } from "../pages/signInPage";


var login = new Login();
var popup = new PopupPage();
var signIn = new SignIn()


Given("Navigate to login page", () => {
    login.navigateToWebPage();
})

Then("open the signIn link dropdown", () => {
    login.openHeaderMenu()
})

Then("Click on the signIn link option", () => {
    login.clickSignInFromHeaderOptions()
    popup.clickPopUpCloseButton();
})

When("User enters the login credentials", () => {
    signIn.enterEmail();
    signIn.enterPassword();
})

Then("click on signIn button to login", () => {
    signIn.clickSignInButton();
})


