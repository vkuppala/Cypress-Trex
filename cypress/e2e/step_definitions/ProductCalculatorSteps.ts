import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductCalculator } from "../pages/ProductCalculator";

const prodCalc: ProductCalculator = new ProductCalculator();

Then(`validate the heading of product calculator page as {string}`, (headingText:string) =>{
    prodCalc.validatePageHeading(headingText)
})

Then(`validate the quick estimate button text as {string}`, (buttonText:string) =>{
    prodCalc.validateQuickEstimateButtonText(buttonText)
})

Then(`validate the detailed estimate button text as {string}`, (buttonText:string) =>{
    prodCalc.validateDetailEstimateButtonText(buttonText)
})