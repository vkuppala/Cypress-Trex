@shop
Feature: Validate the guest checkout

Background: Login
Given Navigate to login page

@run
Scenario: Select product and Navigate to checkout page
When open "Shop Trex" tab
Then click on "Shop Now" option from "Shop Trex" list
Then validate the url of new page contains "shop"
Then Close the modal popup if visible
Then increase the quantity of product "Coolest Decking" by 1
Then add the product "Coolest Decking" to cart from the list available on shop now page
Then Click on cart icon
Then validate the product "Coolest Decking" added successfully
Then validate the quantity 2 of added product in cart icon
Then Validate the subtotal for added same product 2 times in cart icon
Then Click on view cart button
Then Click on secure checkout button on cart page
Then enter the contact information
Then enter the shipping address information
Then click continue on shipping method
Then click checkbox for same address as shipping for billing