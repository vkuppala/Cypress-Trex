import { Helper } from "../utility/helper";
import 'cypress-iframe'

export class GuestCheckout {

    helperComponent: Helper = new Helper();

    private readonly emailText = "#email"
    private readonly phoneNumberText = "#telephone"
    private readonly newsLetterCheckbox = "input[name='subscribe_to_newsletter']"
    private readonly shippingAddrFirstName = "#firstname"
    private readonly shippingAddrLastName = "#lastname"
    private readonly shippingAddrLine1 = "#street0"
    private readonly shippingAddrPhoneNumber = "#telephone"
    private readonly shippingAddrCity = "#city"
    private readonly shippingAddrCountry = "select[name='country']"
    private readonly shippingAddrState = "select[name='region[region_id]']"
    private readonly shippingAddrPostalCode = "input[name='postcode']"
    private readonly shippingAddrUpdateButton = "//span[text() = 'Update']"
    private readonly billingCheckboxSameAddress = "input[name='sameAsShippingCheckbox']"
    private readonly labelBillTo = "//div[text()='Bill to']"
    private readonly cardNumberIframe = `#braintree-hosted-field-number`
    private readonly cardNumber = "#credit-card-number"
    private readonly expiryIframe = `#braintree-hosted-field-expirationDate`
    private readonly expiry = "#expiration"
    private readonly cvvIframe = `#braintree-hosted-field-cvv`
    private readonly cvv = "#cvv"
    private readonly placeOrderButton = `button[value='submit']`
    
    get getHelperComponent() {
        return this.helperComponent;
    }

    enterEmailInformation() {
        cy.get(this.emailText).should('be.visible');
        cy.log(`Email input field is visible`)
        cy.get(this.emailText).type(this.helperComponent.getJsonData("contactInformation","email"))
        cy.get(this.emailText).should('have.value', this.getHelperComponent.getJsonData("contactInformation",'email'))
        cy.log(`Email ${this.getHelperComponent.getJsonData("contactInformation",'email')} is entered successfully`)
    }
    
    enterPhoneInformation() {
        cy.get(this.phoneNumberText).should('be.visible');
        cy.log(`Phone input field is visible`)
        cy.get(this.phoneNumberText).type(this.getHelperComponent.getJsonData("contactInformation",'phone'))
        cy.get(this.phoneNumberText).invoke('val').then((value) => {
            expect((value as string).replace(/[^a-zA-Z0-9]/g, ""))
            .to.equal(this.getHelperComponent.getJsonData("contactInformation",'phone'))
        })
        cy.log(`Contact ${this.getHelperComponent.getJsonData("contactInformation",'phone')} is entered successfully`)
    }
    
    checkAndValidateNewsLetter() {
        cy.get(this.newsLetterCheckbox).check()
        cy.get(this.newsLetterCheckbox).should('be.checked')
        cy.log(`Subscribe to new letter checkbox is checked`)
    }
    
    clickOnContinueButton(){
        cy.contains("span", "Continue").click();
        cy.log(`Continue button is clicked`)
    }
    
    enterShippingFirstName(){
        cy.get(this.shippingAddrFirstName, {timeout: 30000}).should('be.visible')
        cy.log(`Shipping Address first name field is visible`)
        cy.get(this.shippingAddrFirstName).type(this.getHelperComponent.getJsonData('shippingAddress','firstName'))
        cy.get(this.shippingAddrFirstName).should('have.value',this.getHelperComponent.getJsonData('shippingAddress','firstName'))
        cy.log(`First Name ${this.getHelperComponent.getJsonData('shippingAddress','firstName')} is entered successfully`)
    }

    enterShippingLastName(){
        cy.get(this.shippingAddrLastName).should('be.visible')
        cy.log(`Shipping Address last name field is visible`)
        cy.get(this.shippingAddrLastName).type(this.getHelperComponent.getJsonData('shippingAddress','lastName'))
        cy.get(this.shippingAddrLastName).should('have.value',this.getHelperComponent.getJsonData('shippingAddress','lastName'))
        cy.log(`Last Name ${this.getHelperComponent.getJsonData('shippingAddress','lastName')} is entered successfully`)
    }

    enterShippingAddressLine1(){
        cy.get(this.shippingAddrLine1).should('be.visible')
        cy.log(`Shipping Address Line 1 field is visible`)
        cy.get(this.shippingAddrLine1).type(this.getHelperComponent.getJsonData('shippingAddress','Address'))
        cy.get(this.shippingAddrLine1).should('have.value',this.getHelperComponent.getJsonData('shippingAddress','Address'))
        cy.log(`Address Line 1 ${this.getHelperComponent.getJsonData('shippingAddress','Address')} is entered successfully`)
    }

    enterShippingCity(){
        cy.get(this.shippingAddrCity).should('be.visible')
        cy.log(`Shipping Address city field is visible`)
        cy.get(this.shippingAddrCity).type(this.getHelperComponent.getJsonData('shippingAddress','city'))
        cy.get(this.shippingAddrCity).should('have.value',this.getHelperComponent.getJsonData('shippingAddress','city'))
        cy.log(`City ${this.getHelperComponent.getJsonData('shippingAddress','city')} is entered successfully`)
    }

    enterShippingPhoneNumber(){
        cy.get(this.shippingAddrPhoneNumber).should('be.visible')
        cy.log(`Shipping Address last name field is visible`)
        cy.get(this.shippingAddrPhoneNumber).type(this.getHelperComponent.getJsonData('shippingAddress','phone number'))
        cy.get(this.shippingAddrPhoneNumber).invoke('val').then((value) => {
            expect((value as string).replace(/[^a-zA-Z0-9]/g, ""))
            .to.equal(this.getHelperComponent.getJsonData("shippingAddress",'phone number'))
        })
        cy.log(`Phone Number ${this.getHelperComponent.getJsonData('shippingAddress','phone number')} is entered successfully`)
    }

