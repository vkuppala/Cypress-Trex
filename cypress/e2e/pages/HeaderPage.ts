import { Helper } from "../utility/helper";

export class HeaderPage{

    helperComponent:Helper = new Helper();

    private readonly headerMenu = '.cmp-utilitynavigations__right'
    private readonly myAccountLink = '#navMyAccount'

    getHelperComponent(){
        return this.helperComponent;
    }

    clickHeaderMenu(){
        cy.get(this.headerMenu).should('be.visible')
        cy.get(this.headerMenu).click();
        cy.log('Clicked on header menu')
    }

    clickMyAccount(){
        cy.get(this.myAccountLink).should('be.visible').contains('My Account')
        cy.get(this.myAccountLink).click();
        cy.log('Click on my account link')
    }


}