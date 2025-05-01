import { Helper } from "../utility/helper";

export class Enhance {

    helperComponent: Helper = new Helper()

    private readonly subNavigation = ".cmp-subnavigation__container"
    private readonly mediaGallery = ".cmp-media-gallery"
    private readonly profile = "#profiles"
    private readonly imageTeaser = ".imagetext-teaser"
    private readonly fullWidthImageTeaser = ".fullwidthmediateaser"


    get getHelperComponent() {
        return this.helperComponent;
    }

    async validateSubNavigationText(text: string) {
        cy.get(this.subNavigation).find('.cmp-subnavigation__text').should('be.visible').should('have.text', text)
        cy.log(`Sub navigation text is visible with text ${text}`)
    }

    async validateSubNavigationJumpLink(linkText: string[]) {
        cy.get(this.subNavigation).find(`.cmp-subnavigation__jump-link`)
            .should('have.length', linkText.length)
            .each((elem, index) => {
                expect(elem.text().trim()).to.eq(linkText[index])
                cy.log(`Sub navigation jump link have text ${linkText[index]} is validated`)
            })
    }

    async validateSubNavigationButton(buttonText: string) {
        cy.get(this.subNavigation).find(`.cmp-subnavigation__button`)
            .should('be.visible').should('include.text', buttonText)
        cy.log(`Sub navigation jump link button is visible and have text ${buttonText}`)
    }

    //////////////////////////////////////////////////////////////

    async validateMediaGalleryTitle(title: string) {
        cy.get(this.mediaGallery).find('.cmp-media-gallery-title')
            .should('be.visible')
            .should('include.text', title)
        cy.log(`Media gallery title is visible with text ${title}`)
    }

    async validateMediaGallerySwatchImagesCount() {
        cy.get(this.mediaGallery)
            .find('.cmp-media-gallery-swatch-image-wrapper img')
            .should('have.length.above', 0)
        cy.log(`Swatch images under media gallery is available`)
    }

    async validateMediaGalleryLearnMoreButton() {
        cy.get(this.mediaGallery)
            .find('.learnmore-button')
            .should('have.length.above', 0)
            .eq(0).should('include.text', 'Learn More About')
        cy.log(`Learn more about button is visible under media gallery`)
    }

    async validateMediaGallerySampleImageCount() {
        cy.get(this.mediaGallery)
            .find('.cmp-media-gallery-sample-card img')
            .should('have.length.above', 0)
        cy.log(`Sample card images under media gallery is available`)
    }

    async validateMediaGallerySampleCardTitle(title: string) {
        cy.get(this.mediaGallery)
            .find('div[class$=type-title]')
            .should('have.length.above', 0)
            .eq(0).should('include.text', title)
        cy.log(`${title} title is visible for sample card media gallery`)
    }

    async validateMediaGallerySampleCardButtonText(buttonText: string) {
        cy.get(this.mediaGallery)
            .find('.addtocart__body button')
            .should('have.length.above', 0)
            .eq(0).should('include.text', buttonText)
        cy.log(`${buttonText} title is visible for sample card media gallery`)
    }

    async validateMediaGallerySampleCardPrice() {
        cy.get(this.mediaGallery)
            .find('div[class*=price-amount]')
            .should('have.length.above', 0)
        cy.log(`price for sample card is visible for sample card media gallery`)
    }

