json.total_pages @total_pages

json.school_types @school_types do |school_type|
  json.id school_type.id

  json.created_at school_type.created_at

  json.updated_at school_type.updated_at

  json.name school_type.name

  json.applicant_schools school_type.applicant_schools do |applicant_schools|
    json.id applicant_schools.id

    json.created_at applicant_schools.created_at

    json.updated_at applicant_schools.updated_at

    json.graduation_date applicant_schools.graduation_date

    json.name applicant_schools.name

    json.degree applicant_schools.degree

    json.major applicant_schools.major

    json.school_type_id applicant_schools.school_type_id

    json.applicant_id applicant_schools.applicant_id
  end

  json.school_type_id school_type.school_type_id

  json.name school_type.name
end
