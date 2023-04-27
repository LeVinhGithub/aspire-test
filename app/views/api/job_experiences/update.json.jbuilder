if @error_object.present?

  json.error_object @error_object

else

  json.job_experience do
    json.id @job_experience.id

    json.created_at @job_experience.created_at

    json.updated_at @job_experience.updated_at

    json.company_name @job_experience.company_name

    json.start_date @job_experience.start_date

    json.end_date @job_experience.end_date

    json.applicant_id @job_experience.applicant_id

    json.job_title_id @job_experience.job_title_id
  end

end
