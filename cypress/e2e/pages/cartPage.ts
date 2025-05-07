import { Helper } from "../utility/helper";
import { ShopNow } from "./shopNowPage";

export class Cart {

    helperComponent: Helper = new Helper();
    // shopNow: ShopNow = new ShopNow()

    private readonly checkoutButton = "//button[text()='Secure Checkout']"
    private readonly productDetailSection = "div.cmp-TrexProductListing__product__details"
    private readonly orderSummaryHeading = "span[class$='orderSummaryClass']"
    private readonly orderSummaryItemCount = "span[class$='priceSummary__quantity']"
    private readonly orderSummarySubTotalLabel = "span[class$='lineItemLabel']"
    private readonly orderSummarySubTotalAmount = "span[class$='Summary__price']>span"
    private readonly orderSummarySecureCheckoutButton = "button[class$='Summary__checkoutButton']"

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

    async validateProductName(productName:string){
        cy.get(this.productDetailSection)
        .find('.cmp-TrexProductListing__product__name a')
        .should('contain.text', productName)
        cy.log(`product ${productName} is visible on cart page`)
    }

    async validateProductQuantityCartPage(quantity: number) {
        cy.get(this.productDetailSection)
        .find('input').invoke('val').should('equal', String(quantity))
        cy.log(`Quantity of product ${quantity} on cart page is validated`)
    }

    async validateProductAmountCartPage(quantity: number) {
        cy.get(this.productDetailSection)
        .find(`span[class$='product__price_regular']>span`).eq(1,{timeout:30000})
        .should(`be.visible`)
        .invoke('text')
            .then(elem => {
                expect(ShopNow.prodValue).to.equal(parseFloat(elem))
                cy.log(`Subtotal of amount $${elem} on cart page is validated successfully`)
            })
    }

    async validateButtonText(buttonText:string){
        cy.get(this.productDetailSection)
        .find(`div[class$='productdetails_bottom'] button`)
        .filter((_, el) => Cypress.$(el).text().trim() === buttonText)
        .should('have.length', 1) 
        cy.log(`Button with text ${buttonText} is visble on cart page`)
    }

    async validateRightSectionHeading(headingText:string){
        cy.get(this.orderSummarySecureCheckoutButton, {timeout: 30000}).should('be.visible')
        cy.get(this.orderSummaryHeading).should('be.visible')
        .should('have.text', headingText)
        cy.log(`On right section the heading is available with text as ${headingText} on cart page`)
    }

    async validateRightSectionQuantityText(quantityText:string){
        cy.get(this.orderSummaryItemCount).should('be.visible')
        .invoke('text')
        .then((text) =>{
            expect(quantityText).to.equal(text)
        })
        cy.log(`On right section items quantity with text ${quantityText} is visible on cart page`)
    }

    async validateRightSectionLabel(label:string){
        cy.get(this.orderSummarySubTotalLabel)
        .should('be.visible')
        .invoke('text')
        .then((text) =>{
           expect(text).to.equal(label)
        })
        cy.log(`On right section shipping label having text ${label} is visble on cart page`)
    }

    async validateRightSectionProductTotal(quantity:number){
        cy.get(this.orderSummarySubTotalAmount).eq(1,{timeout:30000})
        .should(`be.visible`)
        .invoke('text')
            .then(elem => {
                expect(ShopNow.prodValue * quantity).to.equal(parseFloat(elem))
                cy.log(`Subtotal of amount $${elem} on right section of cart page is validated successfully`)
            })
    }

    async validateCheckoutButton(buttonText:string){
        cy.get(this.orderSummarySecureCheckoutButton)
        .should('be.visible')
        .should('have.text', buttonText)
        cy.log(`On right section the button with text ${buttonText} is visible on cart page`)
    }

}