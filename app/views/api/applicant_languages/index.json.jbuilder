json.total_pages @total_pages

json.applicant_languages @applicant_languages do |applicant_language|
  json.id applicant_language.id

  json.created_at applicant_language.created_at

  json.updated_at applicant_language.updated_at

  json.proficiency applicant_language.proficiency

  json.language_id applicant_language.language_id

  json.applicant_id applicant_language.applicant_id
end
