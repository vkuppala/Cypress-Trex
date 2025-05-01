import { Helper } from "../utility/helper";

export class DeckCostLanding{

    helperComponent: Helper = new Helper()

    private readonly pageHeading = ".landingpagehero h1"
    private readonly pageButton = ".cmp-button"
    private readonly pageSubHeading = ".text h2>span"
    private readonly pageSubHeadingSection = ".text h3>span"
    private readonly pageSummaryGrid = ".summarymediagrid"

    get getHelperComponent() {
        return this.helperComponent;
    }

    async validatePageHeading(headingText:string){
        cy.get(this.pageHeading).should('be.visible').should('have.text', headingText)
        cy.log(`Page heading with text ${headingText} is visible on deck cost landing page`)
    }

    async validateButtonTextLink(buttonText:string){
        cy.get(this.pageButton).find(`span`)
        .filter((_, el) => Cypress.$(el).text().trim() === buttonText)
        .should('have.length', 1) 
        cy.log(`Button with text ${buttonText} is visble on deck cost landing page`)
    }

    async validatePageSubHeading(headingText:string){
        cy.get(this.pageSubHeading)
        .filter((_, el) => Cypress.$(el).text().trim() === headingText)
        .should('have.length', 1) 
        cy.log(`Page sub heading with text ${headingText} is visible on deck cost landing page`)
    }

    async validateSummaryGrid4ColumnCount(count: number){
        cy.get(this.pageSummaryGrid).find('.cmp-summary-media-4-col-grid .cmp-summary-media-list-item')
        .should('have.length', count)
        cy.log(`Summary grid has ${count} list of items as columns available on deck cost landing page`)
    }

    async validateSummaryGrid3ColumnCount(count: number){
        cy.get(this.pageSummaryGrid).find('.cmp-summary-media-3-col-grid .cmp-summary-media-list-item')
        .should('have.length', count)
        cy.log(`Summary grid has ${count} list of items as columns available on deck cost landing page`)
    }

    async validateSummaryGrid3ColumnTitle(imageText: string[]){
        cy.get(this.pageSummaryGrid).find('.cmp-summary-media-3-col-grid .cmp-summary-media-list-item .cmp-summary-media-subtitle')
        .filter((_, el) => imageText.includes(Cypress.$(el).text().trim()))
        .each((elem) =>{
            cy.log(`Summary grid column heading ${elem.text().trim()} is available on deck cost landing page`)
        })
    }

    async validateSummaryGrid2ColumnCount(count: number,headingText:string){
        cy.get(this.pageSubHeading)
        .filter((_, el) => Cypress.$(el).text().trim() === headingText)
        .parents('div.text').next()
        .should('have.class','summarymediagrid')
        .find('.cmp-summary-media-2-col-grid .cmp-summary-media-list-item')        
        .should('have.length', count)
        cy.log(`Summary grid has ${count} list of items as columns available on deck cost landing page`)
    }

    async validateSummaryGrid2ColumnTitle(imageText: string[]){
        cy.get(this.pageSummaryGrid).find('.cmp-summary-media-2-col-grid .cmp-summary-media-list-item .cmp-summary-media-subtitle')
        .filter((_, el) => imageText.includes(Cypress.$(el).text().trim()))
        .each((elem) =>{
            cy.log(`Summary grid column heading ${elem.text().trim()} is available on deck cost landing page`)
        })
    }

    async validatePageSubHeadingWithSection(headingText:string){
        cy.get(this.pageSubHeadingSection)
        .filter((_, el) => Cypress.$(el).text().trim() === headingText)
        .should('have.length', 1) 
        cy.log(`Page 3rd level sub heading with text ${headingText} is visible on deck cost landing page`)
    }

    async validateLinkTextCount(headingText:string,linkText:string[]){
        cy.get(this.pageSubHeadingSection)
        .filter((_, el) => Cypress.$(el).text().trim() === headingText)
        .parents('h3').next()
        .find('li a').should('have.length', linkText.length)
        .each((elem, index) =>{
            expect(elem.text().trim()).to.eq(linkText[index])
            cy.log(`${linkText[index]} is available as link under ${headingText} on deck cost landing page`)
        })
    }
}