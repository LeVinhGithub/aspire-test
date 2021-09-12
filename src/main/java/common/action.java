package common;

import org.apache.log4j.Logger;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import java.util.*;
import java.util.concurrent.TimeUnit;

public class action {

	public static Logger logger = Logger.getLogger("levinh");

	private By ByObject(String locator) {
		String type = locator.split("~")[0];
		String locatorValue = locator.split("~")[1];
		switch (type) {
		case "ID":
			return By.id(locatorValue);
		case "CL":
			return By.className(locatorValue);
		case "NA":
			return By.name(locatorValue);
		case "TG":
			return By.tagName(locatorValue);
		case "LT":
			return By.linkText(locatorValue);
		case "PLT":
			return By.partialLinkText(locatorValue);
		case "CS":
			return By.cssSelector(locatorValue);
		case "XP":
			return By.xpath(locatorValue);
		default:
			return null;
		}
	}
	
	public WebDriverWait setTimeout(WebDriver webDriver) {
		return new WebDriverWait(webDriver, config.LONG_TIMEOUT);
	}
	
	public void staticSleep(long timeoutSecond) {
		try {
			Thread.sleep(timeoutSecond * 1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void staticSleep(long timeout, boolean isMilisecond) {
		try {
			if (isMilisecond == true)
				Thread.sleep(timeout);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * WEB BROWSERSS
	 */
	public void openURL(WebDriver webDriver, String addressURL) {
		webDriver.get(addressURL);
	}

	public String getCurrentURL(WebDriver webDriver) {
		return webDriver.getCurrentUrl();
	}

	public String getTitlePage(WebDriver webDriver) {
		return webDriver.getTitle();
	}

	public String getPageSource(WebDriver webDriver) {
		return webDriver.getPageSource();
	}

	public void backToPreviousPage(WebDriver webDriver) {
		webDriver.navigate().back();
	}

	public void forwardToNextPage(WebDriver webDriver) {
		webDriver.navigate().forward();
	}

	public void refreshPage(WebDriver webDriver) {
		webDriver.navigate().refresh();
	}

	public void navigateToPage(WebDriver webDriver, String url) {
		webDriver.navigate().to(url);
	}

	public void closeTab(WebDriver webDriver) {
		webDriver.close();
	}

	public void sendKeyBrowser(WebDriver webDriver, Keys keyInput) {
		Actions action = new Actions(webDriver);
		action.sendKeys(keyInput).build().perform();
	}

	/**
	 * WEB ELEMENTS
	 */
	public void clickElement(WebElement element) {
		element.click();
	}
	
	public void clickElement(WebDriver webDriver, String locator) {
		WebElement element = findElementVisible(webDriver, locator);
		clickElement(element);
	}
	
	public void clickElement(WebDriver webDriver, String locator, String... value) {
		locator = String.format(locator, (Object[]) value);
		WebElement element = findElementVisible(webDriver, locator);
		clickElement(element);
	}
	
	public void sendKeysElement(WebElement element, String value) {
		element.sendKeys(value);
	}
	
	public void sendkeyElement(WebDriver webDriver, String locator, String valueInput) {
		WebElement element = findElementVisible(webDriver, locator);
		sendKeysElement(element,valueInput);
	}
	
	public void sendkeyElement(WebDriver webDriver, String locator, String valueInput, String... value) {
		locator = String.format(locator, (Object[]) value);
		WebElement element = findElementVisible(webDriver, locator);
		sendKeysElement(element,valueInput);
	}

	public WebElement findElementVisible(WebDriver webDriver, String locator) {
		WebDriverWait wait = setTimeout(webDriver);
		waitElementClickable(webDriver, locator);
		return wait.until(ExpectedConditions.visibilityOfElementLocated(ByObject(locator)));
	}
	
	public WebElement findElementVisible(WebDriver webDriver, String locator, String... value) {
		locator = String.format(locator, (Object[]) value);
		WebDriverWait wait = setTimeout(webDriver );
		return wait.until(ExpectedConditions.visibilityOfElementLocated(ByObject(locator)));
	}

	public void waitElementVisible(WebDriver webDriver, String locator) {
		WebDriverWait wait = setTimeout(webDriver);
		wait.until(ExpectedConditions.visibilityOfElementLocated(ByObject(locator)));
	}

	public void waitElementVisible(WebDriver webDriver, String locator, String... value) {
		WebDriverWait wait = setTimeout(webDriver);
		locator = String.format(locator, (Object[]) value);
		wait.until(ExpectedConditions.visibilityOfElementLocated(ByObject(locator)));
	}
	
	public void waitElementClickable(WebDriver webDriver, String locator) {
		WebDriverWait wait = setTimeout(webDriver);
		wait.until(ExpectedConditions.elementToBeClickable(ByObject(locator)));
	}

	public void waitElementInvisible(WebDriver webDriver, String locator) {
		WebDriverWait wait = setTimeout(webDriver);
		overrideGlobalTimeout(webDriver, config.SHORT_TIMEOUT);
		wait.until(ExpectedConditions.invisibilityOfElementLocated(ByObject(locator)));
		overrideGlobalTimeout(webDriver, config.LONG_TIMEOUT);
	}

	public boolean isControlUndisplayed(WebDriver webDriver, String locator, String... value) {
		locator = String.format(locator, (Object[]) value);
		Date date = new Date();
		System.out.println("Started time = " + date.toString());
		// 5s
		overrideGlobalTimeout(webDriver, config.SHORT_TIMEOUT);
		List<WebElement> elements = webDriver.findElements(ByObject(locator));
		if (elements.size() == 0) {
			date = new Date();
			System.out.println("End time = " + date.toString());
			// 30s
			overrideGlobalTimeout(webDriver, config.LONG_TIMEOUT);
			return true;
		} else {
			date = new Date();
			System.out.println("End time = " + date.toString());
			// 30s
			overrideGlobalTimeout(webDriver, config.LONG_TIMEOUT);
			return false;
		}
	}

	public void overrideGlobalTimeout(WebDriver webDriver, long timeOut) {
		webDriver.manage().timeouts().implicitlyWait(timeOut, TimeUnit.SECONDS);
	}

	// Attribute element
	public int getSizeOfListElement(WebDriver webDriver, String locator) {
		return webDriver.findElements(ByObject(locator)).size();
	}

	public String getTextElement(WebDriver webDriver, String locator) {
		return webDriver.findElement(ByObject(locator)).getText();
	}

	public String getTextElement(WebDriver webDriver, String locator, String... value) {
		locator = String.format(locator, (Object[]) value);
		return webDriver.findElement(ByObject(locator)).getText();
	}

	public String getAttributeElement(WebDriver webDriver, String locator, String nameAttribute) {
		return webDriver.findElement(ByObject(locator)).getAttribute(nameAttribute);
	}

	public boolean isSelectedElement(WebDriver webDriver, String locator) {
		return webDriver.findElement(ByObject(locator)).isSelected();
	}

	public boolean isDisplayElement(WebDriver webDriver, String locator) {
		return webDriver.findElement(ByObject(locator)).isDisplayed();
	}

	public boolean isDisplayElement(WebDriver webDriver, String locator, String... value) {
		locator = String.format(locator, (Object[]) value);
		return webDriver.findElement(ByObject(locator)).isDisplayed();
	}

	public boolean isEnableElement(WebDriver webDriver, String locator) {
		return webDriver.findElement(ByObject(locator)).isEnabled();
	}

	/**
	 * WEB ELEMENTS JAVASCRIPT
	 */

	public Object clickToElementByJS(WebDriver webDriver, String locator) {
		try {
			JavascriptExecutor js = (JavascriptExecutor) webDriver;
			return js.executeScript("arguments[0].click();", webDriver.findElement(ByObject(locator)));
		} catch (Exception e) {
			e.getMessage();
			return null;
		}
	}

	public Object clickToElementByJS(WebDriver webDriver, String locator, String... value) {
		locator = String.format(locator, (Object[]) value);
		try {
			JavascriptExecutor js = (JavascriptExecutor) webDriver;
			return js.executeScript("arguments[0].click();", webDriver.findElement(ByObject(locator)));
		} catch (Exception e) {
			e.getMessage();
			return null;
		}
	}

	public Object sendkeyToElementByJS(WebDriver webDriver, String locator, String value) {
		WebElement element = webDriver.findElement(ByObject(locator));
		try {
			JavascriptExecutor js = (JavascriptExecutor) webDriver;
			return js.executeScript("arguments[0].setAttribute('value', '" + value + "')", element);
		} catch (Exception e) {
			e.getMessage();
			return null;
		}
	}

	public Object sendkeyToElementByJS(WebDriver webDriver, String locator, String value, String... nameLocator) {
		locator = String.format(locator, (Object[]) nameLocator);
		WebElement element = webDriver.findElement(ByObject(locator));
		try {
			JavascriptExecutor js = (JavascriptExecutor) webDriver;
			return js.executeScript("arguments[0].setAttribute('value', '" + value + "')", element);
		} catch (Exception e) {
			e.getMessage();
			return null;
		}
	}

	/**
	 * GENERAL
	 */
	public int randomNumber(int Number) {
		Random rd = new Random();
		return rd.nextInt(Number);
	}

	public int randomNumberInRange(int High, int Low) {
		Random rd = new Random();
		return rd.nextInt(High - Low) + Low;
	}

}
