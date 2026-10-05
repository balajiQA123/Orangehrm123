Feature: Successful OrangeHRM login
  As an HR administrator
  I want to sign in to OrangeHRM
  So that I can access the dashboard

  @smoke @regression
  Scenario: Administrator signs in and signs out
    Given the OrangeHRM login page is open
    When I sign in to OrangeHRM with valid credentials
    Then the OrangeHRM dashboard is displayed
    When I sign out of OrangeHRM
    Then the OrangeHRM login form is displayed
