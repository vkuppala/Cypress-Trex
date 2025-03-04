import { Helper } from "../utility/helper";
import 'cypress-real-events'

export class HomePage {

    helperComponent:Helper = new Helper();

    private readonly tabNameLink = "//a[contains(@class,'menu-item') and text()='tab']"
    private readonly externalPopup = ".cmp-popup-modal__dialog"
    private readonly externalPopupButton = "(//div[@class ='cmp-popup-modal__dialog']//a[contains(text(),'button')])[1]"


    get getHelperComponent(){
        return this.helperComponent;
    }

    async clickOnTab(tabName: string){
        cy.xpath(this.tabNameLink.replace('tab', tabName)).realHover();
        this.getHelperComponent.waitForLoadingToComplete();
        cy.xpath(this.tabNameLink.replace('tab', tabName)).xpath("//following-sibling::div").should('be.visible')
        cy.log(`Option list is visible after hover on ${tabName} tab`)
    }

    async clickOnOptionFromList(tabName:string, optionName:string){
        cy.xpath(`(${this.tabNameLink.replace('tab', tabName)}//following-sibling::div//a[contains(text(),'${optionName}')])[1]`).click({force:true})
        cy.log(`click on ${optionName} link from ${tabName} tab`)
        cy.on('uncaught:exception', (e, Runnable) =>{
            return false;
        })
    }

    async validateExternalPopupLink(){
        cy.get(this.externalPopup).should('be.visible')
        cy.log(`External popup link is visible`)
    }

    async clickPopupButton(buttonText: string){
        cy.xpath(`${this.externalPopupButton.replace('button',buttonText)}`).click({force:true})
        cy.log(`Button ${buttonText} is clicked on popup and popup is not visible`)
    }

}