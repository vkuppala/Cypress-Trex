@deepValidation @regression
Feature: Validate Railing page with high traffic

Scenario: Validate the Explore Railing by Material" of railing page
Given User navigates to the url "https://aemqa.trex.com/products/railing/"
Then validate the heading as "Trex® Deck Railing" of railing page
Then validate the image title as "Explore Railing by Material" of railing page
Then validate the railing material heading as "Trex® Enhance™ Steel Railing" and button text as "Explore the Enhance Series" at position 1
Then validate the railing material heading as "Trex Enhance® Composite Railing" and button text as "Explore the Enhance Series" at position 1
Then validate the railing material heading as "Trex Select® T-Rail" and button text as "Explore the Select Series" at position 2
Then validate the railing material heading as "Trex Select® Classic Railing" and button text as "Explore the Select Series" at position 2
Then validate the railing material heading as "Trex® Select™ Aluminum Railing" and button text as "Explore the Select Series" at position 2
Then validate the railing material heading as "Trex Transcend® Composite Railing" and button text as "Explore the Transcend Series" at position 3
Then validate the railing material heading as "Trex Signature® Aluminum Railing" and button text as "Explore the Signature Series" at position 3
Then validate the railing material heading as "Trex Signature® Rod Rail" and button text as "Explore the Signature Series" at position 4
Then validate the railing material heading as "Trex Signature® Mesh Railing" and button text as "Explore the Signature Series" at position 4
Then validate the railing material heading as "Trex Signature® Glass Railing" and button text as "Explore the Signature Series" at position 4
Then validate the railing material heading as "Trex Signature® X-Series™ Cable Railing" and button text as "Explore the Signature Series" at position 5
Then validate the railing material heading as "Trex Signature® X-Series™ Frameless Glass Rail" and button text as "Explore the Signature Series" at position 5


Scenario: Validate the "Explore Railing by Budget" of railing page
Given User navigates to the url "https://aemqa.trex.com/products/railing/"
Then validate the image title as "Explore Railing by Budget" of railing page
Then validate the railing material heading as "Trex® Enhance™ Steel Railing" and button text as "Explore the Enhance Series" at position 1
Then validate the railing material heading as "Trex Enhance® Composite Railing" and button text as "Explore the Enhance Series" at position 1
Then validate the railing material heading as "Trex Select® T-Rail" and button text as "Explore the Select Series" at position 2
Then validate the railing material heading as "Trex Select® Classic Railing" and button text as "Explore the Select Series" at position 2
Then validate the railing material heading as "Trex® Select™ Aluminum Railing" and button text as "Explore the Select Series" at position 2
Then validate the railing material heading as "Trex Transcend® Composite Railing" and button text as "Explore the Transcend Series" at position 3
Then validate the railing material heading as "Trex Signature® Aluminum Railing" and button text as "Explore the Signature Series" at position 3
Then validate the railing material heading as "Trex Signature® Rod Rail" and button text as "Explore the Signature Series" at position 4
Then validate the railing material heading as "Trex Signature® Mesh Railing" and button text as "Explore the Signature Series" at position 4
Then validate the railing budget heading as "Trex Signature® Glass Railing" and button text as "Explore the Signature Series" at position 5


Scenario: Validate the "Why Trex is the Best Choice for Deck Railing" on railing page
Given User navigates to the url "https://aemqa.trex.com/products/railing/"
Then validate carousel title as "Why Trex is the Best Choice for Deck Railing" on railing page
Then validate the deck railing carousel control buttons are visible
And validate the deck railing carousel card title as "Designs for Every Style" is available on railing page
And validate the deck railing carousel card title as "Personalize Your Look" is available on railing page
And validate the deck railing carousel card title as "Peace of Mind" is available on railing page
And validate the deck railing carousel card title as "Easy-to-Use Tools" is available on railing page
And validate the deck railing carousel card title as "Installation Made Simple" is available on railing page
And validate the deck railing carousel card title as "Your Project, Our Priority" is available on railing page

Scenario: Validate the "Why Trex is the Best Choice for Deck Railing" on railing page
Given User navigates to the url "https://aemqa.trex.com/products/railing/"
Then validate carousel title as "Explore Railing by Material" on railing page
Then validate the railing by material carousel control buttons are visible
Then validate the railing by material carousel card title as "Metal Deck Railing" with link text as "homeowners who prefer a sleek railing" is available on railing page
Then validate the railing by material carousel card title as "Composite Deck Railing" with link text as "homeowners who appreciate a classic railing look" is available on railing page
Then validate the railing by material carousel card title as "Glass Deck Railing" with link text as "homeowners looking for a clean, contemporary railing design" is available on railing page
Then validate the railing by material carousel card title as "Mesh Deck Railing" with link text as "homeowners drawn to a rustic, industrial, and modern styles" is available on railing page

Scenario: Validate the "Check out our planning tools and resources" on railing page
Given User navigates to the url "https://aemqa.trex.com/products/railing/"
Then validate the heading as "Not sure where to start?" is available for tool section under railing page
Then validate the heading as "Check out our planning tools and resources." is available for tool section under railing page
Then validate the image section contains source text as "cost-calculator" and heading as "Cost Calculator"
Then validate the image section contains source text as "literature" and heading as "Railing Guide"
Then validate the image section contains source text as "aluminum" and heading as "Compare Railing"

Scenario: Validate the "Personalize Your Railing" on railing page
Given User navigates to the url "https://aemqa.trex.com/products/railing/"
Then validate the heading as "Personalize Your Railing" is available for personalize railing under railing page
Then validate the image text as "Outdoor Lighting" with title as "Outdoor Lighting" and description as "Explore" for personalize railing under railing page
Then validate the image text as "Wine Bar Still Images" with title as "ADA Handrails" and description as "Explore" for personalize railing under railing page
Then validate the image text as "sig-fairbanks-031-wy-cw-decking-railing-lighting-dock.tif" with title as "Aluminum Gates" and description as "Explore" for personalize railing under railing page

Scenario: Validate the "FAQs" on railing page
Given User navigates to the url "https://aemqa.trex.com/products/railing/"
Then validate the heading of FAQs as "Still have questions about Trex® Railing? Start with our FAQs."
Then validate the description of FAQs as "Have questions about other products? View all of our FAQs."
Then validate the view more link of FAQs as "View All FAQs"
Then validate multiple list of questions are listed

Scenario: Validate the "Order a sample and footer" on railing page
Given User navigates to the url "https://aemqa.trex.com/products/railing/"
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"
