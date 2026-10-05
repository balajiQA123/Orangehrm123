Feature: Recruitment page
  @regression
  Scenario: Open the Recruitment page
    Given I am signed in to OrangeHRM
    When I open the "Recruitment" page
    Then the "Recruitment" page is displayed
