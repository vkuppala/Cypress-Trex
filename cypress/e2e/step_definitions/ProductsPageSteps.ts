import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { Products } from "../pages/productPage";

const productPage :Products = new Products();

Then('validate the url of new page contains {string}', (keyword :string) =>{
    productPage.validateURL(keyword)
})

Then ('validate the title of page is {string}', (title: string) => {
    productPage.validateTitle(title)
}) 


Then(`validate the heading as {string}`, (text :string) =>{
    productPage.validateHeadingVisible(text)
})

Then(`validate the partial heading as {string}`, (text: string) =>{
    productPage.validatePartialText(text)
})

Then(`Validate the video title {string}`,(text:string) =>{
    productPage.validateVideoHeading(text)
})

Then(`Validate the page headline {string}`,(text:string) =>{
    productPage.validatePageHeading(text)
})

Then(`Validate the splsh title {string}`,(text:string) =>{
    productPage.validateSplashTitle(text)
})

Then(`Validate the banner board {string}`,(text:string) =>{
    productPage.validateBannerBoard(text)
})

Then(`Close the modal popup if visible`, () =>{
    productPage.getHelperComponent.waitForLoadingToComplete()
    productPage.closeModalDialogue()
})