import { Helper } from "../utility/helper";

export class Colors{

    helperComponent: Helper = new Helper();
    private readonly pageHeading = "h1.cmp-trex-hero__title"
    private readonly pageColorLeft = ".cmp-colorselector-left"
    private readonly pageColorRight = "div.cmp-colorselector-right"
    private readonly pageExploreTitle = ".cmp-fullwidthcallout-cta-title"

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
        cy.log(`Page heading with text ${headingText} is visible on colors page`)
    }

    async validateLeftHeading(subHeading:string){
        cy.get(this.pageColorLeft).find('h2>span')
        .should('have.text', subHeading)
        cy.log(`Left subheading as ${subHeading} is visible on colors page`)
    }

    async validateLeftLabel(label:string){
        cy.get(this.pageColorLeft)
        .find('.cmp-colorselector--filter-label')
        .should('have.text', label)
        cy.log(`Left label ${label} is available on colors page`)
    }

    async validateFilterOptions(options:string[]){
        cy.get(this.pageColorLeft)
        .find('.cmp-colorselector--filter-link ')
        .should('have.length', options.length)
        .each((elem, index) =>{
            expect(elem.text().trim()).to.eq(options[index])
            cy.log(`Left section has option "${options[index]}" is available on colors page`)
            
        })
    }

    async validateImageSection(){
        cy.get(this.pageColorLeft)
        .find('.cmp-colorselector--filter-option h3')
        .each((elem, index) =>{
            var text = elem.text().trim();
            cy.get(this.pageColorLeft)
            .find('.cmp-colorselector--filter-option img').eq(index).click()
            cy.get(this.pageColorRight).find('h2').eq(index)
            .should('have.text', text)
            cy.get(this.pageColorRight).find('.cmp-colorselector-options-badges').eq(index)
            .find('img').its('length').should('be.gt',0)
            cy.get(this.pageColorRight).find('.cmp-colorselector-options-specbox-row').eq(index)
            .find('span').should('be.visible')
            .siblings('div')
            .filter('.cmp__incremental').should('be.visible')
            .next()
            .filter('.addtocart__body').should('be.visible')
            cy.log(`The image with title ${text} is available with badges, price,quantity and add to cart button`)
        })
    }

    async validateExploreTitle(title:string){
        cy.get(this.pageExploreTitle).should('have.text', title)
        cy.log(`The title ${title} is available on colors page`)
    }

    async validateButtonLink(linkText:string){
        cy.get(this.pageExploreTitle)
        .siblings('a')
        .should('have.length', 1)
        .should('have.text', linkText)
        cy.log(`The button loink with text ${linkText} is available on colors page`)
    }
}