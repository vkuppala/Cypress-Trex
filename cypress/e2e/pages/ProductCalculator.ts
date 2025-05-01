import { Helper } from "../utility/helper";

export class ProductCalculator{

    helperComponent : Helper = new Helper()

    private readonly pageHeading = ".cmp-intro-page__headline"
    private readonly quickEstimateButton = "#quickEstimateSteps"
    private readonly detailedEstimateButton = "#detailedEstimateSteps"

    validatePageHeading(headingText:string){
        cy.get(this.pageHeading).should('be.visible').should('have.text', headingText)
        cy.log(`Page heading ${headingText} is visible and validated`)
    }

    validateQuickEstimateButtonText(buttonText: string){
        cy.get(this.quickEstimateButton).should('be.visible').should('have.text',buttonText)
        cy.log(`Quick Estimate button is visible having text ${buttonText} is validated`)
    }

    validateDetailEstimateButtonText(buttonText: string){
        cy.get(this.detailedEstimateButton).should('be.visible').should('have.text',buttonText)
        cy.log(`Detail Estimate button is visible having text ${buttonText} is validated`)
    }


    
}