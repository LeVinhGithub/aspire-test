json.job_opening do
  json.id @job_opening.id

  json.created_at @job_opening.created_at

  json.updated_at @job_opening.updated_at

  json.department @job_opening.department

  json.position @job_opening.position

  json.occupation_type_id @job_opening.occupation_type_id

  json.location_id @job_opening.location_id

  json.income_range_id @job_opening.income_range_id

  json.job_description @job_opening.job_description

  json.is_remote_available @job_opening.is_remote_available

  json.employment_status_id @job_opening.employment_status_id

  json.company_id @job_opening.company_id

  json.trial_period @job_opening.trial_period

  json.working_hours @job_opening.working_hours

  json.avg_overtime_hours @job_opening.avg_overtime_hours

  json.trial_period_conditions @job_opening.trial_period_conditions

  json.workplace @job_opening.workplace

  json.qualification @job_opening.qualification

  json.benefits @job_opening.benefits

  json.vacation @job_opening.vacation

  json.bonus @job_opening.bonus

  json.promotion @job_opening.promotion

  json.appeal_point @job_opening.appeal_point

  json.passive_smoking_countermeasure_id @job_opening.passive_smoking_countermeasure_id

  json.career_direction_id @job_opening.career_direction_id

  json.job_title_id @job_opening.job_title_id

  json.future_career_path @job_opening.future_career_path

  json.trending_keywords @job_opening.trending_keywords

  json.business_trip_availability @job_opening.business_trip_availability

  json.transfers @job_opening.transfers

  json.publication_start_date @job_opening.publication_start_date

  json.publication_end_date @job_opening.publication_end_date

  json.slug @job_opening.slug

  json.image @job_opening.image

  json.is_recommended @job_opening.is_recommended

  json.status @job_opening.status

  json.pv @job_opening.pv

  if @job_opening.job_title.present?
    json.job_title @job_opening.job_title do |job_title|
      json.id job_title.id

      json.created_at job_title.created_at

      json.name job_title.name
    end
  end

  if @job_opening.job_title.present?
    json.job_title @job_opening.job_title do |job_title|
      json.id job_title.id

      json.created_at job_title.created_at

      json.updated_at job_title.updated_at

      json.name job_title.name

      json.job_group_id job_title.job_group_id
    end
  end
end
