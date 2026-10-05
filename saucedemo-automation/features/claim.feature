Feature: Claim page
  @regression
  Scenario: Open the Claim page
    Given I am signed in to OrangeHRM
    When I open the "Claim" page
    Then the "Claim" page is displayed
