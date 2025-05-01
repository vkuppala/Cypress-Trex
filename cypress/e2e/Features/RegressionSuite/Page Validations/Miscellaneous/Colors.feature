@deepValidation @regression
Feature: Validate colors page with high traffic


Scenario: Validate the colors page heading and Left section
Given User navigates to the url "https://aemqa.trex.com/deck-ideas/colors/"
Then validate the heading as "Trex Color Selector" of colors page
Then validate the left subheading as "Find the perfect deck color that speaks to you."
Then validate the label "Filter By:" and its options "All,SunComfortable,Fire-Rated,popular,Browns,Greys,Neutrals,Reds" are available on colors page

Scenario: Validate the Image section
Given User navigates to the url "https://aemqa.trex.com/deck-ideas/colors/"
Then validate the image section

Scenario: Validate the Explore ideas section
Given User navigates to the url "https://aemqa.trex.com/deck-ideas/colors/"
Then validate the explore section with title as "Seeking more inspiration?" and button link as "Explore Ideas"
Then validate academy title as "Try Our Additional Planning Tools" and options available are "COST CALCULATOR,Deck Starter,deck designer"

Scenario: Validate the "Order a sample and footer" on railing page
Given User navigates to the url "https://aemqa.trex.com/deck-ideas/colors/"
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"


