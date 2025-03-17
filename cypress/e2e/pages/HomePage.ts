import { link } from "fs";
import { Helper } from "../utility/helper";
import 'cypress-real-events'

export class HomePage {

    helperComponent: Helper = new Helper();

    private readonly tabNameLink = "//a[contains(@class,'menu-item') and text()='tab']"
    private readonly externalPopup = ".cmp-popup-modal__dialog"
    private readonly externalPopupButton = "(//div[@class ='cmp-popup-modal__dialog']//a[contains(text(),'button')])[1]"
    private readonly navigationLinkList = ".cmp-utilitynavigations__list a"
    private readonly secondaryNavigation = "#Secondary-Navigation"
    private readonly cmpHeading = ".cmp-cta__heading"
    private readonly imageSliderHandle = ".cmp-before-after-slider__handle"
    private readonly imageSliderLinkText = ".cmp-before-after-slider__cta a"
    private readonly mediaCallOutHeading = ".cmp-media-callout-items h3"
    private readonly mediaCallOutLinkText = ".cmp-media-callout-cta__link span"
    private readonly dynamicMedia = ".dynamicmediagrid"

    get getHelperComponent() {
        return this.helperComponent;
    }

    async clickOnTab(tabName: string) {
        cy.xpath(this.tabNameLink.replace('tab', tabName)).realHover();
        this.getHelperComponent.waitForLoadingToComplete();
        cy.xpath(this.tabNameLink.replace('tab', tabName)).xpath("//following-sibling::div").should('be.visible')
        cy.log(`Option list is visible after hover on ${tabName} tab`)
    }

    async clickOnOptionFromList(tabName: string, optionName: string) {
        cy.xpath(`(${this.tabNameLink.replace('tab', tabName)}//following-sibling::div//a[contains(text(),'${optionName}')])[1]`).click({ force: true })
        cy.log(`click on ${optionName} link from ${tabName} tab`)
        cy.on('uncaught:exception', (e, Runnable) => {
            return false;
        })
    }

    async validateExternalPopupLink() {
        cy.get(this.externalPopup).should('be.visible')
        cy.log(`External popup link is visible`)
    }

    async clickPopupButton(buttonText: string) {
        cy.xpath(`${this.externalPopupButton.replace('button', buttonText)}`).click({ force: true })
        cy.log(`Button ${buttonText} is clicked on popup and popup is not visible`)
    }

    async validateNavigationListItems(list: string[]){
        cy.get(this.navigationLinkList)
        .should('have.length', list.length)
        .each((listText, index) =>{
            expect(listText.text().trim()).to.contain(list[index])
            cy.log(`${list[index]} is visible as link under utility navigation section`)
        })
    }

    async validateSearchIcon(){
        cy.get(this.secondaryNavigation).find('.cmp-mainnav__menu-item--icon')
        .should('be.visible')
        cy.log(`Search icon is visible on secondary navigation`)
    }

    async validateCanvasLinks(linkText: string[]){
        for (let index = 0; index < linkText.length; index++) {
            cy.xpath(`//a[@id='${linkText[index]}']`).should('be.visible')
            cy.log(`Canvas link text ${linkText[index]} is visible`)            
        }
    }

    async validateCmpHeadingDetails(title:string, heading: string, paragraph: string, position: number){
        cy.get(this.cmpHeading).eq(position - 1).find(".cmp-cta__title", {log :false}).should('have.text', title, {log :false})
        cy.get(this.cmpHeading).eq(position - 1).find(".cmp-cta__description", {log :false}).should('have.text', heading, {log :false})
        cy.get(this.cmpHeading).eq(position - 1).find(".cmp-cta__link-cta", {log :false}).should('have.text', paragraph, {log :false})
        cy.log(`At position ${position} the title ${title} having heading ${heading} and paragraph ${paragraph} is visible`)
    }

    async validatePseduoElement(elementType: string){
        cy.get(this.imageSliderHandle).then(($el) =>{
            const elementContent = window.getComputedStyle($el[0], elementType).getPropertyValue('content')
            expect(elementContent).to.not.eq('none')
            cy.log(`Image slider handle has a ${elementType} with content ${elementContent}`)
        })
    }

    async validateImageSliderLinkText(text: string){
        cy.get(this.imageSliderLinkText).should('be.visible').should('have.text', text)
        cy.log(`Image slider link with text ${text} is available`)
    }

    async validateMediaCalloutHeading(headingTextList: string[]){
        cy.get(this.mediaCallOutHeading).should('have.length', headingTextList.length)
        .each((elem, index) =>{
            expect(elem.text().trim()).to.eq(headingTextList[index])
            cy.log(`${headingTextList[index]} is visible as heading for media call out`)
        })
    }

    async validateMediaCalloutLinkText(text: string) {
        cy.get(this.mediaCallOutLinkText).should('be.visible').should('have.text', text);
        cy.log(`Media callout link with text "${text}" is visible`)
    }

    async validateDynamicMediaTitle(title:string){
        cy.get(this.dynamicMedia).find('.cmp-dynamicmediagrid__title span').should('be.visible').should('have.text', title)
        cy.log(`The dynamic media outlet has title as ${title} is visible and validated`)
    }

    async validateDynamicMediaItemCount(count: number){
        cy.get(this.dynamicMedia).find('.cmp-dynamicmediagrid__results-item').should('have.length', count)
        cy.log(`Dynamic media has total of ${count} items available`)
    }

    async validateDynamicMediaLoadMoreButton(buttonText:string){
        cy.get(this.dynamicMedia).find('.cmp-dynamicmediagrid__loadmore a').should('be.visible').should('contain', buttonText)
        cy.log(`Dynamic media callout has link with text ${buttonText} is visible`)
    }
    
}