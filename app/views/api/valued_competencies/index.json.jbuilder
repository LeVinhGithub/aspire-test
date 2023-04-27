json.total_pages @total_pages

json.valued_competencies @valued_competencies do |valued_competency|
  json.id valued_competency.id

  json.created_at valued_competency.created_at

  json.updated_at valued_competency.updated_at

  json.name valued_competency.name

  json.job_opening_valued_competencies valued_competency.job_opening_valued_competencies do |job_opening_valued_competencies|
    json.id job_opening_valued_competencies.id

    json.created_at job_opening_valued_competencies.created_at

    json.updated_at job_opening_valued_competencies.updated_at

    json.job_opening_id job_opening_valued_competencies.job_opening_id

    json.valued_competency_id job_opening_valued_competencies.valued_competency_id
  end

  json.valued_competency_id valued_competency.valued_competency_id
end
