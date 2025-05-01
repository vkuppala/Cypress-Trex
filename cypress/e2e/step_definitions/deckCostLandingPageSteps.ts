import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { DeckCostLanding } from "../pages/deckCostLandingPage";


const deckCostLanding : DeckCostLanding = new DeckCostLanding()

Then(`validate the heading as {string} of deck landing page` ,(headingText:string) =>{
    deckCostLanding.validatePageHeading(headingText)
})

Then(`validate the button text as {string} on deck landing page`, (buttonText:string) =>{
    deckCostLanding.validateButtonTextLink(buttonText)
})

Then(`validate the sub heading as {string} of deck landing page` ,(headingText:string) =>{
    deckCostLanding.validatePageSubHeading(headingText)
})

Then(`validate the {int} list items are available of deck landing page`, (count:number) =>{
    deckCostLanding.validateSummaryGrid4ColumnCount(count)
})

Then(`validate the {int} list items for 3 grid column are available of deck landing page`, (count:number) =>{
    deckCostLanding.validateSummaryGrid3ColumnCount(count)
})

Then(`validate the text of columns as {string} of 3 grid on deck landing page`, (columnTitle : string) =>{
    var title = columnTitle.split(',').map(value => value.trim())
    deckCostLanding.validateSummaryGrid3ColumnTitle(title)
})

Then(`validate the {int} list items for 2 grid column with heading {string} are available of deck landing page`, (count:number, heading:string) =>{
    deckCostLanding.validatePageSubHeading(heading)
    deckCostLanding.validateSummaryGrid2ColumnCount(count, heading)
})

Then(`validate the text of columns as {string} of 2 grid on deck landing page`, (columnTitle : string) =>{
    var title = columnTitle.split(',').map(value => value.trim())
    deckCostLanding.validateSummaryGrid2ColumnTitle(title)
})

Then(`validate the third level heading as {string} with links {string} are available of deck landing page` ,(subHeading:string, linkText:string) =>{
    var links = linkText.split(",").map(value => value.trim())
    deckCostLanding.validatePageSubHeadingWithSection(subHeading)
    deckCostLanding.validateLinkTextCount(subHeading,links)
})