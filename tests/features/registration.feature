@wip
Feature: User registration
  In order to access the application
  As a new user
  I want to register with valid details

  Scenario: Successful user registration with valid data
    Given the user is on the registration page
    When the user fills the registration form with valid details
    And clicks the register button
    Then the user should be redirected to the login page
