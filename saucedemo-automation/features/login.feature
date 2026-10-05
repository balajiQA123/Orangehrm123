Feature: OrangeHRM login page
  @regression
  Scenario: Reject an invalid password
    Given the OrangeHRM login page is open
    When I sign in to OrangeHRM with an invalid password
    Then an OrangeHRM login error is displayed
