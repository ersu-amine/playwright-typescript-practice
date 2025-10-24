Feature: Add items to shopping cart

  As a user
  I want to add products to my shopping cart
  So that I can purchase them later

  Background:
    Given the user is on the homepage

  Scenario: Add single product to the cart
    When the user selects a product "Thor Hammer"
    And the user clicks the "Add to Cart" button
    Then the shopping cart should contain 1 item
    And the cart total should update accordingly

#   Scenario: Add multiple products to the cart
#     When the user selects a product "Laptop"
#     And the user clicks the "Add to Cart" button
#     And the user selects another product "Headphones"
#     And the user clicks the "Add to Cart" button
#     Then the shopping cart should contain 2 items
#     And the cart total should reflect both products

#   Scenario: Add a product with quantity more than 1
#     When the user selects a product "Smartphone"
#     And the user sets quantity to 3
#     And the user clicks the "Add to Cart" button
#     Then the shopping cart should contain 3 units of "Smartphone"
#     And the cart total should update accordingly
