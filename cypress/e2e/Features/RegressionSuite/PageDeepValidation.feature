@deepValidation @regression
Feature: Validate pages with high traffic

Background: Login
Given Navigate to login page

Scenario: Validate the "Deck Railing" product link page
When open "Products" tab
Then click on "Composite Deck Boards" option from "Products" list
Then validate the url of new page contains "decking"
Then validate product having name "Trex Signature®" is visible at position "1"
