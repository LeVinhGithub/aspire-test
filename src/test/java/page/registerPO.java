package page;

import org.openqa.selenium.WebDriver;

import dataType.RegisterPageData;

public class registerPO extends pagebase {
	WebDriver driver;
	
	private final String fullnameRepo = "full_name";
	private final String emailRepo = "email";
	private final String phoneRepo = "phone";
	private final String whereHeardAboutUsRepo = "Where did you hear about us?";
	private final String promoteCodeRepo = "register-person-referral-code";
	private final String privacyRepo = "register-step-person__privacy";
	
	public registerPO(WebDriver mappingDriver) {
		super(mappingDriver);
		driver = mappingDriver;
	}
	
	public void inputInformationToRegister(RegisterPageData data) {
		inputTextboxWithName(fullnameRepo, data.fullName);
		inputTextboxWithName(emailRepo, data.email);
		inputTextboxWithName(phoneRepo, data.phone);
		selectDropdownWithLabel(whereHeardAboutUsRepo, data.whereHeardAboutUs);
		inputTextboxWithDataCy(promoteCodeRepo, data.promotionCode);
		checkCheckboxWithClass(privacyRepo, true);
	}
}

