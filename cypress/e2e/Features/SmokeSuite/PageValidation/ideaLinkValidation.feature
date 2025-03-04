@pageValidation @smoke
Feature: Validate the Web pages

Background: Login
Given Navigate to login page

Scenario: Validate the "Color Selector" Ideas link page
When open "Ideas" tab
Then click on "Color Selector" option from "Ideas" list
Then validate the url of new page contains "colors"
Then validate the title of page is "Trex Color Selector: Select Your Composite Decking Colors | Trex"
And validate the heading as "Trex Color Selector"

Scenario: Validate the "Deck & Railing Duos" Ideas link page
When open "Ideas" tab
Then click on "Deck & Railing Duos" option from "Ideas" list
Then validate the url of new page contains "#"
Then validate the title of page is "Composite Decking | Composite Deck Materials | Trex"
And validate the heading as "Premium Decking and Railing, Designed for Distinctive Spaces."

Scenario: Validate the "Style Inspiration" Ideas link page
When open "Ideas" tab
Then click on "Style Inspiration" option from "Ideas" list
Then validate the url of new page contains "style-inspiration"
Then validate the title of page is "Deck Ideas | Trex"
And validate the heading as "Ideas"

Scenario: Validate the "Expert Advice" Ideas link page
When open "Ideas" tab
Then click on "Expert Advice" option from "Ideas" list
Then validate the url of new page contains "expert-advice"
Then validate the title of page is "Deck Ideas | Trex"
And validate the heading as "Ideas"

Scenario: Validate the "How-to" Ideas link page
When open "Ideas" tab
Then click on "How-to" option from "Ideas" list
Then validate the url of new page contains "how-to"
Then validate the title of page is "Deck Ideas | Trex"
And validate the heading as "Ideas"

Scenario: Validate the "Testimonials" Ideas link page
When open "Ideas" tab
Then click on "Testimonials" option from "Ideas" list
Then validate the url of new page contains "deck-ideas"
Then validate the title of page is "Deck Ideas | Trex"
And validate the heading as "Ideas"

Scenario: Validate the "Seen on Social" Ideas link page
When open "Ideas" tab
Then click on "Seen on Social" option from "Ideas" list
Then validate the url of new page contains "social"
Then validate the title of page is "As Seen On Social | Trex"
And validate the heading as "Seen on Social"
