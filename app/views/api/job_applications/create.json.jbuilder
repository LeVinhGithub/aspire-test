if @error_object.present?

  json.error_object @error_object

else

  json.job_application do
    json.id @job_application.id

    json.created_at @job_application.created_at

    json.updated_at @job_application.updated_at

    json.applicant_id @job_application.applicant_id

    json.job_opening_id @job_application.job_opening_id

    json.status @job_application.status
  end

end
