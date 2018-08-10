package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import pages.locations.CarSearchPageLocators;
import utils.SeleniumDriver;

/**
 * Created by s.milaserdov on 7/27/2018.
 */
public class CarSearchPageActions {

    CarSearchPageLocators carSearchPageLocators = null;

    public  CarSearchPageActions(){

        this.carSearchPageLocators = new CarSearchPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),carSearchPageLocators);

    }

    public void selectCarMake(String carBrand){
        Select selectCarMaker = new Select(carSearchPageLocators.carsMakeDropdown);
        selectCarMaker.selectByVisibleText(carBrand);

    }

    public void selectCarModel(String carModel){
        Select selectCarModel = new Select(carSearchPageLocators.selectModelDropdown);
        selectCarModel.selectByVisibleText(carModel);

    }

    public void selectCarLocation(String carLocation){
        Select selectCarLocation = new Select(carSearchPageLocators.selectLocationDropdown);
        selectCarLocation.selectByVisibleText(carLocation);

    }
    public void selectCarPrice(String carPrice){
        Select selectCarPrice = new Select(carSearchPageLocators.selectPriceDropdown);
        selectCarPrice.selectByVisibleText(carPrice);

    }

    public void clickFindMyNextCarButton(){
        carSearchPageLocators.findMyNextCarButton.click();
    }
}
