@deepValidation @regression
Feature: Validate pages with high traffic

# Background: Login
# Given Navigate to login page

Scenario: Validate the "Deck Railing" product link page
Given User navigates to the url "https://aemqa.trex.com/products/decking/"
Then validate the action link text "Browse Decking Products"
Then validate the product Line cards heading "Trex Signature®,Trex Transcend® Lineage™,Trex Transcend®,Trex Select®,Trex Enhance®"
Then validate the category benefit link has text "Compare All Decking Products"
Then validate the FAQs title "Frequently Asked Questions" and list of questions availability
Then validate academy title as "Try Our Additional Planning Tools" and options available are "COST CALCULATOR,deck designer,ar visualizer app"
Then validate related product heading and its related link
Then validate the gallery button has text "Share your #TrexDecking"
Then validate the gallery button "Load More" button works
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"


Scenario: Validate the home page
Given User navigates to the url "https://aemqa.trex.com/"
Then validate utility navigation list contain "where to buy,order samples,find a builder,literature" links
Then validate search icon is visible on secondary navigation
Then validate canvas text links "Explore Products,Discover our lowcountry retreat,Explore our range of tools" are available
Then validate the title "Calculate Costs" heading "Discover which products fit your budget." and paragraph "Estimate material costs" at index 1
Then validate the title "Color Selector" heading "Which hue says \"you\"?" and paragraph "Explore deck colours" at index 2
Then validate the title "Order a sample" heading "Get a closer look." and paragraph "Shop decking samples" at index 3
Then validate image slider handle has "::before" element on home page
Then validate image slider handle has "::after" element on home page
Then validate image slider handle has link "See the advantages of Trex" is available
Then validate media callout heading "ROT, WARP OR SPLINTER#NEED SEASONAL PAINTING, SEALING OR STAINING#FADE OR STAIN#BECOME FOOD FOR TERMITES" is available
Then validate media callout heading with link text "See the Advantages" is available
Then validate dynamic media having "Ideas" with 3 option and "See More" button link
Then validate the gallery button has text "Share your #TrexDecking"
Then validate the gallery button "Load More" button works
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"


@run
Scenario: Validate Find a builder page
Given User navigates to the url "https://aemqa.trex.com/find-a-builder/"
Then validate the heading of builder page "Find a TrexPro® deck builder"
Then validate the input search field with value as "Enter a city or zip code"
Then validate the radius dropdown default value as "25 Miles"
Then validate search button is visible with text "Search"
Then validate the search pro heading as "Who are TrexPro® deck builders?"
Then validate the search pro item has text "HAS AN INDEPEDENT CONTRACTOR'S LICENSE, AS REQUIRED#TRAINED IN TREX PRODUCTS & INSTALLATION#CARRIES GENERAL LIABILITY INSURANCE, AS REQUIRED"
Then validate the thumb card image has count 3 with text as "TrexPro® Platinum" for platinum and text as "TrexPro® Gold" for gold
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"
