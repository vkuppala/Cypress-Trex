@pageValidation @smoke
Feature: Validate the Web pages

Background: Login
Given Navigate to login page

Scenario: Validate the "Order a Sample" Shop Trex link page
When open "Shop Trex" tab
Then click on "Order a Sample" option from "Shop Trex" list
Then Close the modal popup if visible
Then validate the url of new page contains "shop.43"
Then validate the title of page is "Trex Deck Composite Samples, Railing & Outdoor Lighting | Order Now | Trex"
And Validate the banner board "Shop our eco-friendly, low-maintenance"

Scenario: Validate the "Trex in the Aisle" Shop Trex link page
When open "Shop Trex" tab
Then click on "Trex in the Aisle" option from "Shop Trex" list
Then validate the url of new page contains "trex-in-the-aisle"
Then validate the title of page is "How to Find Trex® in Stores | Trex"
And validate the heading as "4 Tips For Shopping Trex In-Aisle"


Scenario: Validate the "Where to Buy" Shop Trex link page
When open "Shop Trex" tab
Then click on "Where to Buy" option from "Shop Trex" list
Then validate the url of new page contains "find-trex"
Then validate the title of page is "Trex® Decking Dealer & Distributor Locator | Trex"
And validate the heading as "Find Trex® products near you"


Scenario: Validate the "Shop Now" Shop Trex link page
When open "Shop Trex" tab
Then click on "Shop Now" option from "Shop Trex" list
Then validate the url of new page contains "shop"
Then validate the title of page is "Trex Deck Composite Samples, Railing & Outdoor Lighting | Order Now | Trex"
And validate the heading as "Shop Trex "


