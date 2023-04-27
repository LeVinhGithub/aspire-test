if @error_object.present?

  json.error_object @error_object

else

  json.job_opening_favorite do
    json.id @job_opening_favorite.id

    json.created_at @job_opening_favorite.created_at

    json.updated_at @job_opening_favorite.updated_at

    json.job_opening_id @job_opening_favorite.job_opening_id

    json.applicant_id @job_opening_favorite.applicant_id
  end

end
