package helper;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class ScreenshotHelper {
	 private static ScreenshotHelper instance = null;
	    protected ScreenshotHelper() {
	    }
	    public static ScreenshotHelper Instance() {
	        if(instance == null) {
	            instance = new ScreenshotHelper();
	        }
	        return instance;
	    }

	    public void Take_Web_ScreenShot(WebDriver driver, String nameScreenshot){
	        PathHelper.fileWebScreenshotPath = PathHelper.Instance().CombinePath(PathHelper.dirScreenshotPath, nameScreenshot +".png");
	        TakesScreenshot scrShot =((TakesScreenshot)driver);
	        File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);
	        File DestFile=new File(PathHelper.fileWebScreenshotPath);
	        try {
	            FileUtils.copyFile(SrcFile, DestFile);
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	    }

}
