Feature: Maintenance page
  @regression
  Scenario: Verify the protected Maintenance page requires reauthentication
    Given I am signed in to OrangeHRM
    When I open the "Maintenance" page
    Then administrator verification is required to open the Maintenance page
