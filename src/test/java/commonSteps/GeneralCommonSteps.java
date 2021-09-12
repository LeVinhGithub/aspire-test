package commonSteps;

import org.openqa.selenium.WebDriver;

import test.TestBase;

public class GeneralCommonSteps extends TestBase{
	public void Goto_Aspire_Website(WebDriver driver, String url) {
		driver.get(url);
	}
	
	
}
