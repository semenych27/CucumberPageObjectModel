package steps;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pages.actions.CarSearchPageActions;
import pages.actions.CarsGuideHomePageActions;
import utils.SeleniumDriver;

import java.util.List;

/**
 * Created by s.milaserdov on 7/26/2018.
 */
public class SearchCarsSteps {

    CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
    CarSearchPageActions carSearchPageActions = new CarSearchPageActions();

    @Given("^I am on search page \"([^\\\"]*)\" of carsguide website$")
    public void i_am_on_search_page_https_www_carsguide_com_au_of_carsguide_website(String webSiteURL) throws Throwable {
        SeleniumDriver.openPage(webSiteURL);
            }

    @When("^I move to the menu$")
    public void i_move_to_the_menu(List<String> list) throws Throwable {
        String menu = list.get(1);
        System.out.println("Menu selected is " + menu);
        carsGuideHomePageActions.moveToCarsForSaleMenu();
    }

    @And("^I click on \"([^\"]*)\" link$")
    public void i_click_on_link(String searchCars) throws Throwable {
        carsGuideHomePageActions.clickOnSearchCarsMenu();
    }

    @And("^I select Make as \"([^\"]*)\" from AnyMake dropdown$")
    public void i_select_Make_as_from_AnyMake_dropdown(String carBrand) throws Throwable {
        carSearchPageActions.selectCarMake(carBrand);
    }

    @And("^I select Model as \"([^\"]*)\" from SelectModel dropdown$")
    public void i_select_Model_as_from_SelectModel_dropdown(String carModel) throws Throwable {
        carSearchPageActions.selectCarModel(carModel);
    }

    @And("^I select location as \"([^\"]*)\" from SelectLocation dropdown$")
    public void i_select_location_as_from_SelectLocation_dropdown(String carLocation) throws Throwable {
        carSearchPageActions.selectCarLocation(carLocation);
    }

    @And("^I select price as \"([^\"]*)\" from Price dropdown$")
    public void i_select_price_as_from_Price_dropdown(String carPrice) throws Throwable {
       carSearchPageActions.selectCarPrice(carPrice);
    }

    @And("^I click on Find My Next Car button$")
    public void i_click_on_Find_My_Next_Car_button() throws Throwable {
           carSearchPageActions.clickFindMyNextCarButton();
    }

    @Then("^I should see list of searched cars from \"([^\"]*)\"$")
    public void i_should_see_list_of_searched_cars_from(String arg1) throws Throwable {
         System.out.println("Car list is found");
    }

    @And("^page title should be \"([^\"]*)\"$")
    public void page_title_should_be(String expectedTitle) throws Throwable {
        String actualTitle = SeleniumDriver.getDriver().getTitle();
        Assert.assertEquals(actualTitle,expectedTitle);
    }
}
