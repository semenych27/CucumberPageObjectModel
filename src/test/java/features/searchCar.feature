@Search-Cars
Feature: Acceptance testing to validate Search cars page is working fine
  In order to validate that
  the search cars page is working fine
  we will do acceptance testing

  @Search-Cars-Positive
  Scenario: Validate search cars page

    Given I am on search page "https://www.carsguide.com.au" of carsguide website
    When I move to the menu
      | Menu          |
      | Cars for Sale |
      | Sell My Car   |
    And I click on "Search Cars" link
    And I select Make as "BMW" from AnyMake dropdown
    And I select Model as "1 SERIES" from SelectModel dropdown
    And I select location as "Australia" from SelectLocation dropdown
    And I select price as "$10,000" from Price dropdown
    And I click on Find My Next Car button
    Then I should see list of searched cars from "BMW"
    And page title should be "Bmw 1 Series Under 10000 for Sale | carsguide"