import { Helper } from "../utility/helper";

export class Decking{

    helperComponent: Helper = new Helper();

    private readonly productText = ".cmp-sub-category-details-card h2"
    private readonly actionLink = ".cmp-teaser__action-link"
    private readonly productLineCardHeading = ".productlinecard h3"
    private readonly categoryBenefitContainer = ".cmp-categorybenefits"
    private readonly FAQContainer = ".cmp-faq__container"
    private readonly relatedProductContainer = "div.cmp-category-card-container"
    private readonly galleryContainer = "div.trex-home-curalate-gallery button"
    
    

    validateProductAvailability(productName: string, productPosition: number){
        cy.get(this.productText).eq(productPosition - 1).should('be.visible').should('have.text', productName);
        cy.log(`Product ${productName} is available at position on Decking page`)
    }

    validateActionLinkButton(actionText: string){
        cy.get(this.actionLink).should('be.visible').should('have.text', actionText)
        cy.log(`Action link is visible and have text ${actionText}`)
    }

    validateProductLineAvailability(productHeadingText: string[]){
        cy.get(this.productLineCardHeading)
        .should('have.length', productHeadingText.length)
        .each(($el, index) =>{
            expect($el.text().trim()).to.eq(productHeadingText[index])
            cy.log(`${productHeadingText[index]} product is visible as Line card item`)
        })
        cy.log(`Product Line cards are validated and visible`)
    }

    validateCategoryBenefitLinkAvailability(linkText: string){
        cy.get(this.categoryBenefitContainer).find('a').should('be.visible')
        .should('have.text',linkText)
        cy.log(`Category offers has a visible link and have a link text ${linkText}`)
    }

    validateFAQLableAndCount(labelText: string){
        cy.get(this.FAQContainer).find('.cmp-faq__title').should('be.visible').should('have.text', labelText);
        cy.log(`Frequently Asked Questions title is visible and validated`)
        cy.get(this.FAQContainer).find('.cmp-faq__question-title').its('length').should('be.gt', 0)
        cy.log(`FAQs are available on the decking page`)
    }

    validateRelatedProductHeading(){
        cy.get(this.relatedProductContainer).find('div.cmp-text h3').
        should('be.visible')
        .should('have.text', 'Related Products')
        cy.log(`Related Products heading is available`)
    }

    validateExploreLinkCount(){
        cy.get(this.relatedProductContainer).find('div.cmp-category-card')
        .its('length')
        .then((count) =>{
            cy.get(this.relatedProductContainer).find('div.cmp-category-card h3')
            .its('length')
            .should('eq', count)
        })
        cy.get(this.relatedProductContainer).find('div.cmp-category-card h3')
        .each((elem) =>{
            cy.wrap(elem).invoke('text').should('eq', 'Explore')
        })
        cy.log(`Related products all links have Explore keyword is validated`)
    }

    validateCuralateGalleryButtonText(buttonText:string){
        cy.get(this.galleryContainer).contains(buttonText).should('be.visible')
        cy.log(`Button with text ${buttonText} is visible`)
    }

    validateGalleryButtonFunctionality(buttonText:string){
        cy.get(this.galleryContainer).its('length').then((count) =>{
            cy.get(this.galleryContainer).contains(buttonText)
            .click().its('length').should('be.lessThan', count)
        })
        cy.log(`After clicking Load more button more options are visible`)
        
    }

}