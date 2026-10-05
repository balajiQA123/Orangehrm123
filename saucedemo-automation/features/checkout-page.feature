Feature: SauceDemo checkout page
  @regression
  Scenario: Open checkout for a cart item
    Given I am signed in to SauceDemo
    When I add the configured product to my cart
    And I open the shopping cart
    And I start checkout
    Then the checkout information form is displayed
