Feature: My Info page
  @regression
  Scenario: Open the My Info page
    Given I am signed in to OrangeHRM
    When I open the "MyInfo" page
    Then the "MyInfo" page is displayed
