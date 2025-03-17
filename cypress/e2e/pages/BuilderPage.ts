import { Helper } from "../utility/helper";

export class Builder{

    helperComponent: Helper = new Helper();

    private readonly pageHeading = "div h1"
    private readonly pageSearchForm = ".cmp-builder-search-bar__form-pieces"
    private readonly pageSearchTrexPro = ".cmp-builder-search-bar__trex-pro"
    private readonly pageSearchTextProItem = ".cmp-builder-search-bar__trex-pro-adv-item"
    private readonly pageSearchThumbCard = ".trex-pro__thumb-card"


    validatePageHeading(headingText: string){
        cy.get(this.pageHeading).should('be.visible').should('have.text', headingText);
        cy.log(`Builder page heading "${headingText}" is visible and validated`)
    }

    validateSearchText(placeHolderText:string){
        cy.get(this.pageSearchForm).find(`#txtSearch`).should('be.visible')
        cy.log(`Input search bar is visible on builder page`)
        cy.get(this.pageSearchForm).find(`#txtSearch`).should('have.attr', 'placeholder', placeHolderText)
        cy.log(`Search input has default value as "${placeHolderText}"`)
    }

    validateSearchRadius(radiusText:string){
        cy.get(this.pageSearchForm).find('#radiusRange').should('be.visible')
        cy.log(`Search radius dropdown under search form is visible on builder page`)
        cy.get(this.pageSearchForm).find('#radiusRange option:selected').should('include.text', radiusText)
        cy.log(`The radius dropdown is displaying the default value as ${radiusText} and its visible`)
    }

    validateSearchButtonText(buttonText:string){
        cy.get(this.pageSearchForm).find(`button:not([id])`).should('be.visible')
        cy.log(`Search button is visible on builder page`)
        cy.get(this.pageSearchForm).find(`button:not([id])`).should('have.text', buttonText)
        cy.log(`Search button is having text ${buttonText} under search form on builder page`)
    }

    validateSearchProHeading(searchProText: string){
        cy.get(this.pageSearchTrexPro).find('h3').should('be.visible')
        cy.log(`Search pro text heading is visible on builder page`)
        cy.get(this.pageSearchTrexPro).find('h3').should('have.text', searchProText)
        cy.log(`Search pro text heading ${searchProText} is validated on builder page`)
    }

    validateSearchProItem(itemText: string[]){
        cy.get(this.pageSearchTextProItem).find('span').should('have.length', itemText.length)
        cy.log(`Search pro item with count as ${itemText.length} is visible on builder page`)
        cy.get(this.pageSearchTextProItem).find('h5')
        .each((elem, index) =>{
            expect(elem.text().trim()).to.eq(itemText[index])
            cy.log(`${itemText[index]} heading is visible on builder page`)
        })
        
    }

    validateThumbCard(cardCount: number, cardTextPlatinum: string, cardTextGold: string){
        cy.get(this.pageSearchThumbCard).find('img').eq(0).should('be.visible')
        cy.log(`Thumb image card is visible on builder page`)
        cy.get(this.pageSearchThumbCard).should('have.length', cardCount)
        cy.log(`${cardCount} images of thumb card are visible on builder page`)
        cy.get(this.pageSearchThumbCard).find('p').eq(1).should('include.text', cardTextPlatinum)
        cy.log(`The thumb card contains ${cardTextPlatinum} at position 1`)
        cy.get(this.pageSearchThumbCard).find('p').eq(3).should('include.text', cardTextGold)
        cy.log(`The thumb card contains ${cardTextGold} at position 2`)
    }
}