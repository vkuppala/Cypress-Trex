@deepValidation @regression
Feature: Validate find trex pages with high traffic


Scenario: Validate Find a Trex page
Given User navigates to the url "https://aemqa.trex.com/find-trex/"
Then validate the heading of find Trex page "Find Trex® products near you"
Then validate the input search field with value as "Enter a city or zip code" on find trex page
Then validate the radius dropdown default value as "25 Miles" on find trex page
Then validate search button is visible with text "Find Trex" on find trex page
Then validate search button is disable with text "Find Trex" on find trex page
Then validate the search bar has a link with text "Trex's Privacy Policy"
And validate the retailer initial with main heading as "HELPFUL RESOURCES" and sub heading as "Ready to roll up your sleeves?" 
Then validate the retailer category card with heading as "Plan Your Deck" and link as "/build-your-deck/planyourdeck/" with text as "Start Planning" at index 1
Then validate the retailer category card with heading as "Try Our Deck Starter Tool" and link as "/build-your-deck/planyourdeck/deck-starter/" with text as "Start Designing" at index 2
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"

