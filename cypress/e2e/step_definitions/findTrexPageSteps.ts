import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { FindTrex } from "../pages/findTrexPage";

const findTrex: FindTrex = new FindTrex();

Then(`validate the heading of find Trex page {string}`, (headingText: string) =>{
    findTrex.helperComponent.validatePageHeading(headingText)
})

Then(`validate the input search field with value as {string} on find trex page`, (placeHolderText: string) =>{
    findTrex.validateSearchText(placeHolderText)
})

Then(`validate the radius dropdown default value as {string} on find trex page`, (radiusValue: string) =>{
    findTrex.validateSearchRadius(radiusValue)
})

Then(`validate search button is visible with text {string} on find trex page`, (buttonText:string) =>{
    findTrex.validateSearchButtonText(buttonText)
})

Then(`validate search button is disable with text {string} on find trex page`, (buttonText:string) =>{
    findTrex.validateSearchButtonDisable(buttonText)
})

Then(`validate the search bar has a link with text {string}`, (text:string) =>{
    findTrex.validateSearchLabelTextLink(text)
})

Then(`validate the retailer initial with main heading as {string} and sub heading as {string}`, (mainHeading:string, subHeading: string) =>{
    findTrex.validateRetailerHeading(mainHeading)
    findTrex.validateRetailerSubHeading(subHeading)
})

Then(`validate the retailer category card with heading as {string} and link as {string} with text as {string} at index {int}`, (heading:string, href:string, text:string, position:number) =>{
    findTrex.validateRetailerCardHeading(heading, position)
    findTrex.validateRetailerCardLinkText(text, position)
    findTrex.validateRetailerCardLink(href, position)
})