package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import pages.locations.CarsGuideHomePageLocators;
import utils.SeleniumDriver;

/**
 * Created by s.milaserdov on 7/27/2018.
 */
public class CarsGuideHomePageActions {

    CarsGuideHomePageLocators carsGuideHomePageLocators = null;

    public CarsGuideHomePageActions(){

        this.carsGuideHomePageLocators = new CarsGuideHomePageLocators();
        PageFactory.initElements(SeleniumDriver.getDriver(),carsGuideHomePageLocators);
    }

    public void moveToCarsForSaleMenu(){

        Actions action = new Actions(SeleniumDriver.getDriver());
        action.moveToElement(carsGuideHomePageLocators.carsForSaleLink).perform();
    }

    public void clickOnSearchCarsMenu(){
        //moveToCarsForSaleMenu();
        carsGuideHomePageLocators.searchCarsLink.click();
    }

    public void clickOnUSedCarsSearchMenu(){

        carsGuideHomePageLocators.usedCarsSearchLink.click();
    }

    public void clickOnFindDealerLink(){

        carsGuideHomePageLocators.findDialerLink.click();
    }

    public void moveToSellMyCarMenu(){
        Actions action = new Actions(SeleniumDriver.getDriver());
        action.moveToElement(carsGuideHomePageLocators.sellMyCarLink).perform();
    }


}
