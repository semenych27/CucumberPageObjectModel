package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.FindDealerActions;
import pages.locations.FindDialerPageLocators;

import java.util.List;

/**
 * Created by s.milaserdov on 8/7/2018.
 */
public class FindDealerSteps {

    CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
    FindDealerActions findDealerActions = new FindDealerActions();

    @When("^I click on \"([^\"]*)\" link on Home Page$")
    public void i_click_on_link_on_Home_Page(String arg1) throws Throwable {
        carsGuideHomePageActions.clickOnFindDealerLink();
    }

    @And("^I select Make from Make dropdown on Find a Dealer page$")
    public void i_select_Make_from_Make_dropdown_on_Find_a_Dealer_page(List<String> list) throws Throwable {
        String menu = list.get(1);
        findDealerActions.selectCarMake(menu);
    }

    @And("^I select Model from Model dropdown on Find a Dealer page$")
    public void i_select_Model_from_Model_dropdown_on_Find_a_Dealer_page(List<String> list1) throws Throwable {
        String menu1 = list1.get(1);
        findDealerActions.selectCarModel(menu1);
    }

    @And("^I select location as \"([^\"]*)\" from SelectLocation dropdown on Find a Dealer page$")
    public void i_select_location_as_from_SelectLocation_dropdown_on_Find_a_Dealer_page(String carLocation) throws Throwable {
        findDealerActions.selectCarLocation(carLocation);
    }

    @And("^I click on Find Dealer button on Find a Dealer page$")
    public void i_click_on_Find_Dealer_button_on_Find_a_Dealer_page() throws Throwable {
        findDealerActions.clickFindDealerButton();
    }
}