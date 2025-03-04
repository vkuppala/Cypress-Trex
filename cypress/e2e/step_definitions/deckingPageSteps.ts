import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { Decking } from "../pages/DeckingPage";

const deckingPage: Decking = new Decking()

Then("validate product having name {string} is visible at position {int}", (productName: string, position: number)=>{
    deckingPage.validateProductAvailability(productName, position)
})