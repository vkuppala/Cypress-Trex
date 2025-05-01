@deepValidation @regression
Feature: Validate find a builder pages with high traffic


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

