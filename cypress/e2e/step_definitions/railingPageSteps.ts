import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { Railing } from "../pages/railingPage";
import { link } from "fs";

const railing: Railing = new Railing();

Then(`validate the heading as {string} of railing page`, (heading: string) => {
    railing.validatePageHeading(heading)
})

Then(`validate the image title as {string} of railing page`, (imageHeading: string) => {
    railing.validateImageTitle(imageHeading)
})

Then(`validate the railing material heading as {string} and button text as {string} at position {int}`,
    (heading: string, buttonText: string, position: number) => {
        railing.validateMaterialHeading(heading, position)
        railing.validateMaterialButton(buttonText, position)
    }
)

Then(`validate the railing budget heading as {string} and button text as {string} at position {int}`,
    (heading: string, buttonText: string, position: number) => {
        railing.validateBudgetHeading(heading, position)
        railing.validateBudgetButton(buttonText, position)
    }
)

Then(`validate carousel title as {string} on railing page`, (headingText: string) => {
    railing.validateCarouselHeading(headingText)
})

Then(`validate the deck railing carousel card title as {string} is available on railing page`, (title: string) => {
    railing.validateDeckCarouselCardTitle(title)
})

Then(`validate the deck railing carousel control buttons are visible`, () => {
    railing.validateDeckCarouselControls('Previous slide')
    railing.validateDeckCarouselControls('Next slide')
})

Then(`validate the railing by material carousel control buttons are visible`, () => {
    railing.validateRailingMaterialCarouselControls('Previous slide')
    railing.validateRailingMaterialCarouselControls('Next slide')
})

Then(`validate the railing by material carousel card title as {string} with link text as {string} is available on railing page`, (title: string, linkText: string) => {
    railing.validateRailingMaterialCarouselCardTitle(title, linkText)
})

Then(`validate the heading as {string} is available for tool section under railing page`, (heading: string) => {
    railing.validateToolHeading(heading)
})

Then(`validate the image section contains source text as {string} and heading as {string}`, (srcText: string, title: string) => {
    railing.validateToolImage(srcText)
    railing.validateToolTitle(title)
})

Then(`validate the heading as {string} is available for personalize railing under railing page`, (heading: string) => {
    railing.validatePersonalizeRailingHeading(heading)
})

Then(`validate the image text as {string} with title as {string} and description as {string} for personalize railing under railing page`,
    (imageText: string, title: string, description: string) => {
        railing.validatePersonalizeRailingImage(imageText)
        railing.validatePersonalizeRailingTitle(title, description)
})

Then(`validate the heading of FAQs as {string}`, (heading:string) =>{
    railing.validateFAQHeading(heading)
})

Then(`validate the description of FAQs as {string}`, (description:string) =>{
    railing.validateFAQDescriptionText(description)
})

Then(`validate the view more link of FAQs as {string}`, (linkText:string) =>{
    railing.validateFAQViewAllFaq(linkText)
})

Then(`validate multiple list of questions are listed`, () =>{
    railing.validateQuestionListAvailable();
})