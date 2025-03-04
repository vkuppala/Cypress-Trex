import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { GuestCheckout } from "../pages/guestCheckoutPage";

var guestPage: GuestCheckout = new GuestCheckout();

Then(`enter the contact information`, () => {
    guestPage.getHelperComponent.waitForLoadingToComplete()
    guestPage.enterEmailInformation()
    guestPage.enterPhoneInformation();
    guestPage.checkAndValidateNewsLetter()
    guestPage.clickOnContinueButton()
})

Then(`enter the shipping address information`, () => {
    guestPage.getHelperComponent.waitForLoadingToComplete()
    guestPage.enterShippingFirstName()
    guestPage.enterShippingLastName();
    guestPage.enterShippingAddressLine1();
    guestPage.enterShippingPhoneNumber();
    guestPage.enterShippingCity();
    guestPage.enterShippingAddressCountry()
    guestPage.enterShippingAddressState();
    guestPage.enterShippingPostalCode();
    guestPage.clickOnContinueButton()
    guestPage.getHelperComponent.waitForLoadingToComplete();
    guestPage.clickOnContinueButton()
    guestPage.getHelperComponent.waitForLoadingToComplete();
    guestPage.validateUpdateButtonVisibility()
})

Then(`click continue on shipping method`, () => {
    guestPage.getHelperComponent.waitForLoadingToComplete();
    guestPage.clickOnContinueButton();
    guestPage.getHelperComponent.waitForLoadingToComplete();
})

Then(`click checkbox for same address as shipping for billing`, () => {
    guestPage.getHelperComponent.waitForLoadingToComplete();
    guestPage.checkAndValidateSameAddress()
    guestPage.validateBillToLabel();
    guestPage.getHelperComponent.waitForGivenTime(5, "seconds")
    guestPage.getHelperComponent.waitForLoadingToComplete();
})