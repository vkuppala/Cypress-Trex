import { Helper } from "../utility/helper"

export class SignIn{

    helperComponent:Helper = new Helper();

    private readonly emailText = '[name="email"]'
    private readonly passwordText = '[name="password"]'
    private signInButton = 'button[type="submit"]'

    getHelperComponent(){
        return this.helperComponent;
    }

    enterEmail(){
        cy.get(this.emailText).click();
        cy.get(this.emailText).clear();
        cy.get(this.emailText).type(this.getHelperComponent().getJsonData('email'))
        cy.get(this.emailText).should('have.value', this.getHelperComponent().getJsonData('email'))
        cy.log('Email entered successfully')
    }

    enterPassword(){
        cy.get(this.passwordText).click();
        cy.get(this.passwordText).clear();
        cy.get(this.passwordText).type(this.getHelperComponent().getJsonData('password'))
        cy.get(this.passwordText).should('have.value', this.getHelperComponent().getJsonData('password'))
        cy.log('Password entered successfully')
    }

    clickSignInButton(){
        cy.get(this.signInButton).should('be.visible')
        cy.get(this.signInButton).click();
        this.getHelperComponent().waitForLoadingToComplete();
        cy.log('click on sign in button on login page')
    }

}