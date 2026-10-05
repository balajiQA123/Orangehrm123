Feature: SauceDemo checkout
  @smoke @regression
  Scenario: Complete checkout for the configured product
    Given I am signed in to SauceDemo
    When I add the configured product to my cart
    And I open the shopping cart
    Then the configured product is in the cart
    When I start checkout
    And I submit the configured customer details
    Then the order overview contains the configured product
    When I place the order
    Then the order confirmation is displayed
