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
    myAccountPage.validateTitle(myAccountPage.getHelperComponent().getJsonData("",'userName'))
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

Then(`validate utility navigation list contain {string} links`, (listText: string) =>{
    const testList = listText.split(',').map(text => text.trim().toUpperCase())
    homePage.validateNavigationListItems(testList)
})

Then(`validate search icon is visible on secondary navigation`, () =>{
    homePage.validateSearchIcon();
})

Then(`validate canvas text links {string} are available`, (canvasText:string) =>{
    const linkTextList = canvasText.split(',').map(text => text.trim())
    homePage.validateCanvasLinks(linkTextList)
})

Then(`validate the title {string} heading {string} and paragraph {string} at index {int}`, 
    (title:string, heading: string, paragraph: string, position: number) =>{
        homePage.validateCmpHeadingDetails(title, heading, paragraph, position)

})

Then(`validate image slider handle has {string} element on home page`, (element: string) =>{
    homePage.validatePseduoElement(element)
})

Then(`validate image slider handle has link {string} is available`, (text:string) =>{
    homePage.validateImageSliderLinkText(text)
})

Then(`validate media callout heading {string} is available`, (headingText:string) =>{
    const heading = headingText.split('#').map(text => text.trim())
    homePage.validateMediaCalloutHeading(heading)
})

Then(`validate media callout heading with link text {string} is available`, (text:string) =>{
    homePage.validateMediaCalloutLinkText(text)
})

Then(`validate dynamic media having {string} with {int} option and {string} button link`, (title:string, count:number, linkText:string) =>{
    homePage.validateDynamicMediaTitle(title)
    homePage.validateDynamicMediaItemCount(count)
    homePage.validateDynamicMediaLoadMoreButton(linkText)
})