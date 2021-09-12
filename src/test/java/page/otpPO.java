package page;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import repository.commonRepo;
import repository.otpRepo;

public class otpPO extends pagebase{
	WebDriver driver;
	public otpPO(WebDriver mappingDriver) {
		super(mappingDriver);
		driver = mappingDriver;
	}
	
	public void waitOTPPhoneDisplay() {
		waitElementVisible(driver, otpRepo.enterOTPPhoneText);
		waitSpinnerLoadingCompletely() ;
		waitElementVisible(driver, otpRepo.inputBox);
	}
	
	public void waitOTPEmailDisplay() {
		waitElementVisible(driver, otpRepo.enterOTPEmailText);
		waitSpinnerLoadingCompletely() ;
		waitElementVisible(driver, otpRepo.inputBox);
	}
	
	public void enterOTPCode() {
		enterOTPBox(Keys.NUMPAD1);
		enterOTPBox(Keys.NUMPAD2);
		enterOTPBox(Keys.NUMPAD3);
		enterOTPBox(Keys.NUMPAD4);
	}
	
	public void enterOTPBox(Keys key) {
		clickElement(driver, commonRepo.otpFocusBox);
		sendKeyBrowser(driver, key);
	}
}
