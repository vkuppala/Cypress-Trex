@deepValidation @regression
Feature: Validate Enhance page with high traffic

Scenario: Validate Heading of Enhance page
Given User navigates to the url "https://aemqa.trex.com/products/decking/enhance/"
Then validate the heading of enhance page "Trex Enhance® Composite Decking"
Then validate the sub navigation text as "Trex Enhance® Composite Decking" of enhance page
And validate the sub navigation jump link as "FEATURES,GALLERY,PROFILES,INSPIRATION" of enhance page
And validate the sub navigation button text as "Shop Now" of enhance page

Scenario: Validate Media Carousel of Enhance page
Given User navigates to the url "https://aemqa.trex.com/products/decking/enhance/"
Then validate the media gallery title as "Enhance®" of enhance page
Then validate the media gallery swatch images are visible of enhance page
Then validate the media gallery learn more button are visible of enhance page
Then validate the media gallery sample images are visible of enhance page
Then validate the media gallery sample images title "Order a Sample" of enhance page
And validate the media gallery sample images button text "Add to Cart" of enhance page
And validate the media gallery sample images price are visible of enhance page
And validate the media gallery have same count for each swatch image of enhance page
# Then validate the media gallery carousel text as "Heat Mitigating Technology,95% Recycled & Reclaimed Materials,Limited Residential Warranty" of enhance page

Scenario: Validate Profile of Enhance page
Given User navigates to the url "https://aemqa.trex.com/products/decking/enhance/"
Then validate the profile having heading text as "decking profiles" of enhance page
Then validate the profile having heading text as "fascia profiles" of enhance page
Then validate the profile having image count as 4 of enhance page
Then validate the profile having image text as "1” Grooved Edge Board,1” Square Edge Board,1” x 8” x 12’ Fascia,1” x 12” x 12’ Fascia" of enhance page

Scenario: Validate Image Teaser of Enhance page
Given User navigates to the url "https://aemqa.trex.com/products/decking/enhance/"
Then validate the image teaser with text as "Ready to Build" is visible on enhance page
Then validate the image teaser title having text "Ready to Build?" is visible on enhance page
Then validate the image teaser button having text "Find a Retailer" is visible on enhance page
Then validate the image teaser button having text "Find a Deck Builder" is visible on enhance page

Scenario: Validate Full width Image teaser of Enhance page
Given User navigates to the url "https://aemqa.trex.com/products/decking/enhance/"
Then validate the full width image teaser having heading as 'Choose the hue that says "you".' at position 1 on enhance page
Then validate the full width image teaser having button text as "Choose Your Hue" on enhance page
Then validate the full width image teaser having heading as 'Find the perfect match.' at position 2 on enhance page
Then validate the full width image teaser having button text as "Discover Duos" on enhance page

Scenario: Validate Full width Image teaser of Enhance page
Given User navigates to the url "https://aemqa.trex.com/products/decking/enhance/"
Then validate the inspiration having sub-heading as "@TREXCOMPANY"
Then validate the inspiration having heading as "You Make Us Look Good"
Then validate the inspiration having images available
Then validate the card container title as "Trex Select® Railing,Outdoor Lighting,Cornhole"

Scenario: Validate the "Order a sample and footer" on railing page
Given User navigates to the url "https://aemqa.trex.com/products/decking/enhance/"
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"
