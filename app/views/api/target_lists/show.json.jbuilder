json.target_list do
  json.id @target_list.id

  json.created_at @target_list.created_at

  json.updated_at @target_list.updated_at

  json.title @target_list.title

  json.company_id @target_list.company_id

  if @target_list.company.present?
    json.company @target_list.company do |company|
      json.id company.id

      json.created_at company.created_at

      json.updated_at company.updated_at

      json.name company.name

      json.logo company.logo

      json.location company.location

      json.launched_year company.launched_year

      json.business_details company.business_details

      json.number_of_employees company.number_of_employees

      json.industry_id company.industry_id

      json.mission company.mission

      json.vision company.vision

      json.value company.value

      json.representative_photo company.representative_photo

      json.representative_profile company.representative_profile

      json.listing_classification company.listing_classification

      json.representative_name company.representative_name

      json.slug company.slug

      json.image company.image

      json.capital company.capital

      json.ipo company.ipo

      json.business_id company.business_id

      json.name_furigana company.name_furigana
    end
  end

  json.target_list_applicants @target_list.target_list_applicants do |target_list_applicants|
    if target_list_applicants.applicant.present?
      json.applicant target_list_applicants.applicant do |applicant|
        json.id applicant.id

        json.created_at applicant.created_at

        json.updated_at applicant.updated_at

        json.full_name applicant.full_name

        json.furigana applicant.furigana

        json.phone_number applicant.phone_number

        json.birthdate applicant.birthdate

        json.location_id applicant.location_id

        json.address applicant.address

        json.income_range_id applicant.income_range_id

        json.availability applicant.availability

        json.resume_file applicant.resume_file

        json.description applicant.description

        json.management_experience_id applicant.management_experience_id

        json.email applicant.email

        json.gender applicant.gender

        json.is_onboarded applicant.is_onboarded

        json.notes applicant.notes

        json.current_company_name applicant.current_company_name

        json.current_company_department applicant.current_company_department

        json.current_company_position applicant.current_company_position

        json.number_of_companies applicant.number_of_companies

        json.is_suspended applicant.is_suspended

        json.applicant_industries applicant.applicant_industries do |applicant_industries|
          json.id applicant_industries.id

          json.created_at applicant_industries.created_at

          json.updated_at applicant_industries.updated_at

          json.industry_id applicant_industries.industry_id

          if applicant_industries.industry.present?
            json.industry applicant_industries.industry do |industry|
              json.name industry.name
            end
          end
        end

        json.applicant_schools applicant.applicant_schools do |applicant_schools|
          json.id applicant_schools.id

          json.created_at applicant_schools.created_at

          json.updated_at applicant_schools.updated_at

          json.graduation_date applicant_schools.graduation_date

          json.name applicant_schools.name

          json.degree applicant_schools.degree

          json.major applicant_schools.major

          json.school_type_id applicant_schools.school_type_id

          if applicant_schools.school_type.present?
            json.school_type applicant_schools.school_type do |school_type|
              json.name school_type.name
            end
          end
        end

        if applicant.income_range.present?
          json.income_range applicant.income_range do |income_range|
            json.name income_range.name
          end
        end
      end
    end
  end
end
