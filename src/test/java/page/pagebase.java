package page;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import common.action;
import helper.ExtentReport;
import repository.commonRepo;

public class pagebase extends action {
	WebDriver driver;
	public pagebase(WebDriver mappingDriver) {
		driver = mappingDriver;
	}
	
	public enum ButtonName{
		REGISTER,
		NEXT,
		CONTINUE,
		SUBMIT
	}
	
	public void inputTextboxWithName(String nameTextbox, String valueInput) {
		if(valueInput != null &&  valueInput != "") {
			logDebugInformation("Start - inputTextboxWithName: " + nameTextbox +  " and value: "+ valueInput);
			sendkeyElement(driver, commonRepo.inputTextboxWithName, valueInput, nameTextbox);
			logDebugInformation("End - inputTextboxWithName: " + nameTextbox+  " and value: "+ valueInput);
		}
	}
	
	public void inputTextboxWithDataCy(String datacyTextbox, String valueInput) {
		if(valueInput != null &&  valueInput != "") {
			logDebugInformation("Start - inputTextboxWithDataCy: " + datacyTextbox+  " and value: "+ valueInput);
			sendkeyElement(driver, commonRepo.inputTextboxWithDataCy, valueInput, datacyTextbox);
			logDebugInformation("End - inputTextboxWithDataCy: " + datacyTextbox+  " and value: "+ valueInput);
		}
	}
	
	public void selectDropdownWithLabel(String labelDropdown, String valueSelect) {
		if(valueSelect != null &&  valueSelect != "") {
			logDebugInformation("Start - selectDropdownWithLabel: " + labelDropdown+  " and value: "+ valueSelect);
			DropdownElement dropdown = new DropdownElement(findElementVisible(driver, commonRepo.dropdownWithLabel, labelDropdown));
			dropdown.Select(valueSelect);
			logDebugInformation("End - selectDropdownWithLabel: " + labelDropdown+  " and value: "+ valueSelect);
		}
	}
	
	public void selectDropdownCheckboxWithLabel(String labelDropdown, String valueSelect) {
		if(valueSelect != null &&  valueSelect != "") {
			logDebugInformation("Start - selectDropdownCheckboxWithLabel: " + labelDropdown+  " and value: "+ valueSelect);
			DropdownCheckboxElement dropdown = new DropdownCheckboxElement(findElementVisible(driver, commonRepo.dropdownWithLabel, labelDropdown));
			dropdown.Select(valueSelect);
			logDebugInformation("End - selectDropdownCheckboxWithLabel: " + labelDropdown+  " and value: "+ valueSelect);
		}
	}
	
	public void checkCheckboxWithClass(String classCheckbox, Boolean checked ) {
		logDebugInformation("Start - checkCheckboxWithClass: " + classCheckbox+  " and value: "+ checked);
		CheckboxElement checkbox = new CheckboxElement(findElementVisible(driver, commonRepo.checkboxWithClass, classCheckbox));
		checkbox.Check(checked);
		logDebugInformation("End - checkCheckboxWithClass: " + classCheckbox+  " and value: "+ checked);
	}
	
	public void checkRadioButtonWithArialLabel(String labelRadio, String value) {
		logDebugInformation("Start - checkRadioButtonWithArialLabel: " + labelRadio+  " and value: "+ value);
		RadioButtonElement checkbox = new RadioButtonElement(findElementVisible(driver, commonRepo.radioButtonWithAriaLabel, labelRadio, value));
		checkbox.Check();
		logDebugInformation("End - checkRadioButtonWithArialLabel: " + labelRadio+  " and value: "+ value);
	}
	
	public void selectDateTimePicker(String datetimeName, String value) {
		logDebugInformation("Start - selectDateTimePicker: " + value);
		clickElement(driver, commonRepo.dateTimePickerWithLabel, datetimeName);
		DateTimeElement datetimepicker = new DateTimeElement(findElementVisible(driver, commonRepo.calendar));
		datetimepicker.Select(value);
		waitElementInvisible(driver, commonRepo.calendar);
		logDebugInformation("End - selectDateTimePicker: " + value);
	}
	
	public void clickButton(ButtonName name) {
		switch (name.toString()) {
		case "REGISTER":
			clickElement(driver, commonRepo.buttonWithText, "Register");
			break;
		case "NEXT":
			clickElement(driver, commonRepo.buttonWithText, "Next");
			break;
		case "CONTINUE":
			clickElement(driver, commonRepo.buttonWithText, "Continue");
			waitSpinnerLoadingCompletely() ;
			break;
		case "SUBMIT":
			clickElement(driver, commonRepo.buttonWithText, "Submit");
			waitSpinnerLoadingCompletely() ;
			break;
		}
	}
	
	public void waitSpinnerLoadingCompletely() {
		logDebugInformation("Start - waitSpinnerLoadingCompletely: ");
		waitElementInvisible(driver, commonRepo.spinner);
		logDebugInformation("End - waitSpinnerLoadingCompletely: ");
	}
	
	public class DropdownElement{
		WebElement dropdown;
		WebElement input;
		WebElement dropdownlist;
		List<WebElement> listOption;
		
		public DropdownElement(WebElement element) {
			dropdown = element;
			input = dropdown.findElement(By.cssSelector("input"));
		}
		
