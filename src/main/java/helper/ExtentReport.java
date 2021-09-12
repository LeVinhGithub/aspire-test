package helper;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;

public class ExtentReport {
	 private static ExtentReport instance = null;
	    protected ExtentReport() {
	    }
	    public static ExtentReport Instance() {
	        if(instance == null) {
	            instance = new ExtentReport();
	        }
	        return instance;
	    }

	    public static ExtentHtmlReporter avent;
	    public static ExtentReports extent = new ExtentReports();
	    public static ExtentTest test;

	    public void Init_Report_Instance(){
	        PathHelper.fileReportPath = PathHelper.CombinePath(PathHelper.dirReportPath,"AvenReport.html");
	        avent = new ExtentHtmlReporter(PathHelper.fileReportPath);
	        avent.loadXMLConfig("src/main/java/source/extent-report.xml");
	        avent.setAppendExisting(false);
	        extent.attachReporter(avent);
	        extent.setSystemInfo("OS", "win10");
	    }

	    public  void  Init_Test_Instance(String testCaseName){
	        test = extent.createTest(testCaseName);
	    }

	    public void Finish_Test_Instance(){
	        extent.flush();
	    }

	    public void Set_Author_Cat_TestCase(String author, String cat){
	        test.assignAuthor(author)
	                .assignCategory(cat);
	    }

	    public void Log_Step_Pass(String message)
	    {
	        test.pass(message);
	    }
	    
	    public void Log_Step_Debug(String message)
	    {
	        test.debug(message);
	    }

	    public void Log_Step_Failed(String message)
	    {
	        test.fail(message);
	    }

	    public void Log_Step_Skip(String message)
	    {
	        test.skip(message);
	    }

	    public void Log_Step_Warning(String message)
	    {
	        test.warning(message);
	    }

	    public void Add_Failed_Info_To_Report(WebDriver driver, ITestResult result, String name){
	        if (result.getStatus() == ITestResult.FAILURE){
	            String ErrorMessage = result.getThrowable().getMessage();
	            String StackTrace = result.getThrowable().getStackTrace().toString();
	            ScreenshotHelper.Instance().Take_Web_ScreenShot(driver, name);
	            try {
	            	test.fail("ErrorMessage: "+ ErrorMessage);
	            	test.fail("StackTrace: "+ StackTrace);
	                test.fail("Web Screenshot is below:\n", MediaEntityBuilder.createScreenCaptureFromPath(PathHelper.fileWebScreenshotPath).build());
	            } catch (IOException e) {
	                e.printStackTrace();
	            }
	        }
	    }
}
