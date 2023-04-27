json.total_pages @total_pages

json.job_groups @job_groups do |job_group|
  json.id job_group.id

  json.created_at job_group.created_at

  json.updated_at job_group.updated_at

  json.job_titles job_group.job_titles do |job_titles|
    json.id job_titles.id

    json.created_at job_titles.created_at

    json.updated_at job_titles.updated_at

    json.name job_titles.name

    json.job_openings job_titles.job_openings do |job_openings|
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

      json.job_title_id job_openings.job_title_id

      json.vacation job_openings.vacation

      json.appeal_point job_openings.appeal_point

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

      json.future_career_path job_openings.future_career_path

      json.trending_keywords job_openings.trending_keywords

      json.business_trip_availability job_openings.business_trip_availability

      json.transfers job_openings.transfers

      json.publication_start_date job_openings.publication_start_date

      json.publication_end_date job_openings.publication_end_date

      json.slug job_openings.slug

      json.image job_openings.image

      json.is_recommended job_openings.is_recommended
    end

    json.job_experiences job_titles.job_experiences do |job_experiences|
      json.id job_experiences.id

      json.created_at job_experiences.created_at

      json.updated_at job_experiences.updated_at

      json.company_name job_experiences.company_name

      json.start_date job_experiences.start_date

      json.end_date job_experiences.end_date

      json.applicant_id job_experiences.applicant_id

      json.job_title_id job_experiences.job_title_id
    end

    json.job_group_id job_titles.job_group_id
  end

  json.name job_group.name

  json.job_group_id job_group.job_group_id
end
