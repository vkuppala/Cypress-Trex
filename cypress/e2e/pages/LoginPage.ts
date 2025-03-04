import { Helper } from "../utility/helper"

export class Login{

    helperComponent:Helper = new Helper();

    private readonly Base_URL = 'https://aemqa.trex.com/'
    // private readonly Base_URL = 'https://aemstaging.trex.com/'
    private readonly headerMenu = 'div.mobile-hide .loginNavigation__root'
    private readonly signInMenuOption = 'div.cmp-utilitynavigations__right a[href="/shop/login"]'

    getHelperComponent(){
        return this.helperComponent;
    }

    navigateToWebPage(){
        cy.visit(this.Base_URL,{
            auth:{
                username:'trex-web-user',
                password:'dizzygoose83'
            }
        })
        cy.get('body').should('be.visible')
        cy.url().should('deep.equal',this.Base_URL);
        cy.log('Url hit successfully')
    }

    openHeaderMenu(){
        cy.get(this.headerMenu).should('be.visible')
        cy.get(this.headerMenu).click()
        cy.log('click on header menu')
    }

    clickSignInFromHeaderOptions(){
        cy.get(this.signInMenuOption).should('be.visible')
        cy.get(this.signInMenuOption).click()
        cy.log('click on sign in option from header menu')
    }
}