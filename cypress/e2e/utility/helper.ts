import { Before } from '@badeball/cypress-cucumber-preprocessor'

export class Helper {
    readonly spinner = "#root div[class*='loader_circle']"
    static dataRead: any  // Declare dataRead as a class property

    constructor() {
        Before(function () {
            // Intercept network requests (if needed for your tests)
            cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

            // Read the fixture file asynchronously and assign it to the class property
            cy.fixture('example').then((data) => {
                Helper.dataRead = data  // Assign the fixture data to dataRead
            })
        })
    }

    // Modify getJsonData to return the wrapped value (Chainable) correctly
    getJsonData(infoType:string,key: string) {
        if(Helper.dataRead && Helper.dataRead[infoType][key] !== undefined){
            return Helper.dataRead[infoType][key] // Return the value wrapped in a Cypress Chainable
        }
        else{
            throw new Error(`key ${key} is not found in JSON data`)
        }
    }

    waitForLoadingToComplete() {
        cy.get(this.spinner, { timeout: 120000 }).should('not.exist')
    }

    waitForGivenTime(amount:number, unit:string){
        switch (unit) {
            case "seconds":
                cy.wait(amount*1000)
                break;
            case "minutes":
                cy.wait(amount * 60 * 1000)
                break;
            default:
                break;
        }
        cy.wait
    }
}
