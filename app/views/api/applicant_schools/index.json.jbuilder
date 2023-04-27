json.total_pages @total_pages

json.applicant_schools @applicant_schools do |applicant_school|
  json.id applicant_school.id

  json.created_at applicant_school.created_at

  json.updated_at applicant_school.updated_at

  json.graduation_date applicant_school.graduation_date

  json.name applicant_school.name

  json.degree applicant_school.degree

  json.major applicant_school.major

  json.school_type_id applicant_school.school_type_id

  json.applicant_id applicant_school.applicant_id
end
