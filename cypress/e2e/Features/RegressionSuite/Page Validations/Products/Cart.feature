@deepValidation @regression @run
Feature: Validate the Cart page

Background: Login
Given Navigate to login page
When open "Shop Trex" tab
Then click on "Shop Now" option from "Shop Trex" list
Then validate the url of new page contains "shop"
Then Close the modal popup if visible
Then increase the quantity of product "Coolest Decking" by 1
Then add the product "Coolest Decking" to cart from the list available on shop now page
Then Click on cart icon
Then validate the product "Coolest Decking" added successfully

Scenario: Validate the Cart items on cart page
Given User navigates to the url "https://aemqa.trex.com/shop/cart/"
Then validate the heading of page as "Your Cart" on cart page
Then validate the product contains title "Coolest Decking" is visible on cart page
Then validate the quantity 2 of added product on cart page
Then Validate the price of product is visible on cart page
Then validate the button text as "Edit Item" is visible on cart page
Then validate the button text as "Save for Later" is visible on cart page
Then validate the button text as "Remove" is visible on cart page

Scenario: Validate the order summary on cart page
Given User navigates to the url "https://aemqa.trex.com/shop/cart/"
Then validate the heading as "Order Summary" for right section on cart page
Then validate the available line items text as "2 Items" for right section on cart page
Then validate the shipping details label as "Subtotal(excluding shipping and Tax)" for right section on cart page
Then Validate the price of product is visible on cart page
Then validate the subtotal for added same product 2 times for right section on cart page
Then validate the button text as "Secure Checkout" for right section on cart page

Scenario: Validate the "Order a sample and footer" on railing page
Given User navigates to the url "https://aemqa.trex.com/products/decking/enhance/"
Then validate the fragment text "Order a sample,TREX.COM/SHOP,FIND A RETAILER,FIND A BUILDER"
Then validate footer section with title "CUSTOMER SUPPORT" and options available under are "Live Chat Now,Live chat: offline,Contact Us,FAQ,Trex Owners,Customer Resources,Warranties,Warranty Claim,Product Safety,Class Action Settlements,Natural Weathering,Care and Cleaning"
Then validate footer section with title "OUR COMPANY" and options available under are "About Trex,Careers,News,Press,Investor Relations,Recycling,Donation Request,Email Us"
Then validate footer section with title "GET STARTED" and options available under are "Deck Starter Tool,Deck Designer,Deck Cost Calculator,Color Selector,Lighting Calculator,Decking Comparison Tool"
Then validate footer section with title "FOR THE PROS" and options available under are "Trade Resources,Become a Trex Pro,Architects & Specifiers,Builders"
Then validate footer section with title "MORE INFO" and options available under are "Return Policy,Privacy Policy,Security Policy,Human Rights Policy,Vendor and Customer Code of Conduct and Ethics,Environmental Policy,Occupational Health & Safety Policy,Canadian Shoppers,Terms Of Use,California Transparency in Supply,Trex Apparel,Site Map,Find all retailers,Call us: 1-800-BUY-TREX"
