package test;

import java.net.MalformedURLException;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import common.config;
import commonSteps.GeneralCommonSteps;
import dataType.BusinessDetailPageData;
import dataType.PersonalPageData;
import dataType.RegisterPageData;
import helper.DateHelper;
import helper.DriverFactory;
import page.businessDetailPO;
import page.loginPO;
import page.pagebase.ButtonName;
import page.personalDetailPO;
import page.registerPO;
import page.otpPO;;

public class aspire_e2e_002_data_provider extends GeneralCommonSteps {
	
	@BeforeTest
	@Parameters("browser")
	public void BeforeTest(String browser) throws MalformedURLException{
		driver = DriverFactory.Instance().hookGetDriver(browser);
		loginPO = new loginPO(driver);
		registerPO = new registerPO(driver);
		otpPO = new otpPO(driver);
		businessDetailPO = new businessDetailPO(driver);
		personalDetailPO = new personalDetailPO(driver);
	}
	
	@AfterTest
	public void AfterTest() throws MalformedURLException{
		DriverFactory.Instance().hookCloseDriver(driver);
	}

	@Test(dataProvider="AspireTest")
	public void TC_001_userRegisterWithOTP(String name) {
		nameTest = name;
		Init_data_test();
		
		Goto_Aspire_Website(driver, config.ASPIRE_SITE);
		
		Register_new_account_with_all_information();
		
		Confirm_with_OTP_SMS();
		
		Update_personal_information();
		
		Confirm_with_OTP_Email();
		
		Update_business_detail() ;
	}
	
	public WebDriver driver;
	public RegisterPageData registerPageData;
	public PersonalPageData personalPageData;
	public BusinessDetailPageData businessDetailPageData;
	
	public loginPO loginPO;
	public registerPO registerPO;
	public otpPO otpPO;
	public personalDetailPO personalDetailPO;
	public businessDetailPO businessDetailPO;
	
	public String nameTest;
	
	@DataProvider(name="AspireTest")
	public Object[][] getDataFromDataprovider(){
		return new Object [][]
				{
					{"Harry Le1"},
					{"Harry Le2 "}
				};
	}
	
	public void Register_new_account_with_all_information() {
		logTestcaseStep("Register_new_account_with_all_information");
		loginPO.waitLoginPageDisplay();
		loginPO.clickRegisterLink();
		
		registerPO.waitSpinnerLoadingCompletely() ;
		registerPO.inputInformationToRegister(registerPageData);
		registerPO.clickButton(ButtonName.CONTINUE);
	}
	
	public void Confirm_with_OTP_SMS() {
		logTestcaseStep("Confirm_with_OTP_SMS");
		otpPO.waitOTPPhoneDisplay();
		otpPO.enterOTPCode();
		otpPO.waitSpinnerLoadingCompletely() ;
		otpPO.clickButton(ButtonName.CONTINUE);
	}
	
	public void Update_personal_information() {
		logTestcaseStep("Update_personal_information");
		personalDetailPO.selectAccountType(personalPageData);
		personalDetailPO.selectRegisterBusiness(personalPageData);
		personalDetailPO.clickButton(ButtonName.CONTINUE);
		personalDetailPO.selectStandardGetStarted();
		
		personalDetailPO.inputPersonalDetail(personalPageData);
		personalDetailPO.clickButton(ButtonName.SUBMIT);
	}
	
	public void Confirm_with_OTP_Email() {
		logTestcaseStep("Confirm_with_OTP_Email");
		otpPO.waitOTPEmailDisplay();
		otpPO.enterOTPCode();
		otpPO.waitSpinnerLoadingCompletely() ;
	}
	
	public void Update_business_detail() {
		logTestcaseStep("Update_business_detail");
		businessDetailPO.inputBusinessDetailInformation(businessDetailPageData);
	}
	
	public void Init_data_test() {
		registerPageData 
		= new RegisterPageData(
											"Harry Le",
											"auto06" + DateHelper.Instance().getTodayString("ddMMyyHHmmss")+"@lv.com",
											DateHelper.Instance().getTodayString("ddMMHHmmss"),
											"Broker",
											"");
		personalPageData 
		= new PersonalPageData(
											"I am a freelancer",
											"iste",
											"Yes, I do",
											"Singapore",
											"18-04-1994",
											"Singapore",
											"Male");
		
		businessDetailPageData 
		= new BusinessDetailPageData(
											"Aspire",
											"Limited companies",
											"Limited partnership",
											DateHelper.Instance().getTodayString("ddHHmmss")+"a",
											"Business Services",
											"Engineering");
	}
}
