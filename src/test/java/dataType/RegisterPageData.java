package dataType;

public class RegisterPageData {
	public String fullName;
	public String email;
	public String phone;
	public String whereHeardAboutUs;
	public String promotionCode;
	
	public RegisterPageData(
			String fullName,
			String email,
			String phone,
			String whereHeardAboutUs,
			String promotionCode) {
		this.fullName = fullName;
		this.email = email;
		this.phone = phone;
		this.whereHeardAboutUs = whereHeardAboutUs;
		this.promotionCode = promotionCode;
	}
}
