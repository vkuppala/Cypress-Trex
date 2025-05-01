@deepValidation @regression
Feature: Validate pages with high traffic

Scenario: Validate the deck calculator
Given User navigates to the url "https://aemqa.trex.com/build-your-deck/planyourdeck/deck-cost-landing/"
Then validate the heading as "How Much Does it Cost to Build a Composite Deck?" of deck landing page
Then validate the button text as "Estimate Deck Material Costs" on deck landing page
Then validate the sub heading as "Four Factors That Impact Deck Pricing" of deck landing page
And validate the 4 list items are available of deck landing page
Then validate the sub heading as "Decking Decisions: DIY Deck Build or Hire a Deck Contractor?" of deck landing page
Then validate the button text as "DIY Costs" on deck landing page
Then validate the button text as "Contractor Costs" on deck landing page
Then validate the sub heading as "How to Determine the Cost of Building Your Own Deck" of deck landing page
And validate the 6 list items for 3 grid column are available of deck landing page
Then validate the text of columns as "Determine Square Footage,Factor in Materials,Use Our Cost Calculator" of 3 grid on deck landing page
Then validate the text of columns as "Find Your Building Codes,Stock Up on Equipment,Keep Time in Mind" of 3 grid on deck landing page
And validate the 4 list items for 2 grid column with heading "How to Determine the Labor Cost of Building a Deck" are available of deck landing page
Then validate the text of columns as "Consider Professional Rates,Choose Wisely" of 2 grid on deck landing page
Then validate the text of columns as "Services and Fees,Hire a TrexPro®" of 2 grid on deck landing page
Then validate the sub heading as "Labor Cost to Build a Composite Deck" of deck landing page
Then validate the third level heading as "Building within a budget?" with links "hire a deck builder" are available of deck landing page
Then validate the button text as "Estimate Deck Costs" on deck landing page
Then validate the third level heading as "Want to add a little extra?" with links "Trex® Railing,Trex® Fascia,Trex® RainEscape®,Trex® OutdoorLighting™,Trex® Outdoor Furniture™,Trex® Pergola™,Trex® Lattice™" are available of deck landing page
Then validate the button text as "Browse Add-Ons" on deck landing page
And validate the 2 list items for 2 grid column with heading "Trex is here to make the job easier." are available of deck landing page
Then validate the text of columns as "Ready to DIY?,Want to leave it to the professionals?" of 2 grid on deck landing page
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"
