package test;

import java.lang.reflect.Method;
import java.net.MalformedURLException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;

import common.config;
import helper.ExtentReport;
import io.github.bonigarcia.wdm.WebDriverManager;

public class TestBase {
	@BeforeSuite
	public void beforeSuite() {
		ExtentReport.Instance().Init_Report_Instance();
		System.out.println("beforeSuite");
	}
	
	@AfterSuite
	public void AfterSuite() {
		ExtentReport.Instance().Finish_Test_Instance();
	}
	
	@BeforeMethod
	public void BeforeMethod(Method method) {
		ExtentReport.Instance().Init_Test_Instance(method.getName());
	}
	
	public void logTestcaseStep(String message) {
		ExtentReport.Instance().Log_Step_Pass(message.toUpperCase());
	}
}
