json.total_pages @total_pages

json.income_ranges @income_ranges do |income_range|
  json.id income_range.id

  json.created_at income_range.created_at

  json.updated_at income_range.updated_at

  json.income_range_id income_range.income_range_id

  json.applicants income_range.applicants do |applicants|
    json.id applicants.id

    json.created_at applicants.created_at

    json.updated_at applicants.updated_at

    json.full_name applicants.full_name

    json.furigana applicants.furigana

    json.phone_number applicants.phone_number

    json.birthdate applicants.birthdate

    json.location_id applicants.location_id

    json.address applicants.address

    json.income_range_id applicants.income_range_id

    json.applicant_languages applicants.applicant_languages do |applicant_languages|
      json.id applicant_languages.id

      json.created_at applicant_languages.created_at

      json.updated_at applicant_languages.updated_at

      json.proficiency applicant_languages.proficiency

      json.language_id applicant_languages.language_id

      json.applicant_id applicant_languages.applicant_id
    end

    json.availability applicants.availability

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

    json.resume_file applicants.resume_file

    json.description applicants.description

    json.description applicants.description

    json.management_experience_id applicants.management_experience_id

    json.applicant_industries applicants.applicant_industries do |applicant_industries|
      json.id applicant_industries.id

      json.created_at applicant_industries.created_at

      json.updated_at applicant_industries.updated_at

      json.industry_id applicant_industries.industry_id

      json.applicant_id applicant_industries.applicant_id
    end

    json.email applicants.email

    json.messages applicants.messages do |messages|
      json.id messages.id

      json.created_at messages.created_at

      json.updated_at messages.updated_at

      json.applicant_id messages.applicant_id

      json.text messages.text

      json.attachment messages.attachment

      json.reply_to_message_id messages.reply_to_message_id

      json.attachment messages.attachment

      json.company_id messages.company_id
    end

    json.job_applications applicants.job_applications do |job_applications|
      json.id job_applications.id

      json.created_at job_applications.created_at

      json.updated_at job_applications.updated_at

      json.applicant_id job_applications.applicant_id

      json.job_opening_id job_applications.job_opening_id

      json.status job_applications.status

      json.approached_by_scout job_applications.approached_by_scout
    end

    json.job_opening_favorites applicants.job_opening_favorites do |job_opening_favorites|
      json.id job_opening_favorites.id

      json.created_at job_opening_favorites.created_at

      json.updated_at job_opening_favorites.updated_at

      json.job_opening_id job_opening_favorites.job_opening_id
    end

    json.furigana applicants.furigana

    json.resume_file applicants.resume_file

    json.gender applicants.gender

    json.job_experiences applicants.job_experiences do |job_experiences|
      json.id job_experiences.id

      json.created_at job_experiences.created_at

      json.updated_at job_experiences.updated_at

      json.company_name job_experiences.company_name

      json.start_date job_experiences.start_date

      json.end_date job_experiences.end_date

      json.applicant_id job_experiences.applicant_id

      json.job_title_id job_experiences.job_title_id
    end

    json.skills applicants.skills do |skills|
      json.id skills.id

      json.created_at skills.created_at

      json.updated_at skills.updated_at

      json.name skills.name

      json.applicant_id skills.applicant_id
    end
  end

  json.name income_range.name

  json.job_openings income_range.job_openings do |job_openings|
    json.id job_openings.id

    json.created_at job_openings.created_at

    json.updated_at job_openings.updated_at

    json.deployment job_openings.department

    json.position job_openings.position

    json.occupation_type_id job_openings.occupation_type_id

    json.location_id job_openings.location_id

    json.income_range_id job_openings.income_range_id

    json.job_description job_openings.job_description

    json.is_remote_available job_openings.is_remote_available

    json.employment_status_id job_openings.employment_status_id

    json.company_id job_openings.company_id

    json.trial_period job_openings.trial_period

    json.working_hours job_openings.working_hours

    json.avg_overtime_hours job_openings.avg_overtime_hours

    json.trial_period_conditions job_openings.trial_period_conditions

    json.workplace job_openings.workplace

    json.qualification job_openings.qualification

    json.benefits job_openings.benefits

    json.vacation job_openings.vacation

    json.bonus job_openings.bonus

    json.promotion job_openings.promotion

    json.appeal_point job_openings.appeal_point

    json.passive_smoking_countermeasure_id job_openings.passive_smoking_countermeasure_id

    json.career_direction_id job_openings.career_direction_id

    json.job_title_id job_openings.job_title_id

    json.job_applications job_openings.job_applications do |job_applications|
      json.id job_applications.id

      json.created_at job_applications.created_at

      json.updated_at job_applications.updated_at

      json.applicant_id job_applications.applicant_id

      json.job_opening_id job_applications.job_opening_id

      json.status job_applications.status
    end

    json.job_opening_favorites job_openings.job_opening_favorites do |job_opening_favorites|
      json.id job_opening_favorites.id

      json.created_at job_opening_favorites.created_at

      json.updated_at job_opening_favorites.updated_at

      json.job_opening_id job_opening_favorites.job_opening_id
    end

    json.vacation job_openings.vacation

    json.appeal_point job_openings.appeal_point

    json.job_opening_valued_competencies job_openings.job_opening_valued_competencies do |job_opening_valued_competencies|
      json.id job_opening_valued_competencies.id

      json.created_at job_opening_valued_competencies.created_at

      json.updated_at job_opening_valued_competencies.updated_at

      json.job_opening_id job_opening_valued_competencies.job_opening_id

      json.valued_competency_id job_opening_valued_competencies.valued_competency_id
    end

    json.future_career_path job_openings.future_career_path

    json.trending_keywords job_openings.trending_keywords

    json.business_trip_availability job_openings.business_trip_availability

    json.transfers job_openings.transfers

    json.publication_start_date job_openings.publication_start_date

    json.publication_end_date job_openings.publication_end_date

    json.slug job_openings.slug

    json.image job_openings.image

    json.is_recommended job_openings.is_recommended
  end

  json.income_range_id income_range.income_range_id
end
