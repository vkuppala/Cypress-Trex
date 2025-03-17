import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { Builder } from "../pages/BuilderPage";

const builderPage:Builder = new Builder();

Then(`validate the heading of builder page {string}`, (headingText: string) =>{
    builderPage.validatePageHeading(headingText)
})

Then(`validate the input search field with value as {string}`, (placeHolderText: string) =>{
    builderPage.validateSearchText(placeHolderText)
})

Then(`validate the radius dropdown default value as {string}`, (radiusValue: string) =>{
    builderPage.validateSearchRadius(radiusValue)
})

Then(`validate search button is visible with text {string}`, (buttonText:string) =>{
    builderPage.validateSearchButtonText(buttonText)
})

Then(`validate the search pro heading as {string}`,(searchHeading: string) =>{
    builderPage.validateSearchProHeading(searchHeading)
})

Then(`validate the search pro item has text {string}`,(text:string) =>{
    const itemText = text.split('#').map(value => value.trim())
    builderPage.validateSearchProItem(itemText)
})

Then(`validate the thumb card image has count {int} with text as {string} for platinum and text as {string} for gold`, (count:number, platinumText:string, goldText:string) =>{
    builderPage.validateThumbCard(count, platinumText, goldText)
})