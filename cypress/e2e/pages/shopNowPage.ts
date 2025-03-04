import { Helper } from "../utility/helper";

export class ShopNow {

    helperComponent: Helper = new Helper();
    public prodValue: number = 0;;


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
        cy.get(this.cartIconText).should('be.visible');
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

    getProductPrice(productName: string){
       cy.xpath(this.productAmount.replace('productName', productName)).invoke('text')
       .then((elem :string) =>{
        this.prodValue = parseFloat(elem.replace(/[^0-9.-]+/g,""))
        cy.log(`The price of the ${productName} is ${this.prodValue}`)
    })
    }

    validateProductQuantityCartIcon(quantity: number){
        cy.get(this.cartIconProductQuantity).invoke('val').should('equal', String(quantity))
        cy.log(`Quantity of product ${quantity} in cart icon is validated`)
    }

    validateTotalAmountCartIcon(quantity: number){
        cy.xpath(this.cartIconSubTotal).invoke('text')
        .then(elem =>{            
            expect(this.prodValue * quantity).to.equal(parseFloat(elem))
            cy.log(`Subtotal of amount $${elem} in mini cart icon is validated successfully`)
        })
    }

    clickOnViewCheckout() {
        cy.xpath(this.viewCartButton).should('be.visible')
        cy.log(`View cart button is visible on mini cart`)
        cy.xpath(this.viewCartButton).click();
        cy.log(`View cart button is clicked`)
    }

}