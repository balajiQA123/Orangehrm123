Feature: Leave page
  @regression
  Scenario: Open the Leave page
    Given I am signed in to OrangeHRM
    When I open the "Leave" page
    Then the "Leave" page is displayed
