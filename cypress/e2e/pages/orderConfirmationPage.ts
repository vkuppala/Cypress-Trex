import { Helper } from "../utility/helper";

export class OrderConfirmation {

    helperComponent: Helper = new Helper();
    public static order:string = ""

    private readonly orderNumber = "div[class*='orderNumber']>span"

    get getHelperComponent() {
        return this.helperComponent;
    }

    getOrderNumber() { 
        cy.get(this.orderNumber).should('be.visible')
        cy.log(`Oder number is visible`)
        cy.get(this.orderNumber).invoke('text').then((val: string) =>{
            OrderConfirmation.order = val.trim();
            cy.log(`The order number is ${OrderConfirmation.order}`)
        })
    }
}