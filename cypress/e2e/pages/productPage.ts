import { stringify } from "querystring";
import { Helper } from "../utility/helper";

export class Products {

    helperComponent: Helper = new Helper();

    private readonly pageHeading = "div h1"
    private readonly videoHeading = "div h3.cmp-video-text-hero__title"
    private readonly pageHeadline = "div h2.cmp-intro-page__headline"
    private readonly splashTitle = "div h2.cmp-deckstarter-splash-title"
    private readonly bannerBoard = "#bannerboard"
    private readonly popupClose = "div.cmp-popup-modal__dialog button"

    get getHelperComponent() {
        return this.helperComponent;
    }

    validateURL(keyword: string) {
        cy.url().should('include', keyword)
        cy.log(`URL contains ${keyword} and validated successfully`)
    }

    validateTitle(keyword: string) {
        cy.title().should('equal', keyword)
        cy.log(`Title ${keyword} is validated`)
    }

    validateHeadingVisible(headingText: string) {
        cy.get(this.pageHeading).invoke('text').then(el => el
            .replace('\n', ""))
            .should('eq', headingText)
        cy.log(`Heading of the page ${headingText}is visible`)
    }

    validatePartialText(partialText: string) {
        cy.get(this.pageHeading).should('contain.text', partialText)
        cy.log(`Heading of the page ${partialText}is visible`)
    }

    validateVideoHeading(headingText: string) {
        cy.get(this.videoHeading).invoke('text').should('eq', headingText)
        cy.log(`Heading of video text ${headingText} is validated`)
    }

    validatePageHeading(headingText: string) {
        cy.get(this.pageHeadline).invoke('text').should('eq', headingText)
        cy.log(`Heading of video text ${headingText} is validated`)
    }

    validateSplashTitle(headingText: string) {
        cy.get(this.splashTitle).invoke('text').should('eq', headingText)
        cy.log(`Heading of video text ${headingText} is validated`)
    }

    validateBannerBoard(headingText: string) {
        cy.get(this.bannerBoard).get(" #topHeader").invoke('text').should('eq', headingText)
        cy.log(`Heading of video text ${headingText} is validated`)
    }

    closeModalDialogue() {
        cy.get(this.popupClose, { timeout: 20000 }).should('be.visible').then((el) => {
            cy.wait(5000)
            cy.get(this.popupClose).click({ force: true })
            cy.log(`Modal popup is closed`)

        })
    }
}