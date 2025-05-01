import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { Lineage } from "../pages/LineagePage";

const lineagePage: Lineage = new Lineage();

Then(`validate the heading of lineage page {string}`, (headingText:string) =>{
    lineagePage.getHelperComponent.validatePageHeading(headingText)
})

Then(`validate the sub navigation text as {string}`, (headingText:string) =>{
    lineagePage.validateSubNavigationText(headingText)
})

Then(`validate the sub navigation jump link as {string}`, (jumpLinkText:string) =>{
    const text = jumpLinkText.split(',').map(text => text.trim())
    lineagePage.validateSubNavigationJumpLink(text)
})

Then(`validate the sub navigation button text as {string}`, (buttonText:string) =>{
    lineagePage.validateSubNavigationButton(buttonText)
})

////////////////////////////////////////

Then(`validate the media gallery title as {string}`, (title:string) =>{
    lineagePage.validateMediaGalleryTitle(title)
})

Then(`validate the media gallery swatch images are visible`, () =>{
    lineagePage.validateMediaGallerySwatchImagesCount()
})

Then(`validate the media gallery learn more button are visible`, () =>{
    lineagePage.validateMediaGalleryLearnMoreButton()
})

Then(`validate the media gallery sample images are visible`, () =>{
    lineagePage.validateMediaGallerySampleImageCount()
})

Then(`validate the media gallery sample images title {string}`, (title:string) =>{
    lineagePage.validateMediaGallerySampleCardTitle(title)
})

Then(`validate the media gallery sample images button text {string}`, (buttonText:string) =>{
    lineagePage.validateMediaGallerySampleCardButtonText(buttonText)
})

Then(`validate the media gallery sample images price are visible`, () =>{
    lineagePage.validateMediaGallerySampleCardPrice();
})

Then(`validate the media gallery have same count for each swatch image` ,() =>{
    lineagePage.validateImageRespectiveCount()
})

Then(`validate the media gallery carousel text as {string}`, (carsoulText:string) =>{
    var carousel = carsoulText.split(',').map(text => text.trim())
    lineagePage.validateMediaCarousel(carousel);
})

//////////////////////////////////////////////

Then(`validate the image teaser image having text {string} is visible`, (imagetext:string) =>{
    lineagePage.validateImageTeaser_Image(imagetext)
})

Then(`validate the image teaser title having text {string} is visible`, (titleText:string) =>{
    lineagePage.validateImageTeaserTitle(titleText)
})

Then(`validate the image teaser button having text {string} is visible`, (buttontext:string) =>{
    lineagePage.validateImageTeaserButtonText(buttontext)
})

//////////////////////////////////

Then(`validate the profile having heading text as {string}`, (headingText:string) =>{
    lineagePage.validateProfileTitle(headingText)
})

Then(`validate the profile having image count as {int}`, (imageCount:number) =>{
    lineagePage.validateProfileImageCount(imageCount)
})

Then(`validate the profile having image text as {string}`, (imageText:string) =>{
    const text = imageText.split(',').map(value => value.trim())
    lineagePage.validateProfileImageHeading(text)
})

Then(`validate the full width image teaser having image as {string} at position {int}`, (srcText:string, position:number) =>{
    lineagePage.validateFullWidthImageTeaserImageAtIndex(srcText,position);
})

Then(`validate the full width image teaser having title as {string}`, (title:string) =>{
    lineagePage.validateFullWidthImageTeaserTitle(title);
})

Then(`validate the full width image teaser having button text as {string}`, (buttonText:string) =>{
    lineagePage.validateFullWidthImageTeaserButtonText(buttonText);
})

///////////////////////////////////////////////////////////////////////////////

Then(`validate the inspiration having heading as {string}`, (headingText:string) =>{
    lineagePage.getHelperComponent.validateInspirationHeading(headingText);
})

Then(`validate the inspiration having sub-heading as {string}`, (subHeadingText:string) =>{
    lineagePage.getHelperComponent.validateInspirationSubHeading(subHeadingText)
})

Then(`validate the inspiration having images available`, () =>{
    lineagePage.getHelperComponent.validateInspirationImageListCount()
})

Then(`validate the card container title as {string}`, (title:string) =>{
    var titleHeading = title.split(',').map(text => text.trim())
    lineagePage.getHelperComponent.validateCardContainerTitle(titleHeading)
})