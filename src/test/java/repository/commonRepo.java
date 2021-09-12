package repository;

public class commonRepo {
	public static final String inputTextboxWithName ="CS~input[name=%s]";
	public static final String inputTextboxWithDataCy ="CS~input[data-cy=%s]";
	
	public static final String dropdownWithLabel ="CS~div[label='%s']";
	
	public static final String buttonWithText ="XP~//button[contains(@class,'q-btn--actionable')]//span[text()='%s']";
	
	public static final String checkboxWithClass ="CS~div.%s";
	
	public static final String dateTimePickerWithLabel ="CS~div[label='%s'] input";
	
	public static final String radioButtonWithAriaLabel ="XP~//div[div/div[contains(text(),'%s')]]//div[@aria-label='%s']";
	
	public static final String cardWithText ="XP~//div[contains(@class,'q-card__section')]/div[contains(text(),'%s')]";
	
	public static final String spinner ="CS~.q-spinner";
	public static final String dropdownList ="CS~.q-menu";
	public static final String otpFocusBox ="CS~div.digit-input__input--highlight";
	public static final String calendar ="CS~.q-date";
}

