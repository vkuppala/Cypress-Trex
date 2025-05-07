import { link } from "fs";
import { Helper } from "../utility/helper";
import exp from "constants";
import { title } from "process";
import { build } from "esbuild";

export class ShopNow {

    helperComponent: Helper = new Helper();
    public static prodValue: number = 0;;


    private readonly addToCartButton = "//div[contains(text(),'productName')]//ancestor::div[@class='cmp-product-card__block']//button[contains(@class,'add-to-cart')]";
    private readonly productIncrementButton = "//div[contains(text(),'productName')]//ancestor::div[@class='cmp-product-card__block']//button[contains(@class,'cmp__incremental-plus')]";
    private readonly productQuantityInput = "//div[contains(text(),'productName')]//ancestor::div[@class='cmp-product-card__block']//input"
    private readonly productAmount = "//div[contains(text(),'productName')]//ancestor::div[@class='cmp-product-card__block']//div[@class='price']"
    private readonly cartIcon = "#carttriggerbuttonicon"
    private readonly cartIconText = "div.cmp-TrexMiniCart__miniCartCustom__contents a[class$='name']"
    private readonly cartIconProductQuantity = "div.cmp-TrexMiniCart__miniCartCustom__contents input"
    private readonly cartIconSubTotal = "//span[contains(@class,'pricevalue')]/span[2]"
    private readonly checkoutButton = "//span[text()='Secure Checkout']/parent::button"
    private readonly viewCartButton = "//span[contains(text(),'View Cart')]/parent::button"
    private readonly bannerSection = `.cmp-searchresults__right #bannerboard>div[class$="overlay"]`
    private readonly rightSearchSection = ".cmp-searchresults__right"
    private readonly leftSearchSection = ".cmp-searchresults__left"
    private readonly productCardBlock = ".cmp-product-card__block"
    private readonly buildAssistanceImage = ".cmp-buildassistant--collapsed--icon svg"
    private readonly buildAssistanceButton = ".cmp-buildassistant--collapsed--button>button"

    get getHelperComponent() {
        return this.helperComponent;
    }

    clickAddToCartButton(productName: string) {
        cy.xpath(this.addToCartButton.replace('productName', productName)).should('be.visible');
        cy.log(`Add to cart button for product ${productName} is visible on shop now page`)
        cy.xpath(this.addToCartButton.replace('productName', productName)).click();
        cy.log(`Add to cart button for product ${productName} is clicked`)
    }

    clickOnCartButton() {
        cy.wait(5000)
        cy.get(this.cartIcon).should('be.visible')
        cy.log(`Cart icon is visible on shop now page`)
        cy.get(this.cartIcon).click();
        cy.log(`Cart icon is clicked on shop now page`)
    }

    validateProductAddInCart(productName: string) {
        cy.get(this.cartIconText, { timeout: 30000 }).should('be.visible');
        cy.log(`Product text is visible on mini cart`)
        cy.get(this.cartIconText).should('contain.text', productName)
        cy.log(`product ${productName} is successfully added`)
    }

    clickOnSecureCheckout() {
        cy.xpath(this.checkoutButton).should('be.visible')
        cy.log(`Secure checkout button is visible on mini cart`)
        cy.xpath(this.checkoutButton).click();
        cy.log(`Secure checkout button is clicked`)
    }

    clickIncrementButton(productName: string) {
        cy.xpath(this.productIncrementButton.replace('productName', productName)).should('be.visible');
        cy.log(`Increment button for product ${productName} is visible on shop now page`)
        cy.xpath(this.productIncrementButton.replace('productName', productName)).click();
        cy.log(`Increment button for product ${productName} is clicked`)
    }

    validateProductAdded(productName: string, count: string) {
        cy.xpath(this.productQuantityInput.replace('productName', productName)).invoke('val').should('equal', count)
        cy.log(`The product quantity has been increased to ${count} `)
    }

    getProductPrice(productName: string) {
        cy.xpath(this.productAmount.replace('productName', productName)).invoke('text')
            .then((elem: string) => {
                ShopNow.prodValue = parseFloat(elem.replace(/[^0-9.-]+/g, ""))
                cy.log(`The price of the ${productName} is ${ShopNow.prodValue}`)
            })
    }

    validateProductQuantityCartIcon(quantity: number) {
        cy.get(this.cartIconProductQuantity).invoke('val').should('equal', String(quantity))
        cy.log(`Quantity of product ${quantity} in cart icon is validated`)
    }

    validateTotalAmountCartIcon(quantity: number) {
        cy.xpath(this.cartIconSubTotal).invoke('text')
            .then(elem => {
                expect(ShopNow.prodValue * quantity).to.equal(parseFloat(elem))
                cy.log(`Subtotal of amount $${elem} in mini cart icon is validated successfully`)
            })
    }

