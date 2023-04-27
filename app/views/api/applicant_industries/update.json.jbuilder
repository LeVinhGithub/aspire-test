if @error_object.present?

  json.error_object @error_object

else

  json.applicant_industry do
    json.id @applicant_industry.id

    json.created_at @applicant_industry.created_at

    json.updated_at @applicant_industry.updated_at

    json.industry_id @applicant_industry.industry_id

    json.applicant_id @applicant_industry.applicant_id
  end

end
