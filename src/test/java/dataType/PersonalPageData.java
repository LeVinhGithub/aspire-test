package dataType;

public class PersonalPageData {
	public String accountType;
	public String solution;
	public String registeredBusiness;
	public String companyRegistered;
	public String dob;
	public String nationality;
	public String gender;
	
	public PersonalPageData(
			String accountType,
			String solution,
			String registeredBusiness,
			String companyRegistered,
			String dob,
			String nationality,
			String gender) {
		this.accountType = accountType;
		this.solution = solution;
		this.registeredBusiness = registeredBusiness;
		this.companyRegistered = companyRegistered;
		this.dob = dob;
		this.nationality = nationality;
		this.gender = gender;
	}
}
