import { Before } from '@badeball/cypress-cucumber-preprocessor'

export class Helper {
    readonly spinner = "#root div[class*='loader_circle']"
    static dataRead: any  // Declare dataRead as a class property
    orderFilePath: string = "cypress/fixtures/orderList.csv"

    private readonly academyToolContainer = ".cmp-academy-tool-grid-container"
    private readonly experienceFragmentCTA = "div[id^='experiencefragment'][class$='conversion-cta']"
    private readonly footerSection = "div[id^='experiencefragment'][class$='--footer'] .cmp-linklist"
    private readonly pageHeading = "div h1"
    private readonly inspiration = "#inspiration"
    private readonly cardContainer = ".cmp-category-card-container "

    constructor() {
        Before(function () {
            // Intercept network requests (if needed for your tests)
            cy.intercept({ resourceType: /xhr|fetch|-assert/ }, { log: false })

            // Read the fixture file asynchronously and assign it to the class property
            cy.fixture('example').then((data) => {
                Helper.dataRead = data  // Assign the fixture data to dataRead
            })
        })
    }

    // Modify getJsonData to return the wrapped value (Chainable) correctly
    getJsonData(infoType: string, key: string) {
        if (Helper.dataRead && Helper.dataRead[infoType][key] !== undefined) {
            return Helper.dataRead[infoType][key] // Return the value wrapped in a Cypress Chainable
        }
        else {
            throw new Error(`key ${key} is not found in JSON data`)
        }
    }

    waitForLoadingToComplete() {
        cy.get(this.spinner, { timeout: 120000 }).should('not.exist')
    }

    waitForGivenTime(amount: number, unit: string) {
        switch (unit) {
            case "seconds":
                cy.wait(amount * 1000)
                break;
            case "minutes":
                cy.wait(amount * 60 * 1000)
                break;
            default:
                break;
        }
        cy.wait
    }

    saveOrderNumber(orderNumber: string) {
        const headers = "Order Number, Timestamp"
        const newRow = `${orderNumber}, ${new Date().toISOString()}`
        cy.task('fileExists', this.orderFilePath).then((exists) => {
            if (exists) {
                cy.readFile(this.orderFilePath, 'utf8').then((content) => {
                    const newContent = content + `\n${newRow}`
                    cy.writeFile(this.orderFilePath, newContent)
                })
            }
            else {
                cy.writeFile(this.orderFilePath, headers + newRow)
            }
        })
        cy.readFile(this.orderFilePath).should('contain', orderNumber)
    }

    validateAcademyToolContainerTitle(title: string) {
        cy.get(this.academyToolContainer).find(`[class$='-title']`).should('be.visible')
            .should('have.text', title)
        cy.log(`Academy tool has title ${title} available`)
    }

    validateAcademyToolContainerItemTitle(appName: string[]) {
        cy.get(this.academyToolContainer).find(`[class$='subtitle']`)
            .should('have.length', appName.length)
            .each(($el, index) => {
                expect($el.text().trim()).to.eq(appName[index])
                cy.log(`${appName[index]} tool is visible as option under academy tool`)
            })
    }

    validateExperienceFragmentCTA(fragmentName: string[]) {
        cy.get(this.experienceFragmentCTA).find('.cmp-conversion-ctas a > :is(h2,h3)')
            .should('have.length', fragmentName.length, { log: false })
            .each(($el, index) => {
                expect($el.text().trim()).to.eq(fragmentName[index])
                cy.log(`${fragmentName[index]} lable is displayed at page`)
            })
    }

    validateFooterSection(title: string, options: string[]) {
        cy.get(this.footerSection).find('.cmp-linklist__title a')
            .filter((_, elem) => elem.innerText.trim() === title)
            .should('be.visible')
            .should('have.text', title)
        cy.log(`'${title}' title is visible in footer section`)

        cy.get(this.footerSection).find('.cmp-linklist__title')
            .filter((_, elem) => elem.innerText.trim() === title)
            // .siblings()
            .siblings('.cmp-linklist__listitems').find('.cmp-linklist__itemtext')
            .find('a, span')
            .each((elem, index) => {
                cy.wrap(elem).invoke('text').then((text) => {
                    expect(text.trim()).to.eq(options[index])
                    cy.log(`${options[index]} link is available under title '${title}'`)
                })

            })
    }

    validatePageHeading(headingText: string){
        cy.get(this.pageHeading).eq(0).should('be.visible').should('have.text', headingText);
        cy.log(`Page heading "${headingText}" is visible and validated`)
    }

    /////////////////////////////////////////////////////////////////////

    async validateInspirationHeading(headingText:string){
        cy.get(this.inspiration).find('.text h2').should('be.visible').should('have.text', headingText)
        cy.log(`Inspiration section have sub heading text ${headingText} is visible`)
    }

    async validateInspirationSubHeading(subHeadingText:string){
        cy.get(this.inspiration).find('.text h3').should('be.visible').should('have.text', subHeadingText)
        cy.log(`Inspiration section have sub heading text ${subHeadingText} is visible`)
    }

    async validateInspirationImageListCount(){
        cy.get(this.inspiration).find(`div[role='list']>div`).should('be.visible').should('have.length.greaterThan',0)
        cy.log(`Inspiration sections have images available`)
    }

    async validateCardContainerTitle(title:string[]){
        cy.get(this.cardContainer).find(`.cmp-category-card-title`)
        .each((element, index) =>{
            expect(element.text().trim()).to.eq(title[index])
            cy.log(`Card container having image title ${title[index]} is visible on lineage page`)
            cy.get(this.cardContainer).find(`.cmp-category-card-description`).eq(index)
            .should('have.text', 'Explore')
            cy.log(`Card container with title ${title[index]} having description as "Explore" is visible`)
        })
    }

    async validateCardContainerDescription(description:string[]){
        cy.get(this.cardContainer).find(``)
        .each((element, index) =>{
            expect(element.text().trim()).to.eq(description[index])
            cy.log(`Card container having image title ${description[index]} is visible on lineage page`)
        })
    }
}