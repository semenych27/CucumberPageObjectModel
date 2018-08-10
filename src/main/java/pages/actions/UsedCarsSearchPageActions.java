package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import pages.locations.CarsGuideHomePageLocators;
import pages.locations.UsedCarsSearchPageLocators;
import utils.SeleniumDriver;

/**
 * Created by s.milaserdov on 8/6/2018.
 */
public class UsedCarsSearchPageActions {

    UsedCarsSearchPageLocators usedCarsSearchPageLocators = null;

    public UsedCarsSearchPageActions(){

        this.usedCarsSearchPageLocators = new UsedCarsSearchPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),usedCarsSearchPageLocators);
    }

    public void selectCarMake(String carBrand){
        Select selectCarMaker = new Select(usedCarsSearchPageLocators.carsMakeDropdown);
        selectCarMaker.selectByVisibleText(carBrand);

    }

    public void selectCarModel(String carModel){
        Select selectCarModel = new Select(usedCarsSearchPageLocators.selectModelDropdown);
        selectCarModel.selectByVisibleText(carModel);

    }

    public void selectCarLocation(String carLocation){
        Select selectCarLocation = new Select(usedCarsSearchPageLocators.selectLocationDropdown);
        selectCarLocation.selectByVisibleText(carLocation);

    }
    public void selectCarPrice(String carPrice){
        Select selectCarPrice = new Select(usedCarsSearchPageLocators.selectPriceDropdown);
        selectCarPrice.selectByVisibleText(carPrice);

    }

    public void clickFindMyNextCarButton(){
        usedCarsSearchPageLocators.findMyNextCarButton.click();
    }
}
