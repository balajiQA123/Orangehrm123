Feature: Admin page
  @regression
  Scenario: Open the Admin page
    Given I am signed in to OrangeHRM
    When I open the "Admin" page
    Then the "Admin" page is displayed