    enterShippingAddressCountry(){
        cy.get(`${this.shippingAddrCountry} option:selected`).should('be.visible')
        cy.log(`Shipping address country field is visible`)
        var expectedCountryValue = this.getHelperComponent.getJsonData('shippingAddress','country')
        cy.get(`${this.shippingAddrCountry} option:selected`).invoke('text').then((currentValue) =>{
            cy.log(`Currently selected value is ${currentValue}`)
            if(currentValue !== expectedCountryValue.trim()){
                cy.get(this.shippingAddrCountry).select(expectedCountryValue)
                cy.get(`${this.shippingAddrCountry} option:selected`).should('have.text', expectedCountryValue)
            }
            else{
                cy.log(`Value is already available`)
            }
        })
    }

    enterShippingAddressState(){
        cy.get(`${this.shippingAddrState}  option:selected`).should('be.visible')
        cy.log(`Shipping address state field is visible`)
        var expectedStateValue = this.getHelperComponent.getJsonData('shippingAddress','State / Province')
        cy.get(`${this.shippingAddrState}  option:selected`).invoke('text').then((currentValue) =>{
            cy.log(`Currently selected value is ${currentValue}`)
            if(currentValue !== expectedStateValue){
                cy.get(this.shippingAddrState).select(expectedStateValue)
                cy.get(`${this.shippingAddrState}  option:selected`).should('have.text', expectedStateValue)
            }
            else{
                cy.log(`Value is already available`)
            }
        })
    }

    enterShippingPostalCode(){
        cy.get(this.shippingAddrPostalCode).should('be.visible')
        cy.log(`Shipping Address postal code field is visible`)
        cy.get(this.shippingAddrPostalCode).type(this.getHelperComponent.getJsonData('shippingAddress','postal code'))
        cy.get(this.shippingAddrPostalCode).should('have.value',this.getHelperComponent.getJsonData('shippingAddress','postal code'))
        cy.log(`posta; code ${this.getHelperComponent.getJsonData('shippingAddress','postal code')} is entered successfully`)
    }

    validateUpdateButtonVisibility(){
        cy.xpath(this.shippingAddrUpdateButton, {timeout :30000}).should('be.visible')
        cy.log(`shipping address details updated and update button is visible`)
    }

    checkAndValidateSameAddress() {
        cy.get(`${this.billingCheckboxSameAddress}+span`).should('be.visible')
        cy.log(`Check for same address as shipping address is visible`)
        cy.get(`${this.billingCheckboxSameAddress}+span`).click()
        cy.get(this.billingCheckboxSameAddress).should('be.checked')
        cy.log(`Address is same as shipping address checkbox is checked`)
    }

    validateContinueButtonNotVisibility(){
        cy.contains("span", "Continue").should('not.be.visible')
        cy.log(`Continue button is not visible`)
    }

    validateBillToLabel(){
        cy.xpath(this.labelBillTo, {timeout:30000}).should('be.visible')
        cy.log(`Bill to label is visible. Hence billing address is added`)
    }

    loadIframe(frameName: string){
        return cy
        .get(frameName, {timeout:5000})
        .its(`0.contentDocument.body`)
        .should(`not.be.empty`)
        .then(cy.wrap);
    }

    enterCardNumber(){
        this.loadIframe(this.cardNumberIframe).find(this.cardNumber,{timeout:10000}).should('be.visible')
        cy.log(`Card number under payment section is visible`)
        this.loadIframe(this.cardNumberIframe).find(this.cardNumber).type(this.getHelperComponent.getJsonData("card Details","card number"))
        this.loadIframe(this.cardNumberIframe).find(this.cardNumber).should('have.value', this.getHelperComponent.getJsonData("card Details","card number"))
        cy.log(`Card number ${this.getHelperComponent.getJsonData("card Details","card number")} is enetered in field for card number under payment section`)
    }

    enterExpiryDate(){
        this.loadIframe(this.expiryIframe).find(this.expiry,{timeout:10000}).should('be.visible')
        cy.log(`Expiry under payment section is visible`)
        this.loadIframe(this.expiryIframe).find(this.expiry).type(this.getHelperComponent.getJsonData("card Details","expiry"))
        this.loadIframe(this.expiryIframe).find(this.expiry).should('have.value', this.getHelperComponent.getJsonData("card Details","expiry"))
        cy.log(`Expiry ${this.getHelperComponent.getJsonData("card Details","expiry")} is enetered in field for expiry under payment section`)
    }

    enterCVVNUmber(){
        this.loadIframe(this.cvvIframe).find(this.cvv,{timeout:10000}).should('be.visible')
        cy.log(`CVV number under payment section is visible`)
        this.loadIframe(this.cvvIframe).find(this.cvv).type(this.getHelperComponent.getJsonData("card Details","cvv"))
        this.loadIframe(this.cvvIframe).find(this.cvv).should('have.value', this.getHelperComponent.getJsonData("card Details","cvv"))
        cy.log(`CVV number ${this.getHelperComponent.getJsonData("card Details","cvv")} is enetered in field for CVV under payment section`)
    }

    clickPlaceOrderButton(){
        cy.get(this.placeOrderButton).should('be.visible')
        cy.log(`Place order button is visible on guest checkout page`)
        cy.get(this.placeOrderButton).click();
        cy.get(this.placeOrderButton, {timeout:30000}).should('not.exist')
        cy.log(`Place order button is clicked`)
    }
    
}
