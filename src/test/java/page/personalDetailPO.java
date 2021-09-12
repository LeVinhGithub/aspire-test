package page;

import org.openqa.selenium.WebDriver;

import dataType.PersonalPageData;
import repository.commonRepo;
import repository.personalRepo;

public class personalDetailPO extends pagebase {
WebDriver driver;
	
	private final String solutionRepo = "What solutions are you looking for?";
	private final String registeredBusinessRepo = "Do you have a registered business?";
	private final String companyRegisteredRepo = "Where is your company registered?";
	private final String nationalityRepo = "Nationality";
	private final String genderRepo = "Gender";
	private final String dobRepo = "Date of birth";
	
	public personalDetailPO(WebDriver mappingDriver) {
		super(mappingDriver);
		driver = mappingDriver;
	}
	
	public void selectAccountType(PersonalPageData data) {
		waitSpinnerLoadingCompletely();
		clickElement(driver, commonRepo.cardWithText, data.accountType);
		waitSpinnerLoadingCompletely();
	}
	
	public void selectRegisterBusiness(PersonalPageData data) {
		selectDropdownCheckboxWithLabel(solutionRepo, data.solution);
		checkRadioButtonWithArialLabel(registeredBusinessRepo, data.registeredBusiness);
		selectDropdownWithLabel(companyRegisteredRepo, data.companyRegistered);
	}
	
	public void selectStandardGetStarted() {
		clickElement(driver, personalRepo.getStartedStandard);
	}
	
	public void inputPersonalDetail(PersonalPageData data) {
		selectDateTimePicker(dobRepo, data.dob);
		selectDropdownWithLabel(nationalityRepo, data.nationality);
		selectDropdownWithLabel(genderRepo, data.gender);
	}
}
