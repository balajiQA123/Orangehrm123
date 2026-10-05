Feature: Time page
  @regression
  Scenario: Open the Time page
    Given I am signed in to OrangeHRM
    When I open the "Time" page
    Then the "Time" page is displayed
