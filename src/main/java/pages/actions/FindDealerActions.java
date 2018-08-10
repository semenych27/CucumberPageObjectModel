package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import pages.locations.FindDialerPageLocators;
import utils.SeleniumDriver;

/**
 * Created by s.milaserdov on 8/7/2018.
 */
public class FindDealerActions {

    FindDialerPageLocators findDialerPageLocators = null;

    public FindDealerActions(){
        this.findDialerPageLocators = new FindDialerPageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),findDialerPageLocators);
    }

    public void selectCarMake(String carMake){
        Select selectCarMaker = new Select(findDialerPageLocators.selectMakeDropdown);
        selectCarMaker.selectByVisibleText(carMake);
    }

    public void selectCarModel(String carModel){
        Select selectCarMaker = new Select(findDialerPageLocators.selectModelDropdown);
        selectCarMaker.selectByVisibleText(carModel);
    }

    public void selectCarLocation(String carLocation){
        Select selectCarLocation = new Select(findDialerPageLocators.selectLocationDropdown);
        selectCarLocation.selectByVisibleText(carLocation);
    }

    public void clickFindDealerButton(){
        findDialerPageLocators.findDealersButton.click();
    }
}
