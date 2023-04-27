json.restriction do
  json.id @restriction.id

  json.created_at @restriction.created_at

  json.updated_at @restriction.updated_at

  json.company_id @restriction.company_id

  if @restriction.company.present?
    json.company @restriction.company do |company|
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

      json.ipo company.listing_classification

      json.representative_name company.representative_name

      json.slug company.slug

      json.image company.image

      json.capital company.capital

      json.ipo company.ipo
    end
  end

  json.applicant_id @restriction.applicant_id

  if @restriction.applicant.present?
    json.applicant @restriction.applicant do |applicant|
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

            json.restrictions applicant.restrictions do |restrictions|
              json.id restrictions.id

              json.created_at restrictions.created_at

              json.updated_at restrictions.updated_at

              json.company_id restrictions.company_id

              json.applicant_id restrictions.applicant_id
            end

            json.restrictions applicant.restrictions do |restrictions|
              json.id restrictions.id

              json.created_at restrictions.created_at

              json.updated_at restrictions.updated_at

              json.company_id restrictions.company_id

              json.applicant_id restrictions.applicant_id
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
            end

            json.restrictions applicant.restrictions do |restrictions|
              json.id restrictions.id

              json.created_at restrictions.created_at

              json.updated_at restrictions.updated_at

              json.company_id restrictions.company_id

              json.applicant_id restrictions.applicant_id
            end
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

            json.restrictions applicant.restrictions do |restrictions|
              json.id restrictions.id

              json.created_at restrictions.created_at

              json.updated_at restrictions.updated_at

              json.company_id restrictions.company_id

              json.applicant_id restrictions.applicant_id
            end

            json.restrictions applicant.restrictions do |restrictions|
              json.id restrictions.id

              json.created_at restrictions.created_at

              json.updated_at restrictions.updated_at

              json.company_id restrictions.company_id

              json.applicant_id restrictions.applicant_id
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
            end

            json.restrictions applicant.restrictions do |restrictions|
              json.id restrictions.id

              json.created_at restrictions.created_at

              json.updated_at restrictions.updated_at

              json.company_id restrictions.company_id

              json.applicant_id restrictions.applicant_id
            end
          end
        end
      end
    end
  end

  json.reason @restriction.reason
end
