Feature: Dashboard page
  @regression
  Scenario: Open the Dashboard page
    Given I am signed in to OrangeHRM
    When I open the "Dashboard" page
    Then the "Dashboard" page is displayed
