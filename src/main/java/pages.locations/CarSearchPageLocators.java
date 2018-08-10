package pages.locations;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/**
 * Created by s.milaserdov on 7/26/2018.
 */
public class CarSearchPageLocators {

    @FindBy(how = How.CSS,using = "#makes")
    public WebElement carsMakeDropdown;

    @FindBy(how = How.CSS,using = "#models")
    public WebElement selectModelDropdown;

    @FindBy(how = How.CSS,using = "#locations")
    public WebElement selectLocationDropdown;

    @FindBy(how = How.CSS,using = "#price-max")
    public WebElement selectPriceDropdown;

    @FindBy(how = How.CSS,using = "#search-submit")
    public WebElement findMyNextCarButton;
}
