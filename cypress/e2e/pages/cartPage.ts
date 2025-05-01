import { Helper } from "../utility/helper";

export class Cart {

    helperComponent: Helper = new Helper();

    private readonly checkoutButton = "//button[text()='Secure Checkout']"

    get getHelperComponent() {
        return this.helperComponent;
    }

    async clickOnSecureCheckout() {
        // cy.wait(5000)
        cy.xpath(this.checkoutButton).should('be.visible', {timeout:30000})
        cy.log(`Secure checkout button is visible on view cart page`)
        cy.xpath(this.checkoutButton).click();
        cy.log(`Secure checkout button is clicked on view cart page`)
    }

}