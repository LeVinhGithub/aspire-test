

export enum ListingClassificationEnum {
    FIRST_SECTION_TOKYO_STOCK = "first_section_tokyo_stock",
    SECOND_SECTION_TOKYO_STOCK = "second_section_tokyo_stock",
    JASDAQ_STANDART = "jasdaq_standart",
    JASDAQ_GROWTH = "jasdaq_growth",
    MOTHERS = "mothers",
    UNLISTED = "unlisted"
}

export type CompanyModel = {
      id: number;
      created_at: Date;
      updated_at: Date;
      name: string;
      logo: any;
      location: string;
      launched_year: string;
      business_details: string;
      number_of_employees: number;
      industry_id: number;
      mission: string;
      vision: string;
      value: string;
      representative_photo: any;
      representative_profile: string;
      listing_classification: `${ListingClassificationEnum}`;
      representative_name: string;
      slug: string;
      image: any;
      capital: string;
      ipo: boolean;
      business_id: string;
      name_furigana: string;
  
}