    clickOnViewCheckout() {
        cy.xpath(this.viewCartButton).should('be.visible')
        cy.log(`View cart button is visible on mini cart`)
        cy.xpath(this.viewCartButton).click();
        cy.log(`View cart button is clicked`)
    }

    async validateBannerSection() {
        cy.get(this.bannerSection).should('exist').should('be.visible').scrollIntoView()
        cy.log(`Banner image is visible on shop now page`)
    }

    async validateLeftSectionLinkText(linkText: string) {
        cy.get(this.leftSearchSection)
            .find(`.cmp-leftrail--navigation>a`)
            .should('be.visible').scrollIntoView()
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.include(linkText)
                cy.log(`Left Search section link is visible with text ${linkText}`)
            })
    }

    async validateLeftSectionProductText(productLink: string[]) {
        cy.get(this.leftSearchSection)
            .find(`.cmp-leftrail--navigation li>a`)
            .then(($elem) => {
                const text = [...$elem].map(el => el.innerText.trim())

                productLink.forEach(expected => {
                    const found = text.some(text => text === expected)
                    expect(found, `Expected exact match for ${expected}`).to.be.true;
                })
            })
    }

    async validateLeftRailLinkTitle(titleText: string) {
        cy.get(this.leftSearchSection)
            .find(`.cmp-leftrail--links-title`)
            .should('exist').should('be.visible').scrollIntoView()
            .should('have.text', titleText)
        cy.log(`Left rail title is visible and having text as ${titleText} is validated on shop page`)
    }

    async validateLeftRailLinkItem(linkItems: string[]) {
        cy.get(this.leftSearchSection)
            .find(`.cmp-leftrail--links-item`)
            .should('have.length', linkItems.length)
            .each((elem, index) => {
                expect(elem.text().trim()).to.eq(linkItems[index])
                cy.wrap(elem).find('img').should('be.visible')
                cy.log(`Left Rail link item "${linkItems[index]}" with image is available on shop page`)
            })
    }

    async validateProductCardLabel() {
        cy.get(this.productCardBlock)
            .each((elem) => {
                cy.wrap(elem).find(`.cmp-product-card__title`)
                    .should('be.visible')
                    .invoke('text')
                    .then((text) => {
                        expect(text.trim(), 'Text should not be empty').to.not.be.empty;
                    })
            })
        cy.log(`Each product card is having product label is validated on shop page`)
    }

    async validateProductCardRatingStarAvailability() {
        cy.get(this.productCardBlock)
            .each((elem) => {
                cy.wrap(elem).find(`.bv_stars_button_container svg`)
                    .should('have.length', 5)
            })
        cy.log(`Each product card is having star rating as 5 polygon is available`)
    }

    async validateProductCardRatingNumberAvailability() {
        cy.get(this.productCardBlock)
            .each((elem) => {
                cy.wrap(elem).find(`.bv_text`)
                    .should('be.visible')
                    .invoke('text')
                    .then((text) => {
                        expect(text.trim(), 'Text should not be empty').to.not.be.empty;
                    })
            })
        cy.log(`Each product card is having star rating as number is available`)
    }

    async validateProductCardPriceAvailability() {
        cy.get(this.productCardBlock)
            .each((elem) => {
                cy.wrap(elem).find(`.price`)
                    .should('be.visible')
                    .invoke('text')
                    .then((text) => {
                        expect(text.trim(), 'Text should not be empty').to.not.be.empty;
                    })
            })
        cy.log(`Each product card is having price is available`)
    }

    async validateProductIncrementalAvailability() {
        cy.get(this.productCardBlock)
            .each((elem) => {
                cy.wrap(elem).find(`.cmp__incremental`)
                    .should('be.visible')
            })
        cy.log(`Each product card is having quantity increment section is available`)
    }

    async validateProductButtonAvailability() {
        cy.get(this.productCardBlock)
            .each((elem) => {
                cy.wrap(elem).find(`.cmp-product-card__button`)
                    .should('be.visible')
            })
        cy.log(`Each product card is having button section is available`)
    }

    async validateProductCountLabelAvailability() {
        cy.get(this.rightSearchSection)
            .find(`.cmp-searchresults__load-more-text`)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.include('Showing')
                cy.log(`The product count text "${text}" is visible`)
            })
    }

    async validateProductLodeMoreAvailability(buttonText: string) {
        cy.get(this.rightSearchSection)
            .find(`#btnLoadMore`)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.include(buttonText)
                cy.log(`The product load more button text "${text}" is visible`)
            })
    }

    async validateBuildAssistanceImage() {
        cy.get(this.buildAssistanceImage)
            .should('be.visible')
        cy.log(`Build assistance image is available on shop page`)
    }

    async validateBuildAssisstanceButton(buttonText:string){
        cy.get(this.buildAssistanceButton)
        .should('be.visible')
        .invoke('text')
        .then((text) =>{
            expect(text.trim()).to.be.equal(buttonText)
        })
    }
}