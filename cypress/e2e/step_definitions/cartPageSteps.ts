import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { Cart } from "../pages/cartPage";

var cartPage: Cart = new Cart()

Then(`Click on secure checkout button on cart page`, () => {
    cartPage.getHelperComponent.waitForLoadingToComplete();
    cartPage.clickOnSecureCheckout();
})

Then(`validate the heading of page as {string} on cart page`, (pageHeading: string) => {
    cartPage.getHelperComponent.waitForLoadingToComplete()
    cartPage.getHelperComponent.validatePageHeading(pageHeading)
})

Then(`validate the product contains title {string} is visible on cart page`, (productName: string) => {
    cartPage.getHelperComponent.waitForLoadingToComplete()
    cartPage.validateProductName(productName)
})

Then(`validate the quantity {int} of added product on cart page`, (quantity: number) => {
    cartPage.validateProductQuantityCartPage(quantity)
})

Then(`Validate the price of product is visible on cart page`, (quantity: number) => {
    cartPage.validateProductAmountCartPage(quantity)
})

Then(`validate the button text as {string} is visible on cart page`, (buttonText: string) => {
    cartPage.validateButtonText(buttonText)
})

Then(`validate the heading as {string} for right section on cart page`, (heading: string) => {
    cartPage.getHelperComponent.waitForLoadingToComplete()
    cartPage.validateRightSectionHeading(heading)
})

Then(`validate the available line items text as {string} for right section on cart page`, (itemText: string) => {
    cartPage.getHelperComponent.waitForLoadingToComplete()
    cartPage.validateRightSectionQuantityText(itemText)
})

Then(`validate the shipping details label as {string} for right section on cart page`, (shipLabel:string) => {
    cartPage.validateRightSectionLabel(shipLabel)
})

Then(`validate the subtotal for added same product {int} times for right section on cart page`, (count:number) => {
    cartPage.validateRightSectionProductTotal(count)
})

Then(`validate the button text as {string} for right section on cart page`, (buttonText:string) => {
    cartPage.validateCheckoutButton(buttonText)
})


