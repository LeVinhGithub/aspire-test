if @error_object.present?

  json.error_object @error_object

else

  json.target_list_applicant do
    json.id @target_list_applicant.id

    json.created_at @target_list_applicant.created_at

    json.updated_at @target_list_applicant.updated_at

    json.target_list_id @target_list_applicant.target_list_id

    if @target_list_applicant.target_list.present?
      json.target_list @target_list_applicant.target_list do |target_list|
        json.id target_list.id

        json.created_at target_list.created_at

        json.updated_at target_list.updated_at

        json.title target_list.title

        json.company_id target_list.company_id
      end
    end

    json.applicant_id @target_list_applicant.applicant_id

    if @target_list_applicant.applicant.present?
      json.applicant @target_list_applicant.applicant do |applicant|
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

        json.confirmation_email_resent_count applicant.confirmation_email_resent_count

        json.number_of_companies applicant.number_of_companies

        json.is_suspended applicant.is_suspended
      end
    end
  end

end
