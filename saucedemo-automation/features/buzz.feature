Feature: Buzz page
  @regression
  Scenario: Open the Buzz page
    Given I am signed in to OrangeHRM
    When I open the "Buzz" page
    Then the "Buzz" page is displayed
