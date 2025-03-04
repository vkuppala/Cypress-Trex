import { Helper } from "../utility/helper";

export class Decking{

    helperComponent: Helper = new Helper();

    private readonly productText = ".cmp-sub-category-details-card h2"

    validateProductAvailability(productName: string, productPosition: number){
        cy.get(this.productText).eq(productPosition - 1).should('be.visible').should('have.text', productName);
        cy.log(`Product ${productName} is available at position on Decking page`)
    }


}