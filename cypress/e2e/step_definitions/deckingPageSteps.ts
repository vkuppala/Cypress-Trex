import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { Decking } from "../pages/DeckingPage";

const deckingPage: Decking = new Decking()

Then("validate product having name {string} is visible at position {int}", (productName: string, position: number)=>{
    deckingPage.validateProductAvailability(productName, position)
})

Then(`validate the action link text {string}`, (actionText: string) =>{
    deckingPage.validateActionLinkButton(actionText)
})

Then(`validate the product Line cards heading {string}`, (cardName: string) =>{
    const cardValues  = cardName.split(',').map(value => value.trim())
    deckingPage.validateProductLineAvailability(cardValues)
})

Then(`validate the category benefit link has text {string}`, (linkText: string) =>{
    deckingPage.validateCategoryBenefitLinkAvailability(linkText)
})

Then(`validate the FAQs title {string} and list of questions availability`, (titleText:string) =>{
    deckingPage.validateFAQLableAndCount(titleText)
})

Then(`validate academy title as {string} and options available are {string}`, (title:string, optionList: string) =>{
    const optionName = optionList.split(",").map(value => value.trim())
    deckingPage.helperComponent.validateAcademyToolContainerTitle(title)
    deckingPage.helperComponent.validateAcademyToolContainerItemTitle(optionName)
})

Then(`validate related product heading and its related link`, () =>{
    deckingPage.validateRelatedProductHeading();
    deckingPage.validateExploreLinkCount()
})

Then(`validate the gallery button has text {string}`, (buttonText: string) =>{
    deckingPage.helperComponent.waitForLoadingToComplete();
    deckingPage.validateCuralateGalleryButtonText(buttonText)
})

Then(`validate the gallery button {string} button works`, (buttonText: string) =>{
    deckingPage.validateCuralateGalleryButtonText(buttonText)
    deckingPage.validateGalleryButtonFunctionality(buttonText)
})

Then(`validate the fragment text {string}`, (fragmentText:string) =>{
    const text = fragmentText.split(',').map(value => value.trim())
    deckingPage.helperComponent.validateExperienceFragmentCTA(text);
})

Then(`validate footer section with title {string} and options available under are {string}`, (title:string, optionList:string) =>{
    const listArray = optionList.split(',').map(value => value.trim())
    deckingPage.helperComponent.validateFooterSection(title, listArray)
})