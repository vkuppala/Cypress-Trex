@pageValidation @smoke
Feature: Validate the Web pages

Background: Login
Given Navigate to login page

Scenario: Validate the "Trex vs. The Competition" Why Trex link page
When open "Why Trex" tab
Then click on "Trex vs. The Competition" option from "Why Trex" list
Then validate the url of new page contains "deck-material-competitor-comparison"
Then validate the title of page is "Trex® vs. the Competition: What's the Best Composite Decking? | Trex"
And validate the heading as "Trex® vs. the Competition"

Scenario: Validate the "Eco-Friendly Decking" Why Trex link page
When open "Why Trex" tab
Then click on "Eco-Friendly Decking" option from "Why Trex" list
Then validate the url of new page contains "eco-friendly-decking"
Then validate the title of page is "Recycled Plastic Decking | Synthetic & Plastic Wood Boards | Trex"
And validate the heading as "Eco-Friendly, Recycled Plastic Decking"

Scenario: Validate the "FAQs" Why Trex link page
When open "Why Trex" tab
Then click on "FAQs" option from "Why Trex" list
Then validate the url of new page contains "faq"
Then validate the title of page is "Trex® Composite Decking & Railing FAQs | Trex"
And validate the heading as "Trex® Frequently Asked Questions"


Scenario: Validate the "Environmental, Social & Governance" Why Trex link page
When open "Why Trex" tab
Then click on "Environmental, Social & Governance" option from "Why Trex" list
Then validate the url of new page contains "esg"
Then validate the title of page is "Trex® Environmental Sustainability | Trex"
And validate the heading as "Trex® Environmental, Social and Governance Report"