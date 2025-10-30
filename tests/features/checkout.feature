@checkout
Feature: Checkout
    Given the user is on the homepage

  Scenario Outline: Verify user can checkout successfully
    When the user selects a product "Thor Hammer"
    And the user clicks add to cart button
    And user clicks shopping cart icon
    And user click proceed to checkout button
    And user logs in
    And user click proceed to checkout button
    And user fills in the shipping address details and click proceeds to checkout button
    And user select payment method <"payment-method">
    And user enters valid payment details for <"payment-method">
    And user clicks confirm button
    Then user should see an order confirmation message

    Examples:
      | payment-method    |
      | Bank Transfer     |
      | Cash on Delivery  |
      | Credit Card       |
      | Buy Now Pay Later |
      | Gift Card         |

#TODO Scenario with logged in user before adding to cart
#TODO Scenario with continuing as guest user