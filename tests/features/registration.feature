Feature: User Registration
  Scenario: Verify registerion with valid details
    Given user is on the registration page
    When user enters valid registration details
    And user submits the form
    Then registration should be successful

  Scenario: Verify registration with missing fields
    Given user is on the registration page
    When user does not fill in required fields
    And user submits the form
    Then error message for missing fields should be shown
