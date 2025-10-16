Feature: User Login

  Scenario: Verify successful login with valid credentials
    Given user navigates to the login page
    When user enters valid username and password
    And user click the login button
    Then user should see the user dashboard

  # Scenario: Verify unsuccessful login with invalid password
  #   Given user navigates to the login page
  #   When user enters invalid username or password
  #   And user click the login button
  #   Then user should see an error message

  # Scenario: Verify unsuccessful login with invalid username and password
  #   Given user navigates to the login page
  #   When user enters invalid username and password
  #   And user click the login button
  #   Then user should see an error message
