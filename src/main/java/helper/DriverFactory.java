package helper;

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

import common.config;
import io.github.bonigarcia.wdm.WebDriverManager;

public class DriverFactory {
	private WebDriver driver;
	private static DriverFactory instance = null;
    protected DriverFactory() {
    }
    public static DriverFactory Instance() {
        if(instance == null) {
            instance = new DriverFactory();
        }
        return instance;
    }
	
	 public WebDriver hookGetDriver(String browserName) throws MalformedURLException {

	        if(browserName.equals("chrome")) {
	            System.setProperty("webdriver.chrome.driver", "src/main/java/source/chromedriver.exe");
	            DesiredCapabilities capabilities = DesiredCapabilities.chrome();
	            ChromeOptions options = new ChromeOptions();
	            options.addArguments("--disable-extensions");
	            options.addArguments("disable-infobars");
	            options.addArguments("start-maximized");
	            capabilities.setCapability(ChromeOptions.CAPABILITY, options);
	            driver = new ChromeDriver(capabilities);
	        }
	        else if(browserName.equals("firefox")) {
	            WebDriverManager.firefoxdriver().setup();
	            System.setProperty(FirefoxDriver.SystemProperty.DRIVER_USE_MARIONETTE, "true");

	            FirefoxProfile profile = new FirefoxProfile();
	            DesiredCapabilities capability = DesiredCapabilities.firefox();

	            //profile.setPreference("browser.private.browsing.autostart",true);
	            profile.setAcceptUntrustedCertificates(false);
	            profile.setAssumeUntrustedCertificateIssuer(true);
	            profile.setPreference("browser.download.folderList", 2);
	            profile.setPreference("browser.helperApps.alwaysAsk.force", false);
	            profile.setPreference("browser.download.manager.showWhenStarting", false);
	            profile.setPreference("browser.download.dir", "C:\\Downloads");
	            profile.setPreference("browser.download.downloadDir", "C:\\Downloads");
	            profile.setPreference("browser.download.defaultFolder", "C:\\Downloads");
	            profile.setPreference("browser.helperApps.neverAsk.saveToDisk", "text/anytext ,text/plain,text/html,application/plain");
	            capability = DesiredCapabilities.firefox();
	            capability.setCapability(FirefoxDriver.PROFILE, profile);
	            driver = new FirefoxDriver(capability);
	        }
	        else if(browserName.equals("chromeheadless")) {
	        	 System.setProperty("webdriver.chrome.driver", "src/main/java/source/chromedriver.exe");

	            ChromeOptions options = new ChromeOptions();
	            options.addArguments("headless");
	            options.addArguments("window-size=1920x1080");
	            driver = new ChromeDriver(options);
	        }

	        else if(browserName.equals("firefoxheadless")) {
	            WebDriverManager.firefoxdriver().setup();
	            System.setProperty(FirefoxDriver.SystemProperty.DRIVER_USE_MARIONETTE, "true");
	            FirefoxOptions options = new FirefoxOptions();
	            options.setHeadless(true);
	            driver = new FirefoxDriver(options);
	        }

	        else if(browserName.equals("edge")) {
	            WebDriverManager.edgedriver().arch32().setup();
	            driver = new EdgeDriver();
	        }

	        driver.manage().window().maximize();
	        driver.manage().timeouts().implicitlyWait( config.LONG_TIMEOUT, TimeUnit.SECONDS);


	        return driver;
	    }

	    public void hookCloseDriver(WebDriver driver){
	        try {
	            String osName = System.getProperty("os.name").toLowerCase();
	            String cmd = "";
	            // Quit browser
	            driver.quit();

	            // Quit process
	            if (driver.toString().toLowerCase().contains("chrome")) {
	                if (osName.contains("mac")) {
	                    cmd = "pkill chromedriver";
	                } else {
	                    cmd = "taskkill /F /FI \"IMAGENAME eq chromedriver*\"";
	                }

	                // Execute process
	                Process process = Runtime.getRuntime().exec(cmd);
	                process.waitFor();
	            }
	            if (driver.toString().toLowerCase().contains("firefox")) {
	                cmd = "taskkill /F /FI \"IMAGENAME eq geckodriver*\"";
	                Process process = Runtime.getRuntime().exec(cmd);
	                process.waitFor();
	            }
	            System.out.println("----------- Quit Process -----------");
	        } catch (Exception e) {
	            System.out.println(e.getMessage());
	        }
	    }
}
