package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import utils.SeleniumDriver;

/**
 * Created by s.milaserdov on 7/30/2018.
 */
public class AfterActions {

    @After
    public static void tearDown(Scenario scenario){

        WebDriver driver=SeleniumDriver.getDriver();
        System.out.println(scenario.isFailed());
        if (scenario.isFailed()) {
            byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshotBytes, "image/png");

        }

        SeleniumDriver.tearDown();
    }
}
