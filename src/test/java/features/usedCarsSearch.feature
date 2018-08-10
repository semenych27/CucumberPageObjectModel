@Used-Search-Cars
Feature: Acceptance testing to validate Used Search cars page is working fine
  In order to validate that
  theUSed  search cars page is working fine
  we will do acceptance testing

  @Used-Search-Cars-Positive
  Scenario: Validate used search cars page

    Given I am on search page "https://www.carsguide.com.au" of carsguide website
    When I move to the menu
      | Menu          |
      | Cars for Sale |
      | Sell My Car   |
    And I click on "Used Search Cars" link on Used Search Car page
    And I select Make as "AUDI" from AnyMake dropdown
    And I select Model on Used Search Car page
      |  carModel     |
      |  A4           |
      |  A3           |
    And I select location as "SA - All" from SelectLocation dropdown on Used Search Car page
    And I select price as "$2,000" from Price dropdown on Used Search Car page
    And I click on Find My Next Car button on Used Search Car page
    Then I should see list of searched cars from "Audi" on Used Search Car page
    And page title should be "Used Audi A4 Under 2000 for Sale SA | carsguide"