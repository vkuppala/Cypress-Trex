import { Helper } from "../utility/helper";

export class MyAccount{
    helperComponent:Helper = new Helper();

    getHelperComponent(){
        return this.helperComponent;
    }

    validateTitle(name : string){
        cy.title().should('equal', name)
        cy.log(`Title ${name} of window is validated`)
    }
}