import { Helper } from "../utility/helper";

export class OrderConfirmation {

    helperComponent: Helper = new Helper();
    public static order:string = ""

    private readonly orderNumber = "div[class*='orderNumber']>span"

    get getHelperComponent() {
        return this.helperComponent;
    }

    getOrderNumber() { 
        cy.wait(10000)
        this.getHelperComponent.waitForLoadingToComplete()
        cy.get(this.orderNumber).should('be.visible',{timeout:20000})
        cy.log(`Oder number is visible`)
        cy.get(this.orderNumber).invoke('text').then((val: string) =>{
            OrderConfirmation.order = val.trim();
            cy.log(`The order number is ${OrderConfirmation.order}`)
        })
    }
}