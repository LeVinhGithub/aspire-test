json.total_pages @total_pages

json.applicants @applicants do |applicant|
  json.id applicant.id

  json.created_at applicant.created_at

  json.updated_at applicant.updated_at

  json.full_name applicant.full_name

  json.furigana applicant.furigana

  json.phone_number applicant.phone_number

  json.birthdate applicant.birthdate

  json.applicant_languages applicant.applicant_languages do |applicant_languages|
    json.id applicant_languages.id

    json.created_at applicant_languages.created_at

    json.updated_at applicant_languages.updated_at

    json.proficiency applicant_languages.proficiency

    json.language_id applicant_languages.language_id

    json.applicant_id applicant_languages.applicant_id
  end

  json.address applicant.address

  json.income_range_id applicant.income_range_id

  json.availability applicant.availability

  json.applicant_schools applicant.applicant_schools do |applicant_schools|
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

  json.resume_file applicant.resume_file

  json.description applicant.description

  json.management_experience_id applicant.management_experience_id

  json.description applicant.description

  json.applicant_industries applicant.applicant_industries do |applicant_industries|
    json.id applicant_industries.id

    json.created_at applicant_industries.created_at

    json.updated_at applicant_industries.updated_at

    json.industry_id applicant_industries.industry_id

    json.applicant_id applicant_industries.applicant_id
  end

  json.messages applicant.messages do |messages|
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

  json.location_id applicant.location_id

  json.job_applications applicant.job_applications do |job_applications|
    json.id job_applications.id

    json.created_at job_applications.created_at

    json.updated_at job_applications.updated_at

    json.applicant_id job_applications.applicant_id

    json.job_opening_id job_applications.job_opening_id

    json.status job_applications.status
  end

  json.job_opening_favorites applicant.job_opening_favorites do |job_opening_favorites|
    json.id job_opening_favorites.id

    json.created_at job_opening_favorites.created_at

    json.updated_at job_opening_favorites.updated_at

    json.job_opening_id job_opening_favorites.job_opening_id
  end

  json.email applicant.email

  json.furigana applicant.furigana

  json.gender applicant.gender

  json.address applicant.address

  json.resume_file applicant.resume_file

  json.job_experiences applicant.job_experiences do |job_experiences|
    json.id job_experiences.id

    json.created_at job_experiences.created_at

    json.updated_at job_experiences.updated_at

    json.company_name job_experiences.company_name

    json.start_date job_experiences.start_date

    json.end_date job_experiences.end_date

    json.applicant_id job_experiences.applicant_id

    json.job_title_id job_experiences.job_title_id
  end

  json.restrictions applicant.restrictions do |restrictions|
    json.id restrictions.id

    json.created_at restrictions.created_at

    json.updated_at restrictions.updated_at

    json.company_id restrictions.company_id

    json.applicant_id restrictions.applicant_id

    if restrictions.applicant.present?
      json.applicant restrictions.applicant do |applicant|
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

        json.restrictions applicant.restrictions do |restrictions|
          json.id restrictions.id

          json.created_at restrictions.created_at

          json.updated_at restrictions.updated_at

          json.company_id restrictions.company_id

          json.applicant_id restrictions.applicant_id

          if restrictions.applicant.present?
            json.applicant restrictions.applicant do |applicant|
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
            end
          end

          if restrictions.applicant.present?
            json.applicant restrictions.applicant do |applicant|
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
            end
          end
        end

        json.restrictions applicant.restrictions do |restrictions|
          json.id restrictions.id

          json.created_at restrictions.created_at

          json.updated_at restrictions.updated_at

          json.company_id restrictions.company_id

          json.applicant_id restrictions.applicant_id

          if restrictions.applicant.present?
            json.applicant restrictions.applicant do |applicant|
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
            end
          end

          if restrictions.applicant.present?
            json.applicant restrictions.applicant do |applicant|
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
            end
          end
        end
      end
    end

    if restrictions.applicant.present?
      json.applicant restrictions.applicant do |applicant|
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

        json.restrictions applicant.restrictions do |restrictions|
          json.id restrictions.id

          json.created_at restrictions.created_at

          json.updated_at restrictions.updated_at

          json.company_id restrictions.company_id

          json.applicant_id restrictions.applicant_id

          if restrictions.applicant.present?
            json.applicant restrictions.applicant do |applicant|
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
            end
          end

          if restrictions.applicant.present?
            json.applicant restrictions.applicant do |applicant|
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
            end
          end
        end

        json.restrictions applicant.restrictions do |restrictions|
          json.id restrictions.id

          json.created_at restrictions.created_at

          json.updated_at restrictions.updated_at

          json.company_id restrictions.company_id

          json.applicant_id restrictions.applicant_id

          if restrictions.applicant.present?
            json.applicant restrictions.applicant do |applicant|
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
            end
          end

          if restrictions.applicant.present?
            json.applicant restrictions.applicant do |applicant|
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
            end
          end
        end
      end
    end

    json.reason restrictions.reason
  end

  json.target_lists applicant.target_lists do |target_lists|
    json.target_list_id target_lists.target_list_id
  end
end