		public void Select(String value) {
			clickElement(input);
			dropdownlist = findElementVisible(driver, commonRepo.dropdownList);
			sendKeysElement(input, value);
			dropdownlist = findElementVisible(driver, commonRepo.dropdownList);
			listOption = dropdownlist.findElements(By.cssSelector(".q-item"));
			 for(int i = 0; i<listOption.size(); i++) {
				  if(listOption.get(i).getText().contains(value)) {
					  clickElement(listOption.get(i));
					  break;
				  }
			  }
		}
	}
	
	public class DropdownCheckboxElement{
		WebElement dropdown;
		WebElement input;
		WebElement dropdownlist;
		List<WebElement> listOption;
		
		public DropdownCheckboxElement(WebElement element) {
			dropdown = element;
			input = dropdown.findElement(By.cssSelector(".q-field__inner"));
		}
		
		public void Select(String value) {
			clickElement(input);
			staticSleep(2);
			dropdownlist = findElementVisible(driver, commonRepo.dropdownList);
			listOption = dropdownlist.findElements(By.cssSelector(".q-item"));
			 for(int i = 0; i<listOption.size(); i++) {
				  if(listOption.get(i).getText().contains(value)) {
					  clickElement(listOption.get(i));
					  break;
				  }
			  }
			 clickElement(input);
			 waitElementInvisible(driver, commonRepo.dropdownList);
		}
	}
	
	public class CheckboxElement{
		WebElement checkbox;
		WebElement input;
		WebElement box ;
		
		public CheckboxElement(WebElement element) {
			checkbox = element;
			input = checkbox.findElement(By.cssSelector("input[type='checkbox']"));
			 box = checkbox.findElement(By.cssSelector(".q-checkbox__bg"));
		}
		
		public void Check(Boolean value) {
			if(input.isSelected() != value)
				clickElement(box);
		}
	}
	
	public class RadioButtonElement{
		WebElement radio;
		WebElement input;
		WebElement box ;
		
		public RadioButtonElement(WebElement element) {
			radio = element;
			input = radio.findElement(By.cssSelector("input[type='radio']"));
			 box = radio.findElement(By.cssSelector(".q-radio__bg"));
		}
		
		public void Check() {
				clickElement(box);
		}
	}
	
	public class DateTimeElement{
		WebElement calendar;
		WebElement content;
		WebElement header ;
		WebElement previousMonthArrow;
		WebElement month;
		WebElement nextMonthArrow;
		WebElement previousYearArrow;
		WebElement year;
		WebElement nextYearArrow;
		WebElement days;
		Map<String, Integer> monthMap = new HashMap<String, Integer>();
		
		public DateTimeElement(WebElement element) {
			calendar = element;
			content = calendar.findElement(By.cssSelector(".q-date__content"));
			 List<WebElement> list =content.findElements(By.cssSelector(".q-date__navigation>div ")) ;
			 previousMonthArrow = list.get(0);
			 month = list.get(1);
			 nextMonthArrow = list.get(2);
			 previousYearArrow = list.get(3);
			 year = list.get(4);
			 nextYearArrow = list.get(5);
			 days = calendar.findElement(By.cssSelector(".q-date__calendar-days-container"));
			 monthMap.put("January", 1);
			 monthMap.put("February", 2);
			 monthMap.put("March", 3);
			 monthMap.put("April", 4);
			 monthMap.put("May", 5);
			 monthMap.put("June", 6);
			 monthMap.put("July",7);
			 monthMap.put("August", 8);
			 monthMap.put("September", 9);
			 monthMap.put("October", 10);
			 monthMap.put("November", 11);
			 monthMap.put("December", 12);
		}
		
		public void Select(String value) {
				String[] listDate = value.split("-");
				String day = listDate[0];
				int month = Integer.parseInt(listDate[1]);
				int year = Integer.parseInt(listDate[2]);
				
				int currentYear =  Integer.parseInt(this.year.findElement(By.cssSelector("span.q-btn__content>span")).getText());
				String mothvalue = this.month.findElement(By.cssSelector("span.q-btn__content>span")).getText();
				int currentMonth =  monthMap.get(mothvalue);
		
				SelectYear(currentYear-year);
				SelectMonth(currentMonth-month);
				SelectDay(day);
		}
		
		public void SelectYear(int value) {
			for(int i=0;i<Math.abs(value);i++) {
				if(value >0) clickElement(previousYearArrow);
				else clickElement(nextYearArrow);
			}
		}
		
		public void SelectMonth(int value) {
			for(int i=0;i<Math.abs(value);i++) {
				if(value >0) clickElement(previousMonthArrow);
				else clickElement(nextMonthArrow);
			}
		}
		
		public void SelectDay(String value) {
			staticSleep(1);
			days = calendar.findElement(By.cssSelector(".q-date__calendar-days-container"));
			List<WebElement> listDay =days.findElements(By.cssSelector(".q-date__calendar-item--in ")) ;
			for(int i=0;i<listDay.size();i++) {
				String valueDay = listDay.get(i).findElement(By.cssSelector(".q-btn__content>span")).getText(); 
				if(valueDay.equals(value)) {
					clickElement(listDay.get(i));
					break;
				}
			}
		}
	}
	
	public void logDebugInformation(String message) {
		ExtentReport.Instance().Log_Step_Debug(message);
	}
}
