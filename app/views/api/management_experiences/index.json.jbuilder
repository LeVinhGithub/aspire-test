json.total_pages @total_pages

json.management_experiences @management_experiences do |management_experience|
  json.id management_experience.id

  json.created_at management_experience.created_at

  json.updated_at management_experience.updated_at

  json.name management_experience.name

  json.applicants management_experience.applicants do |applicants|
    json.id applicants.id

    json.created_at applicants.created_at

    json.updated_at applicants.updated_at

    json.full_name applicants.full_name

    json.furigana applicants.furigana

    json.phone_number applicants.phone_number

    json.dob applicants.birthdate

    json.overseas_territory_id applicants.location_id

    json.address applicants.address

    json.income_range_id applicants.income_range_id

    json.availability applicants.availability

    json.resume_file applicants.resume_file

    json.description applicants.description

    json.management_experience_id applicants.management_experience_id

    json.applicant_languages applicants.applicant_languages do |applicant_languages|
      json.id applicant_languages.id

      json.created_at applicant_languages.created_at

      json.updated_at applicant_languages.updated_at

      json.proficiency applicant_languages.proficiency

      json.language_id applicant_languages.language_id

      json.other_language applicant_languages.other_language
    end

    json.applicant_schools applicants.applicant_schools do |applicant_schools|
      json.id applicant_schools.id

      json.created_at applicant_schools.created_at

      json.updated_at applicant_schools.updated_at

      json.graduation_date applicant_schools.graduation_date

      json.name applicant_schools.name

      json.degree applicant_schools.degree

      json.major applicant_schools.major

      json.school_type_id applicant_schools.school_type_id

      json.applicant_id applicant_schools.applicant_id
    end

    json.description applicants.description

    json.email applicants.email

    json.is_onboarded applicants.is_onboarded

    json.notes applicants.notes

    json.current_company_name applicants.current_company_name

    json.current_company_department applicants.current_company_department

    json.current_company_position applicants.current_company_position

    json.confirmation_email_resent_count applicants.confirmation_email_resent_count
  end

  json.management_experience_id management_experience.management_experience_id
end
