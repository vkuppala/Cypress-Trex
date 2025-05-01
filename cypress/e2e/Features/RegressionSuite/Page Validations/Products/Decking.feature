@deepValidation @regression
Feature: Validate Decking page with high traffic

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
