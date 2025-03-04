@pageValidation @smoke
Feature: Validate the Web pages

Background: Login
Given Navigate to login page
# Then open the signIn link dropdown
# Then Click on the signIn link option
# When User enters the login credentials
# Then click on signIn button to login
# Then validate successful login 

Scenario: Validate the "Composite Deck Boards" product link page
When open "Products" tab
Then click on "Composite Deck Boards" option from "Products" list
Then validate the url of new page contains "decking"
Then validate the title of page is "Composite Decking Boards & Products | Trex"
And validate the heading as "Explore Trex® Composite Decking"

Scenario: Validate the "Deck Railing" product link page
When open "Products" tab
Then click on "Deck Railing" option from "Products" list
Then validate the url of new page contains "railing"
Then validate the title of page is "Trex® Deck Railing | Trex"
And validate the heading as "Trex® Deck Railing"

Scenario: Validate the "Out Door Deck Lighting" product link page
When open "Products" tab
Then click on "Outdoor Deck Lighting" option from "Products" list
Then validate the url of new page contains "deck-lighting"
Then validate the title of page is "Trex® Outdoor Deck Lighting™ | Trex"
And validate the heading as "Trex® Outdoor Lighting™"  

Scenario: Validate the "Cladding" product link page
When open "Products" tab
Then click on "Cladding" option from "Products" list
Then validate the url of new page contains "cladding"
Then validate the title of page is "Complete Guide to Trex® Cladding™ | Trex"
And validate the partial heading as "Complete Guide to"
And validate the partial heading as "Trex® Composite Cladding™"

Scenario: Validate the "Deck Fasteners & Accessories" product link page
When open "Products" tab
Then click on "Deck Fasteners & Accessories" option from "Products" list
Then validate the url of new page contains "fasteners-tools"
Then validate the title of page is "Trex Hideaway® Fasteners & Tools | Trex"
And validate the heading as "Trex Transcend® Composite Decking"

Scenario: Validate the "Fascia" product link page
When open "Products" tab
Then click on "Fascia" option from "Products" list
Then validate the url of new page contains "fascia"
Then validate the title of page is "Trex® Fascia Boards | Trex"
And validate the heading as "Trex® Composite Fascia Boards"


Scenario: Validate the "Outdoor Deck Furniture" product link page
When open "Products" tab
Then click on "Outdoor Deck Furniture" option from "Products" list
Then validate the popup for external website is visible
Then click on "Cancel" button

Scenario: Validate the "Deck Drainage System" product link page
When open "Products" tab
Then click on "Deck Drainage System" option from "Products" list
Then validate the url of new page contains "rainescape"
Then validate the title of page is "Trex RainEscape® Under-Deck Drainage System | Trex"
And validate the heading as "Trex® RainEscape® Under-Deck Drainage System"

Scenario: Validate the "Fencing" product link page
When open "Products" tab
Then click on "Fencing" option from "Products" list
Then validate the url of new page contains "fencing"
Then validate the title of page is "Trex® Composite Fencing | Trex"
And validate the heading as "Trex® Composite Fencing"

Scenario: Validate the "Pergola" product link page
When open "Products" tab
Then click on "Pergola" option from "Products" list
Then validate the url of new page contains "pergola"
Then validate the title of page is "Trex® Pergola™ | Trex"
And validate the heading as "Trex® Pergola™"

Scenario: Validate the "Outdoor Kitchens" product link page
When open "Products" tab
Then click on "Outdoor Kitchens" option from "Products" list
Then validate the popup for external website is visible
Then click on "Cancel" button

Scenario: Validate the "Lattice" product link page
When open "Products" tab
Then click on "Lattice" option from "Products" list
Then validate the popup for external website is visible
Then click on "Cancel" button

Scenario: Validate the "Spiral Stairs" product link page
When open "Products" tab
Then click on "Spiral Stairs" option from "Products" list
Then validate the popup for external website is visible
Then click on "Cancel" button


Scenario: Validate the "Cornhole" product link page
When open "Products" tab
Then click on "Cornhole" option from "Products" list
Then validate the popup for external website is visible
Then click on "Cancel" button


Scenario: Validate the "Joist Protection" product link page
When open "Products" tab
Then click on "Joist Protection" option from "Products" list
Then validate the popup for external website is visible
Then click on "Cancel" button


Scenario: Validate the "Glass" product link page
When open "Products" tab
Then click on "Glass" option from "Products" list
Then validate the popup for external website is visible
Then click on "Cancel" button