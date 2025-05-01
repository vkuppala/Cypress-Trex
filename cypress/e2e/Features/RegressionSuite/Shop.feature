@deepValidation @regression
Feature: Validate the Shop Now page from shop trex

Background: Navigate to Shop Now page
Given User navigates to the url "https://aemqa.trex.com/shop/"
Then Close the modal popup if visible

Scenario: Validate the Heading and Banner of shop page
And validate the heading as "Shop Trex "
Then validate the banner image is visible on shop page

Scenario: Validate the left section of shop page
Then validate the left rail navigation link text as "All Products" is available on shop page
Then validate the product link as "Decking,Sample Kits Test,Railing" are available on shop page
Then validate the product link as "Clearance,Outdoor Lighting,Fasteners & Accessories" are available on shop page
Then validate the product link as "HGTV® Smart Home 2023,Best Seller,Gear" are available on shop page
Then validate the product link as "Fencing,Outdoor Furniture,Deck Drainage" are available on shop page
Then validate the product link as "Pergolas & Structures,Outdoor Kitchens,Lattice" are available on shop page
Then validate the product link as "Spiral Stairs,Cornhole,Glass Railing" are available on shop page

Scenario: Validate the left rail link details of shop page
Then validate the left rail link title as "let us help you" on shop page
And validate the left rail link item as "Design Your Deck,Find a Dealer,Find a Builder" on shop page

Scenario: Validate the product card section
Then validate the label of each product card item
Then validate the rating of each product card item
Then validate the price of each product card item
Then validate the increment section of each product card item
Then validate the button of each product card item
Then validate the load more section of product with text as "View More"
Then validate the build assisstance section with button having text as "Let us help"

Scenario: Validate the "Order a sample and footer" on railing page
Given User navigates to the url "https://aemqa.trex.com/products/decking/enhance/"
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"



