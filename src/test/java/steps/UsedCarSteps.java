package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.UsedCarsSearchPageActions;

import java.util.List;

/**
 * Created by s.milaserdov on 8/6/2018.
 */
public class UsedCarSteps {

    CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
    UsedCarsSearchPageActions usedCarsSearchPageActions = new UsedCarsSearchPageActions();


    @And("^I click on \"([^\"]*)\" link on Used Search Car page$")
    public void i_click_on_link_on_Used_Search_Car_page(String arg1) throws Throwable {
        carsGuideHomePageActions.clickOnUSedCarsSearchMenu();
    }

    @And("^I select Model on Used Search Car page$")
    public void i_select_Model_on_Used_Search_Car_page(List<String>list) throws Throwable {
       String menu = list.get(1);
       usedCarsSearchPageActions.selectCarModel(menu);
    }

    @And("^I select location as \"([^\"]*)\" from SelectLocation dropdown on Used Search Car page$")
    public void i_select_location_as_from_SelectLocation_dropdown_on_Used_Search_Car_page(String carLocation) throws Throwable {
        usedCarsSearchPageActions.selectCarLocation(carLocation);
    }

    @And("^I select price as \"([^\"]*)\" from Price dropdown on Used Search Car page$")
    public void i_select_price_as_from_Price_dropdown_on_Used_Search_Car_page(String carPrice) throws Throwable {
        usedCarsSearchPageActions.selectCarPrice(carPrice);
    }

    @And("^I click on Find My Next Car button on Used Search Car page$")
    public void i_click_on_Find_My_Next_Car_button_on_Used_Search_Car_page() throws Throwable {
        usedCarsSearchPageActions.clickFindMyNextCarButton();
    }

    @Then("^I should see list of searched cars from \"([^\"]*)\" on Used Search Car page$")
    public void i_should_see_list_of_searched_cars_from_on_Used_Search_Car_page(String arg1) throws Throwable {
       System.out.println("List of used search cars is populated");
    }
}
