import exp from "constants";
import { Helper } from "../utility/helper";

export class Railing {

    helperComponent: Helper = new Helper();

    private readonly pageHeading = ".text h1"
    private readonly pageImageTitle = "div[class^='image-text-teaser-title']"
    private readonly pageMultiCarousel = ".multiColumnCarousel"
    private readonly pageFaq = ".cmp-faq__description"
    private readonly pageFaqList = ".cmp-faq__item"

    get getHelperComponent() {
        return this.helperComponent;
    }

    async validatePageHeading(headingText: string) {
        cy.get(this.pageHeading).should('be.visible').should(
            (ele) => {
                const text = ele.text().replace(/\s+/g, ' ').trim()
                expect(text).to.eq(headingText)
            }
        )
        cy.log(`Page heading with text ${headingText} is visible on railing page`)
    }

    async validateImageTitle(title: string) {
        cy.get(this.pageImageTitle).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === title)
            .should('have.length', 1)
        cy.log(`Image with title ${title} is visble on railing page`)
    }

    async validateMaterialHeading(headingText: string, tabIndex: number) {
        cy.get(this.pageImageTitle).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === 'Explore Railing by Material')
            .parents('div.imagetext-teaser').next()
            .find('li').eq(tabIndex - 1).click()
            .parents('ol').nextAll()
            .should('have.length', 5)
            .eq(tabIndex - 1)
            .find('h3.image-text-teaser-title')
            .filter((_, el) => Cypress.$(el).text().trim() === headingText)
            .then(() => {
                cy.log(`Railing material with heading ${headingText} is visible`)
            })
    }

    async validateMaterialButton(buttonText: string, tabIndex: number) {
        cy.get(this.pageImageTitle).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === 'Explore Railing by Material')
            .parents('div.imagetext-teaser').next()
            .find('li').eq(tabIndex - 1).click()
            .parents('ol').nextAll()
            .should('have.length', 5)
            .eq(tabIndex - 1)
            .find('a span')
            .filter((_, el) => Cypress.$(el).text().trim() === buttonText)
            .then(() => {
                cy.log(`Railing material with button text ${buttonText} is visible`)
            })
    }

    async validateBudgetHeading(headingText: string, tabIndex: number) {
        cy.get(this.pageImageTitle).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === 'Explore Railing by Budget')
            .parents('div.imagetext-teaser').next()
            .find('li>button').eq(tabIndex - 1).click()
            .parents('ul').prevAll().filter('div.splide__track')
            .should('have.length', 1)
            .find('h3.image-text-teaser-title')
            .filter((_, el) => Cypress.$(el).text().trim() === headingText)
            .then(() => {
                cy.log(`Railing material with heading ${headingText} is visible`)
            })
    }

    async validateBudgetButton(buttonText: string, tabIndex: number) {
        cy.get(this.pageImageTitle).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === 'Explore Railing by Budget')
            .parents('div.imagetext-teaser').first().next()
            .find('li>button').eq(tabIndex - 1).click()
            .parents('ul').prevAll().filter('div.splide__track')
            .should('have.length', 1)
            .find('a span')
            .filter((_, el) => Cypress.$(el).text().trim() === buttonText)
            .then(() => {
                cy.log(`Railing material with button text ${buttonText} is visible`)
            })
    }

    async validateCarouselHeading(headingText: string) {
        cy.get(this.pageMultiCarousel).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === headingText).scrollIntoView()
        cy.log(`Multi carousel with heading ${headingText} is visible on railing page`)
    }

    async validateDeckCarouselCardTitle(title: string) {
        cy.get(this.pageMultiCarousel).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === 'Why Trex is the Best Choice for Deck Railing')
            .parents('.cmp-multiColumnCarousel__container')
            .siblings('.splide__list')
            .find('.cmp-multiColumnCarousel__card-title')
            .filter((_, el) => Cypress.$(el).text().trim() === title)
            .then(() => {
                cy.log(`Deck carousel with title ${title} is available`)
            })
    }

    async validateDeckCarouselControls(controlName: string) {
        cy.get(this.pageMultiCarousel).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === 'Why Trex is the Best Choice for Deck Railing')
            .parents('.cmp-multiColumnCarousel__container')
            .siblings('.splide__controls')
            .find('button')
            .filter((_, el) => Cypress.$(el).attr('aria-label') === controlName)
            .then(() => {
                cy.log(`Deck carousel control button with text ${controlName} is available`)
            })
    }

    async validateRailingMaterialCarouselCardTitle(title: string, linkText: string) {
        cy.get(this.pageMultiCarousel).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === 'Explore Railing by Material')
            .parents('.cmp-multiColumnCarousel__container').scrollIntoView()
            .siblings('.splide__list', { timeout: 5000 })
            .find('a .cmp-multiColumnCarousel__card-title')
            .filter((_, el) => Cypress.$(el).text().trim() === title)
            .parents('.splide__list')
            .find(`div[class$='great-for-text']`)
            .filter((_, el) => Cypress.$(el).text().trim() === linkText)
            .then(() => {
                cy.log(`Railing material carousel with title "${title}" and link text "${linkText}" is available`)
            })

    }

    async validateRailingMaterialCarouselControls(controlName: string) {
        cy.get(this.pageMultiCarousel).find('h2')
            .filter((_, el) => Cypress.$(el).text().trim() === 'Explore Railing by Material')
            .parents('.cmp-multiColumnCarousel__container')
            .siblings('.splide__controls')
            .find('button')
            .filter((_, el) => Cypress.$(el).attr('aria-label') === controlName)
            .then(() => {
                cy.log(`Deck carousel control button with text ${controlName} is available`)
            })
    }

    async validateToolHeading(heading: string) {
        cy.get(`.top--padding`).find('h3')
            .filter((_, el) => Cypress.$(el).text().trim().includes(heading)).scrollIntoView()
        cy.log(`Tool and resources have heading as "${heading}" is available`)
    }

    async validateToolImage(imageText: string) {
        cy.get('.cmp-categorybenefits')
            .find('a.cmp-categorybenefits__item-link>img')
            .then((elements) => {
                [...elements].some(el => el.getAttribute('src')?.includes(imageText))
            })
            .then(() => {
                cy.log(`Tools and resource section has image with src attribute contains "${imageText}"`)
            })

    }

    async validateToolTitle(title: string) {
        cy.get('.cmp-categorybenefits')
            .find('a h4.cmp-categorybenefits__item-title')
            .filter((_, el) => Cypress.$(el).text().trim() === title)
            .then(() => {
                cy.log(`Tools and resource section has image with title as  "${title}"`)
            })
    }

    async validatePersonalizeRailingHeading(heading: string) {
        cy.get(`.text .cmp-text`).find('h3')
            .filter((_, el) => Cypress.$(el).text().trim() === heading).scrollIntoView()
        cy.log(`Personalize railing have heading as "${heading}" is available`)
    }

    async validatePersonalizeRailingImage(imageText: string) {
        cy.get(`.cmp-category-card-link`)
            .find(`.cmp-category-card-image img`)
            .then((elements) => {
                [...elements].some(el => el.getAttribute('alt')?.includes(imageText))
            })
            .then(() => {
                cy.log(`Personalize your railing section have image with alt attribute value ${imageText} is visible`)
            })
    }

    async validatePersonalizeRailingTitle(title: string, description: string) {
        cy.get(`.cmp-category-card-link`)
            .find(`h2.cmp-category-card-title`)
            .filter((_, el) => Cypress.$(el).text().trim() === title)
            .next(`h3.cmp-category-card-description`)
            .filter((_, el) => Cypress.$(el).text().trim() === description)
            .then(() => {
                cy.log(`Personalize your railing section has image with title as  "${title}" and description as "${description}"`)
            })
    }

    async validateFAQHeading(headingText:string){
        cy.get(this.pageFaq)
        .find(`.cmp-faq__title`)
        .should('have.text', headingText)
        cy.log(`FAQs heading as "${headingText}" is available under FAQ section for railing oage`)
    }

    async validateFAQDescriptionText(description:string){
        cy.get(this.pageFaq)
        .find(`.cmp-faq__description-text`).next(`p`)
        .should('have.text', description)
        cy.log(`FAQs description text as "${description}" is available under FAQ section for railing oage`)
    }

    async validateFAQViewAllFaq(linkText:string){
        cy.get(this.pageFaq)
        .find(`.cmp-faq__see-more a`)
        .should('have.text', linkText)
        cy.log(`FAQs view all faq text as "${linkText}" is available under FAQ section for railing oage`)
    }

    async validateQuestionListAvailable(){
        cy.get(this.pageFaqList)
        .its('length')
        .should('be.gt',1)
        cy.log(`FAQ section has displays list of questions`)
    }

}