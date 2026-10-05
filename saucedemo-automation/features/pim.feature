Feature: PIM page
  @regression
  Scenario: Open the PIM page
    Given I am signed in to OrangeHRM
    When I open the "PIM" page
    Then the "PIM" page is displayed
