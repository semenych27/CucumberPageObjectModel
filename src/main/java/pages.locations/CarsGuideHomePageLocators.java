package pages.locations;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/**
 * Created by s.milaserdov on 7/26/2018.
 */
public class CarsGuideHomePageLocators {

    @FindBy(how = How.LINK_TEXT,using = "Cars For Sale")
    public WebElement carsForSaleLink;

    @FindBy(how = How.LINK_TEXT,using = "Sell My Car")
    public WebElement sellMyCarLink;
    
    @FindBy(how = How.LINK_TEXT,using = "Car Reviews")
    public WebElement carReviewsLink;

    @FindBy(how = How.LINK_TEXT,using = "Search Cars")
    public WebElement searchCarsLink;

    @FindBy(how = How.LINK_TEXT,using = "Used Cars Search")
    public WebElement usedCarsSearchLink;

    @FindBy(how = How.LINK_TEXT,using = "Find a Dealer")
    public WebElement findDialerLink;

}
