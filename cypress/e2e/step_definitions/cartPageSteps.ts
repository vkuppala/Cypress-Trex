import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { Cart } from "../pages/cartPage";

var cartPage: Cart = new Cart()

Then(`Click on secure checkout button on cart page`, () =>{
    cartPage.getHelperComponent.waitForLoadingToComplete();
    cartPage.clickOnSecureCheckout();
})