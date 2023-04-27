if @error_object.present?

  json.error_object @error_object

else

  json.applicant_language do
    json.id @applicant_language.id

    json.created_at @applicant_language.created_at

    json.updated_at @applicant_language.updated_at

    json.proficiency @applicant_language.proficiency

    json.language_id @applicant_language.language_id

    json.applicant_id @applicant_language.applicant_id
  end

end
