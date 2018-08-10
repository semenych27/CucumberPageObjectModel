package pages.locations;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/**
 * Created by s.milaserdov on 8/7/2018.
 */
public class FindDialerPageLocators {

    @FindBy(how = How.CSS,using = "#franchise")
    public WebElement selectMakeDropdown;

    @FindBy(how = How.CSS,using = "#model")
    public WebElement selectModelDropdown;

    @FindBy(how = How.CSS,using = "#location")
    public WebElement selectLocationDropdown;

    @FindBy(how = How.CSS,using = "#dealer-search-submit")
    public WebElement findDealersButton;

}
