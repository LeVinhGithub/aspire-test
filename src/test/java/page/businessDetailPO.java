package page;

import org.openqa.selenium.WebDriver;

import dataType.BusinessDetailPageData;

public class businessDetailPO extends pagebase {
	WebDriver driver;
	
	private final String bizLegalNameRepo = "register-business-name";
	private final String bizEntityRepo = "Entity category";
	private final String bizEntityTypeRepo = "Entity type";
	private final String bizRegNumberRepo = "register-business-registration-number";
	private final String bizIndustryRepo = "Industry";
	private final String bizSubIndustryRepo = "Sub-Industry";
	
	public businessDetailPO(WebDriver mappingDriver) {
		super(mappingDriver);
		driver = mappingDriver;
	}
	
	public void inputBusinessDetailInformation(BusinessDetailPageData data) {
		inputTextboxWithDataCy(bizLegalNameRepo, data.bizLegalName);
		selectDropdownWithLabel(bizEntityRepo, data.bizEntity);
		selectDropdownWithLabel(bizEntityTypeRepo, data.bizEntityType);
		inputTextboxWithDataCy(bizRegNumberRepo, data.bizRegNumber);
		selectDropdownWithLabel(bizIndustryRepo, data.bizIndustry);
		selectDropdownWithLabel(bizSubIndustryRepo, data.bizSubIndustry);

	}
}

