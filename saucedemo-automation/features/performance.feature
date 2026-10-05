Feature: Performance page
  @regression
  Scenario: Open the Performance page
    Given I am signed in to OrangeHRM
    When I open the "Performance" page
    Then the "Performance" page is displayed
