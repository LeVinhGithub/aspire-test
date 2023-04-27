json.total_pages @total_pages

json.languages @languages do |language|
  json.id language.id

  json.created_at language.created_at

  json.updated_at language.updated_at

  json.name language.name

  json.applicant_languages language.applicant_languages do |applicant_languages|
    json.id applicant_languages.id

    json.created_at applicant_languages.created_at

    json.updated_at applicant_languages.updated_at

    json.proficiency applicant_languages.proficiency

    json.language_id applicant_languages.language_id

    json.applicant_id applicant_languages.applicant_id

    json.other_language applicant_languages.other_language
  end

  json.language_id language.language_id
end
