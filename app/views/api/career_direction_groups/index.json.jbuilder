json.total_pages @total_pages

json.career_direction_groups @career_direction_groups do |career_direction_group|
  json.id career_direction_group.id

  json.created_at career_direction_group.created_at

  json.updated_at career_direction_group.updated_at

  json.career_directions career_direction_group.career_directions do |career_directions|
    json.id career_directions.id

    json.created_at career_directions.created_at

    json.updated_at career_directions.updated_at

    json.job_openings career_directions.job_openings do |job_openings|
      json.id job_openings.id

      json.created_at job_openings.created_at

      json.updated_at job_openings.updated_at

      json.deployment job_openings.department

      json.position job_openings.position

      json.occupation_type_id job_openings.occupation_type_id

      json.location_id job_openings.location_id

      json.income_range_id job_openings.income_range_id

      json.job_description job_openings.job_description

      json.is_remote_available job_openings.is_remote_available

      json.employment_status_id job_openings.employment_status_id

      json.company_id job_openings.company_id

      json.trial_period job_openings.trial_period

      json.working_hours job_openings.working_hours

      json.avg_overtime_hours job_openings.avg_overtime_hours

      json.trial_period_conditions job_openings.trial_period_conditions

      json.workplace job_openings.workplace

      json.qualification job_openings.qualification

      json.benefits job_openings.benefits

      json.vacation job_openings.vacation

      json.bonus job_openings.bonus

      json.promotion job_openings.promotion

      json.appeal_point job_openings.appeal_point

      json.passive_smoking_countermeasure_id job_openings.passive_smoking_countermeasure_id

      json.career_direction_id job_openings.career_direction_id

      json.vacation job_openings.vacation

      json.appeal_point job_openings.appeal_point

      json.job_title_id job_openings.job_title_id

      json.job_applications job_openings.job_applications do |job_applications|
        json.id job_applications.id

        json.created_at job_applications.created_at

        json.updated_at job_applications.updated_at

        json.applicant_id job_applications.applicant_id

        json.job_opening_id job_applications.job_opening_id

        json.status job_applications.status

        json.approached_by_scout job_applications.approached_by_scout
      end

      json.job_opening_favorites job_openings.job_opening_favorites do |job_opening_favorites|
        json.id job_opening_favorites.id

        json.created_at job_opening_favorites.created_at

        json.updated_at job_opening_favorites.updated_at

        json.job_opening_id job_opening_favorites.job_opening_id
      end

      json.job_opening_valued_competencies job_openings.job_opening_valued_competencies do |job_opening_valued_competencies|
        json.id job_opening_valued_competencies.id

        json.created_at job_opening_valued_competencies.created_at

        json.updated_at job_opening_valued_competencies.updated_at

        json.job_opening_id job_opening_valued_competencies.job_opening_id

        json.valued_competency_id job_opening_valued_competencies.valued_competency_id
      end

      json.slug job_openings.slug

      json.image job_openings.image

      json.is_recommended job_openings.is_recommended

      json.future_career_path job_openings.future_career_path

      json.publication_start_date job_openings.publication_start_date

      json.trending_keywords job_openings.trending_keywords

      json.publication_end_date job_openings.publication_end_date

      json.business_trip_availability job_openings.business_trip_availability

      json.transfers job_openings.transfers
    end

    json.career_direction_group_id career_directions.career_direction_group_id

    json.name career_directions.name

    if career_directions.career_direction_group.present?
      json.career_direction_group career_directions.career_direction_group do |career_direction_group|
        json.id career_direction_group.id

        json.created_at career_direction_group.created_at

        json.updated_at career_direction_group.updated_at

        json.name career_direction_group.name
      end
    end
  end

  json.career_direction_group_id career_direction_group.career_direction_group_id

  json.name career_direction_group.name
end
