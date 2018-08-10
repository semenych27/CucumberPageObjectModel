@Find-Dealer
Feature: Acceptance testing to validate Find a Dealer cars page is working fine
  In order to validate that
  the Find Dealer cars page is working fine
  we will do acceptance testing

  @Find-Dealer-Positive
  Scenario: Validate Find Dealer cars page

    Given I am on search page "https://www.carsguide.com.au" of carsguide website
    When I move to the menu
      | Menu          |
      | Cars for Sale |
      | Sell My Car   |
    And I click on "Find A Dealer" link on Home Page
    And I select Make from Make dropdown on Find a Dealer page
      |  carMake      |
      |  FORD         |
      |  FIAT         |
    And I select Model from Model dropdown on Find a Dealer page
      |  carModel     |
      |  F100         |
      |  500          |
    And I select location as "ACT - All" from SelectLocation dropdown on Find a Dealer page
    And I click on Find Dealer button on Find a Dealer page
    Then I should see list of searched cars from "Ford" on Used Search Car page
    And page title should be "FORD F100 Dealers ACT | carsguide"