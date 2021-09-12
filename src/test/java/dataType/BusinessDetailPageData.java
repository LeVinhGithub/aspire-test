package dataType;

public class BusinessDetailPageData {
	public String bizLegalName;
	public String bizEntity;	
	public String bizEntityType;
	public String bizRegNumber;
	public String bizIndustry;
	public String bizSubIndustry;
	
	public BusinessDetailPageData(
			String bizLegalName,
			String bizEntity,
			String bizEntityType,
			String bizRegNumber,
			String bizIndustry,
			String bizSubIndustry) {
		this.bizLegalName = bizLegalName;
		this.bizEntity = bizEntity;
		this.bizEntityType = bizEntityType;
		this.bizRegNumber = bizRegNumber;
		this.bizIndustry = bizIndustry;
		this.bizSubIndustry = bizSubIndustry;
	}
}
