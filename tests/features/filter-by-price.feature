@filter
Feature: User should be able to filter products using price range slider

Scenario: verify item price are within the price range set by the user

Given the user is on the homepage
When the user sets the price range to 10 and 50
Then all visible product prices should be between 10 and 50