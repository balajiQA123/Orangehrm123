Feature: OrangeHRM authentication
  As an HR administrator
  I want to sign in to OrangeHRM
  So that I can access the dashboard

  @smoke
  Scenario: Admin signs in and out successfully
    Given the OrangeHRM login page is open
    When the admin signs in with valid credentials
    Then the OrangeHRM dashboard is displayed
    When the admin signs out
    Then the OrangeHRM login page is displayed