Feature: Directory page
  @regression
  Scenario: Open the Directory page
    Given I am signed in to OrangeHRM
    When I open the "Directory" page
    Then the "Directory" page is displayed
