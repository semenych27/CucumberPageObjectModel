package steps;

import cucumber.api.java.Before;
import utils.SeleniumDriver;

/**
 * Created by s.milaserdov on 7/30/2018.
 */
public class BeforeActions {
    @Before
    public static void setUp(){

        SeleniumDriver.setUpDriver();
    }
}
