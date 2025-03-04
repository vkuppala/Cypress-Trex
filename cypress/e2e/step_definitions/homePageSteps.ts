import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { HeaderPage } from "../pages/HeaderPage";
import { MyAccount } from "../pages/MyAccountPage";
import { HomePage } from "../pages/HomePage";


const headerPage = new HeaderPage();
const myAccountPage = new MyAccount();
const homePage = new HomePage();

Then("validate successful login", () => {
    headerPage.clickHeaderMenu();
    headerPage.clickMyAccount();
    headerPage.getHelperComponent().waitForLoadingToComplete();
    myAccountPage.validateTitle(myAccountPage.getHelperComponent().getJsonData('userName'))
})

When('open {string} tab', (tabName: string) =>{
    homePage.clickOnTab(tabName)
})

Then('click on {string} option from {string} list', (option: string, tabName:string) => {
    homePage.clickOnOptionFromList(tabName,option)
})

Then(`validate the popup for external website is visible`, () =>{
    homePage.validateExternalPopupLink();
})

Then(`click on {string} button`, (buttonText: string)=>{
    homePage.clickPopupButton(buttonText)
})