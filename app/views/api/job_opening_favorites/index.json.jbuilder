json.total_pages @total_pages

json.job_opening_favorites @job_opening_favorites do |job_opening_favorite|
  json.id job_opening_favorite.id

  json.created_at job_opening_favorite.created_at

  json.updated_at job_opening_favorite.updated_at

  json.job_opening_id job_opening_favorite.job_opening_id

  json.applicant_id job_opening_favorite.applicant_id
end
