@pageValidation @smoke
Feature: Validate the Web pages

Background: Login
Given Navigate to login page

Scenario: Validate the "Trex Academy" Start Your Project link page
When open "Start Your Project" tab
Then click on "Trex Academy" option from "Start Your Project" list
Then validate the url of new page contains "academy"
Then validate the title of page is "How to Build a Deck: DIY Videos & Resources | Trex"
And validate the partial heading as "Building your dream deck starts here"

Scenario: Validate the "Deck Plans" Start Your Project link page
When open "Start Your Project" tab
Then click on "Deck Plans" option from "Start Your Project" list
Then validate the url of new page contains "deck-plans"
Then validate the title of page is "Free Deck Plans & Deck Designs | Trex"
And validate the heading as "Deck Plans"

Scenario: Validate the "Deck & Railing Duos" Start Your Project link page
When open "Start Your Project" tab
Then click on "Deck & Railing Duos" option from "Start Your Project" list
Then validate the url of new page contains "#"
Then validate the title of page is "Composite Decking | Composite Deck Materials | Trex"
And validate the heading as "Premium Decking and Railing, Designed for Distinctive Spaces."

Scenario: Validate the "Color Selector" Start Your Project link page
When open "Start Your Project" tab
Then click on "Color Selector" option from "Start Your Project" list
Then validate the url of new page contains "colors"
Then validate the title of page is "Trex Color Selector: Select Your Composite Decking Colors | Trex"
And validate the heading as "Trex Color Selector"

Scenario: Validate the "Decking Comparison" Start Your Project link page
When open "Start Your Project" tab
Then click on "Decking Comparison" option from "Start Your Project" list
Then validate the url of new page contains "decking-comparison"
Then validate the title of page is "Decking Comparison | Trex"
And Validate the video title "Decking Defined"

Scenario: Validate the "Cost Calculator" Start Your Project link page
When open "Start Your Project" tab
Then click on "Cost Calculator" option from "Start Your Project" list
Then validate the url of new page contains "productcalculator"
Then validate the title of page is "2024 Deck Cost Calculator | Composite Deck Cost Estimator | Trex | Trex"
And Validate the page headline "Estimate Your Material Costs"

Scenario: Validate the "Deck Starter" Start Your Project link page
When open "Start Your Project" tab
Then click on "Deck Starter" option from "Start Your Project" list
Then validate the url of new page contains "deck-starter"
Then validate the title of page is "Deck Planner | Start Building Your Dream Deck | Trex"
And Validate the splsh title "Design and price your ideal deck"

Scenario: Validate the "AR Deck Visualizer App" Start Your Project link page
When open "Start Your Project" tab
Then click on "AR Deck Visualizer App" option from "Start Your Project" list
Then validate the url of new page contains "augmented-reality-decking-railing-visualizer"
Then validate the title of page is "Free Deck AR Visualizer App for Your Phone | Trex | Trex"
And validate the heading as "Visualize the Possibilities with Trex® AR"

Scenario: Validate the "Deck Desinger" Start Your Project link page
When open "Start Your Project" tab
Then click on "Deck Desinger" option from "Start Your Project" list
Then validate the url of new page contains "deck-designer"
Then validate the title of page is "Deck Design Tool & Online Deck Planner | Trex"
And validate the heading as "Trex® Deck Design Tool & Online Deck Planner"

