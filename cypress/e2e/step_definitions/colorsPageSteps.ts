import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { Colors } from "../pages/colorsPage";

const colors: Colors = new Colors();

Then(`validate the heading as {string} of colors page`, (heading:string) =>{
    colors.validatePageHeading(heading)
})

Then(`validate the left subheading as {string}`, (subHeading:string) =>{
    colors.validateLeftHeading(subHeading)
})

Then(`validate the label {string} and its options {string} are available on colors page`
    ,(label:string, options:string) =>{
        const list = options.split(",").map(value => value.trim())
        colors.validateLeftLabel(label)
        colors.validateFilterOptions(list)
})

Then(`validate the image section`, () =>{
    colors.validateImageSection()
})

Then(`validate the explore section with title as {string} and button link as {string}`, (title:string, linkText:string) =>{
    colors.validateExploreTitle(title)
    colors.validateButtonLink(linkText)
})