
import { ShopNow } from "../pages/shopNowPage";
import { Then } from "@badeball/cypress-cucumber-preprocessor";

var shopNow = new ShopNow();

Then(`increase the quantity of product {string} by {int}`, (productName: string, quantity: number) => {
    for (let index = 0; index < quantity; index++) {
        shopNow.clickIncrementButton(productName)
    }
    shopNow.validateProductAdded(productName, String(quantity + 1))
})


Then(`add the product {string} to cart from the list available on shop now page`, (productName: string) => {
    shopNow.getProductPrice(productName)
    shopNow.clickAddToCartButton(productName)
})

Then(`Click on cart icon`, () => {
    shopNow.clickOnCartButton();
})

Then(`validate the product {string} added successfully`, (productName: string) => {
    shopNow.validateProductAddInCart(productName)
})

Then(`validate the quantity {int} of added product in cart icon`, (quantity: number) =>{
    shopNow.validateProductQuantityCartIcon(quantity)
})

Then(`Validate the subtotal for added same product {int} times in cart icon`,(quantity: number) =>{
    shopNow.validateTotalAmountCartIcon(quantity)
})

Then(`Click on secure checkout button`, () => {
    shopNow.clickOnSecureCheckout();
})
Then(`Click on view cart button`, () => {
    shopNow.clickOnViewCheckout();
    shopNow.getHelperComponent.waitForLoadingToComplete()
})