import {Then} from "@badeball/cypress-cucumber-preprocessor"
import { Enhance } from "../pages/EnhancePage"

const enhancePage: Enhance = new Enhance()


Then(`validate the heading of enhance page {string}`, (headingText:string) =>{
    enhancePage.getHelperComponent.validatePageHeading(headingText)
})

Then(`validate the sub navigation text as {string} of enhance page`, (headingText:string) =>{
    enhancePage.validateSubNavigationText(headingText)
})

Then(`validate the sub navigation jump link as {string} of enhance page`, (jumpLinkText:string) =>{
    const text = jumpLinkText.split(',').map(text => text.trim())
    enhancePage.validateSubNavigationJumpLink(text)
}) 

Then(`validate the sub navigation button text as {string} of enhance page`, (buttonText:string) =>{
    enhancePage.validateSubNavigationButton(buttonText)
})

/////////////////////////////////////////////////

Then(`validate the media gallery title as {string} of enhance page`, (title:string) =>{
    enhancePage.validateMediaGalleryTitle(title)
})

Then(`validate the media gallery swatch images are visible of enhance page`, () =>{
    enhancePage.validateMediaGallerySwatchImagesCount()
})

Then(`validate the media gallery learn more button are visible of enhance page`, () =>{
    enhancePage.validateMediaGalleryLearnMoreButton()
})

Then(`validate the media gallery sample images are visible of enhance page`, () =>{
    enhancePage.validateMediaGallerySampleImageCount()
})

Then(`validate the media gallery sample images title {string} of enhance page`, (title:string) =>{
    enhancePage.validateMediaGallerySampleCardTitle(title)
})

Then(`validate the media gallery sample images button text {string} of enhance page`, (buttonText:string) =>{
    enhancePage.validateMediaGallerySampleCardButtonText(buttonText)
})

Then(`validate the media gallery sample images price are visible of enhance page`, () =>{
    enhancePage.validateMediaGallerySampleCardPrice();
})

Then(`validate the media gallery have same count for each swatch image of enhance page` ,() =>{
    enhancePage.validateImageRespectiveCount()
})

Then(`validate the media gallery carousel text as {string} of enhance page`, (carsoulText:string) =>{
    var carousel = carsoulText.split(',').map(text => text.trim())
    enhancePage.validateMediaCarousel(carousel);
})

//////////////////////////////////////////////

Then(`validate the profile having heading text as {string} of enhance page`, (headingText:string) =>{
    enhancePage.validateProfileTitle(headingText)
})

Then(`validate the profile having image count as {int} of enhance page`, (imageCount:number) =>{
    enhancePage.validateProfileImageCount(imageCount)
})

Then(`validate the profile having image text as {string} of enhance page`, (imageText:string) =>{
    const text = imageText.split(',').map(value => value.trim())
    enhancePage.validateProfileImageHeading(text)
})

///////////////////////////////////////////////////////////////////////////////


Then(`validate the image teaser with text as {string} is visible on enhance page`, (imagetext:string) =>{
    enhancePage.validateImageTeaserImageAvailable(imagetext)
})

Then(`validate the image teaser title having text {string} is visible on enhance page`, (titleText:string) =>{
    enhancePage.validateImageTeaserTitle(titleText)
})

Then(`validate the image teaser button having text {string} is visible on enhance page`, (buttontext:string) =>{
    enhancePage.validateImageTeaserButtonText(buttontext)
})

//////////////////////////////////

Then(`validate the full width image teaser having heading as {string} at position {int} on enhance page`
    , (heading:string, position:number) =>{
        enhancePage.validateFullWidthImageTeaserImageAtIndex(heading, position)
})

Then(`validate the full width image teaser having button text as {string} on enhance page`, (buttonText:string) =>{
    enhancePage.validateFullWidthImageTeaserButtonText(buttonText);
})