package page;

import org.openqa.selenium.WebDriver;

import repository.loginRepo;

public class loginPO extends pagebase{
	WebDriver driver;
	public loginPO(WebDriver mappingDriver) {
		super(mappingDriver);
		driver = mappingDriver;
	}
	
	public void waitLoginPageDisplay() {
		waitElementVisible(driver, loginRepo.loginToAspireWelcomeText);
	}
	
	public void clickRegisterLink() {
		clickElement(driver, loginRepo.registerLink);
	}
}
