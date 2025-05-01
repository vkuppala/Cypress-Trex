
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

Then(`validate the quantity {int} of added product in cart icon`, (quantity: number) => {
    shopNow.validateProductQuantityCartIcon(quantity)
})

Then(`Validate the subtotal for added same product {int} times in cart icon`, (quantity: number) => {
    shopNow.validateTotalAmountCartIcon(quantity)
})

Then(`Click on secure checkout button`, () => {
    shopNow.clickOnSecureCheckout();
})

Then(`Click on view cart button`, () => {
    shopNow.clickOnViewCheckout();
    shopNow.getHelperComponent.waitForLoadingToComplete()
})

Then(`validate the banner image is visible on shop page`, () => {
    shopNow.validateBannerSection()
})

Then(`validate the left rail navigation link text as {string} is available on shop page`
    , (linkText:string) =>{
        shopNow.validateLeftSectionLinkText(linkText)
})

Then(`validate the product link as {string} are available on shop page`, (productLinks:string) =>{
    const texts = productLinks.split(",").map(value => value.trim())
    shopNow.validateLeftSectionProductText(texts)
})

Then(`validate the left rail link title as {string} on shop page`, (title:string) =>{
    shopNow.validateLeftRailLinkTitle(title)
})

Then(`validate the left rail link item as {string} on shop page`, (linkItem:string) =>{
    const links = linkItem.split(",").map(value => value.trim())
    shopNow.validateLeftRailLinkItem(links)
})

Then(`validate the label of each product card item`, () =>{
    shopNow.validateProductCardLabel()
})

Then(`validate the rating of each product card item`, () =>{
    shopNow.validateProductCardRatingStarAvailability()
    shopNow.validateProductCardRatingNumberAvailability()
})

Then(`validate the price of each product card item`, () =>{
    shopNow.validateProductCardPriceAvailability()
})

Then(`validate the increment section of each product card item`, () =>{
    shopNow.validateProductIncrementalAvailability()
})

Then(`validate the button of each product card item`, () =>{
    shopNow.validateProductButtonAvailability()
})

Then(`validate the load more section of product with text as {string}`, (buttonText:string) =>{
    shopNow.validateProductCountLabelAvailability()
    shopNow.validateProductLodeMoreAvailability(buttonText)
})

Then(`validate the build assisstance section with button having text as {string}`, (buttonText:string) =>{
    shopNow.validateBuildAssistanceImage()
    shopNow.validateBuildAssisstanceButton(buttonText)
})