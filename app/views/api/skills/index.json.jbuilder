json.total_pages @total_pages

json.skills @skills do |skill|
  json.id skill.id

  json.created_at skill.created_at

  json.updated_at skill.updated_at

  json.name skill.name

  json.applicant_id skill.applicant_id
end
