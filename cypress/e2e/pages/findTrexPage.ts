import { Helper } from "../utility/helper";

export class FindTrex{

    helperComponent : Helper = new Helper()

    private readonly pageSearchForm = ".cmp-retailer-search-bar__form-pieces"
    private readonly pageSearchBarLabel = ".cmp-retailer-search-bar__label"
    private readonly pageRetailerInitial = "#findRetailerInitial "


    validateSearchText(placeHolderText:string){
        cy.get(this.pageSearchForm).find(`#txtSearch`).should('be.visible')
        cy.log(`Input search bar is visible on find Trex page`)
        cy.get(this.pageSearchForm).find(`#txtSearch`).should('have.attr', 'placeholder', placeHolderText)
        cy.log(`Search input has default value as "${placeHolderText}"`)
    }

    validateSearchRadius(radiusText:string){
        cy.get(this.pageSearchForm).find('#radiusRange').should('be.visible')
        cy.log(`Search radius dropdown under search form is visible on find Trex page`)
        cy.get(this.pageSearchForm).find('#radiusRange option:selected').should('include.text', radiusText)
        cy.log(`The radius dropdown is displaying the default value as ${radiusText} and its visible`)
    }

    validateSearchButtonText(buttonText:string){
        cy.get(this.pageSearchForm).find(`button:not([id])`).should('be.visible')
        cy.log(`Search button is visible on find Trex page`)
        cy.get(this.pageSearchForm).find(`button:not([id])`).should('have.text', buttonText)
        cy.log(`Search button is having text ${buttonText} under search form on find Trex page`)
    }

    validateSearchButtonDisable(buttonText:string){
        cy.get(this.pageSearchForm).find(`button:not([id])`).should('be.disabled')
        cy.log(`Search button is disable on find Trex page`)
        cy.get(this.pageSearchForm).find(`button:not([id])`).should('have.text', buttonText)
        cy.log(`Search button is having text ${buttonText} under search form on find Trex page`)
    }

    validateSearchLabelTextLink(text :string){
        cy.get(this.pageSearchBarLabel).find('a').should('be.visible')
        cy.log(`Search bar label link is visible`)
        cy.get(this.pageSearchBarLabel).find('a').should('have.text', text)
        cy.log(`Search bar has a link with ${text} is visible`)
    }

    validateRetailerHeading(mainHeading:string){
        cy.get(this.pageRetailerInitial).find('.text h5').should('be.visible').should('have.text', mainHeading)
        cy.log(`Retailer initial main heading with text ${mainHeading} is visible on find trex page`)
    }

    validateRetailerSubHeading(subHeading:string){
        cy.get(this.pageRetailerInitial).find('.text h3').should('be.visible').should('have.text', subHeading)
        cy.log(`Retailer initial sub heading with text ${subHeading} is visible on find trex page`)
    }

    validateRetailerCardHeading(headingText:string, position:number){
        cy.get(this.pageRetailerInitial).find('.cmp-category-card-link h2').eq(position-1).should('be.visible').should('have.text', headingText)
        cy.log(`The category card image has heading with text as ${headingText} is visible on find trex page`)
    }

    validateRetailerCardLinkText(linkText:string, position:number){
        cy.get(this.pageRetailerInitial).find('.cmp-category-card-link h3').eq(position-1).should('be.visible').should('have.text', linkText)
        cy.log(`The category card image has link with text as ${linkText} is visible on find trex page`)
    }

    validateRetailerCardLink(href:string, position:number){
        cy.get(this.pageRetailerInitial).find('.cmp-category-card-link').eq(position-1).should('have.attr', 'href', href)
    }




}