    async validateImageRespectiveCount() {
        cy.get(this.mediaGallery).find('.cmp-media-gallery-swatch-image-wrapper img').its('length').as('SwatchCount'),
            cy.get(this.mediaGallery).find('.learnmore-button').its('length').as('learnMoreCount'),
            cy.get(this.mediaGallery).find('.cmp-media-gallery-sample-card img').its('length').as('cardCount'),
            cy.get(this.mediaGallery).find('div[class$=type-title]').its('length').as('titleCount'),
            cy.get(this.mediaGallery).find('.addtocart__body button').its('length').as('AddCartCount'),
            cy.get(this.mediaGallery).find('div[class*=price-amount]').its('length').as('priceCount'),
            cy.get(this.mediaGallery).find('.cmp-mediacarousel__icons').its('length').as('carouselCount')
        cy.then(function () {
            expect(this.SwatchCount).to.eq(this.learnMoreCount)
            cy.log(`Learn more about button is available for each swatch image under media gallery`)
            expect(this.learnMoreCount).to.eq(this.cardCount)
            cy.log(`Sample card image is available for each swatch image under media gallery`)
            expect(this.cardCount).to.eq(this.titleCount)
            cy.log(`Order a sample is available for each swatch image under media gallery`)
            expect(this.titleCount).to.eq(this.AddCartCount)
            cy.log(`Add to Cart button is available for each swatch image under media gallery`)
            expect(this.AddCartCount).to.eq(this.priceCount)
            cy.log(`price is available for each swatch image under media gallery`)
            expect(this.priceCount).to.eq(this.carouselCount)
            cy.log(`Media Carousel is available for each swatch image under media gallery`)
        })
    }

    async validateMediaCarousel(carouselText: string[]) {
        cy.get(this.mediaGallery).find(`.cmp-mediacarousel__icons`).eq(0)
            .find(`.cmp-mediacarousel__icon p`)
            .should('have.length', carouselText.length)
            .each((elem, index) => {
                expect(elem.text().trim()).eq(carouselText[index])
                cy.log(`${carouselText[index]} is visible for each swatch image`)
            })
    }

    /////////////////////////////////////////

    async validateProfileTitle(titleText: string) {
        cy.get(this.profile).find('h2')
            .filter((_, elem) => Cypress.$(elem).text().trim() === titleText)
            .first()
            .click();
        cy.log(`The profile heading is visible with text ${titleText} on enhance page`)

    }

    async validateProfileImageCount(count: number) {
        cy.get(this.profile).find(`div[class^='cmp-mediagrid__board-card'] img`)
            .its('length').should('eq', count)
    }

    async validateProfileImageHeading(headingText: string[]) {
        cy.get(this.profile).find(`div[class^='cmp-mediagrid__board-card'] h4`)
            .should('have.length', headingText.length)
            .each((elem, index) => {
                expect(elem.text().trim()).to.eq(headingText[index])
                cy.log(`Profile image heading with text ${headingText[index]} is available on enhance page`)
            })
    }

    /////////////////////////////////////////////////////////////

    async validateImageTeaserImageAvailable(text: string) {
        cy.get(this.imageTeaser).find('img')
            .should('be.visible')
            .should('have.attr', 'alt', text)
        cy.log(`Image teaser with text as ${text} is visible on enhance page`)
    }

    async validateImageTeaserTitle(titleText: string) {
        cy.get(this.imageTeaser).find(`.image-text-teaser-title`)
            .filter((_, el) => Cypress.$(el).text().trim() === titleText)
            .should('have.length', 1)
        cy.log(`Image teaser with title text ${titleText} is visible`)
    }

    async validateImageTeaserButtonText(buttonText: string) {
        cy.get(this.imageTeaser).find(`a span`)
            .filter((_, el) => Cypress.$(el).text().trim() === buttonText)
        cy.log(`Image teaser with button having text ${buttonText} is visible`)
    }

    ////////////////////////////////////////////////

    async validateFullWidthImageTeaserImageAtIndex(heading:string, index:number){
        cy.get(this.fullWidthImageTeaser, {timeout:10000}).should('exist').eq(index-1).scrollIntoView()
        .find(`h2`, {timeout:20000})
        .should('be.visible').should('have.text', heading)
        cy.log(`Image with heading as ${heading} is visible under full width image teaser`)
    }

    async validateFullWidthImageTeaserButtonText(buttonText:string){
        cy.get(this.fullWidthImageTeaser).find(`a span`)
        .filter((_, el) => Cypress.$(el).text().trim() === buttonText)
        cy.log(`Image full width teaser with button having text ${buttonText} is visible`)
    }

}