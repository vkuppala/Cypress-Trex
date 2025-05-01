@deepValidation @regression
Feature: Validate Lineage page with high traffic

Scenario: Validate Lineage page
Given User navigates to the url "https://aemqa.trex.com/products/decking/lineage/"
Then validate the heading of lineage page "Trex Transcend® Lineage™ Composite Decking"
Then validate the sub navigation text as "Trex Transcend® Lineage™ Composite Decking"
And validate the sub navigation jump link as "FEATURES,GALLERY,PROFILES,INSPIRATION"
And validate the sub navigation button text as "Shop Now"
Then validate the media gallery title as "Transcend® Lineage™"
Then validate the media gallery swatch images are visible
Then validate the media gallery learn more button are visible
Then validate the media gallery sample images are visible
Then validate the media gallery sample images title "Order a Sample"
And validate the media gallery sample images button text "Add to Cart"
And validate the media gallery sample images price are visible
And validate the media gallery have same count for each swatch image
Then validate the media gallery carousel text as "Heat Mitigating Technology,95% Recycled & Reclaimed Materials,Limited Residential Warranty"
Then validate the image teaser image having text "product-of-the-year" is visible
Then validate the image teaser title having text "Choose Our Award-Winning Decking" is visible
Then validate the image teaser button having text "Learn More" is visible
Then validate the image teaser image having text "WarrantySealUpdate" is visible
Then validate the image teaser title having text "Backed by a 50-Year Limited Residential Warranty" is visible
Then validate the image teaser button having text "View Warranty" is visible
Then validate the profile having heading text as "decking profiles"
Then validate the profile having image count as 2
Then validate the profile having image text as "1” Square Edge Board,1” Grooved Edge Board"
Then validate the full width image teaser having image as "sitting-area" at position 1
Then validate the full width image teaser having title as "See it in Person"
Then validate the full width image teaser having button text as "Order a Sample"
Then validate the full width image teaser having image as "urbanrooftop" at position 2
Then validate the full width image teaser having title as "Find your Inspiration"
Then validate the full width image teaser having button text as "Explore Ideas"
Then validate the inspiration having heading as "@TREXCOMPANY"
Then validate the inspiration having sub-heading as "You Make Us Look Good!"
Then validate the inspiration having images available
Then validate the card container title as "Trex Signature® Railing,Pergola,Outdoor Lighting"
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"
