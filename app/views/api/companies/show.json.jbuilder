json.company do
  json.id @company.id

  json.created_at @company.created_at

  json.updated_at @company.updated_at

  json.name @company.name

  json.company_users @company.company_users do |company_users|
    json.id company_users.id

    json.created_at company_users.created_at

    json.updated_at company_users.updated_at

    json.company_id company_users.company_id

    json.full_name company_users.full_name

    json.position company_users.position

    json.photo company_users.photo

    json.photo company_users.photo

    json.email company_users.email

    json.role company_users.role
  end

  json.company_id @company.company_id

  json.logo @company.logo

  json.location @company.location

  json.launched_year @company.launched_year

  json.business_details @company.business_details

  json.number_of_employees @company.number_of_employees

  json.industry_id @company.industry_id

  json.mission @company.mission

  json.vision @company.vision

  json.representative_photo @company.representative_photo

  json.representative_profile @company.representative_profile

  json.ipo @company.listing_classification

  json.value @company.value

  json.job_openings @company.job_openings do |job_openings|
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

    json.job_applications job_openings.job_applications do |job_applications|
      json.id job_applications.id

      json.created_at job_applications.created_at

      json.updated_at job_applications.updated_at

      json.applicant_id job_applications.applicant_id

      json.job_opening_id job_applications.job_opening_id

      json.status job_applications.status
    end

    json.job_opening_favorites job_openings.job_opening_favorites do |job_opening_favorites|
      json.id job_opening_favorites.id

      json.created_at job_opening_favorites.created_at

      json.updated_at job_opening_favorites.updated_at

      json.job_opening_id job_opening_favorites.job_opening_id

      json.applicant_id job_opening_favorites.applicant_id
    end

    json.vacation job_openings.vacation

    json.appeal_point job_openings.appeal_point

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
  end

  json.company_id @company.company_id

  json.logo @company.logo

  json.business_details @company.business_details

  json.representative_profile @company.representative_profile

  json.representative_name @company.representative_name

  json.company_id @company.company_id

  json.messages @company.messages do |messages|
    json.id messages.id

    json.created_at messages.created_at

    json.updated_at messages.updated_at

    json.applicant_id messages.applicant_id

    json.text messages.text

    json.attachment messages.attachment

    json.reply_to_message_id messages.reply_to_message_id

    json.company_id messages.company_id

    if messages.company.present?
      json.company messages.company do |company|
        json.id company.id

        json.created_at company.created_at

        json.updated_at company.updated_at

        json.name company.name

        json.logo company.logo

        json.location company.location

        json.launched_year company.launched_year

        json.business_details company.business_details

        json.number_of_employees company.number_of_employees

        json.industry_id company.industry_id

        json.mission company.mission

        json.vision company.vision

        json.value company.value

        json.representative_photo company.representative_photo

        json.representative_profile company.representative_profile

        json.ipo company.listing_classification

        json.representative_name company.representative_name

        json.slug company.slug

        if company.industry.present?
          json.industry company.industry do |industry|
            json.id industry.id

            json.created_at industry.created_at

            json.updated_at industry.updated_at

            json.name industry.name

            json.companies industry.companies do |companies|
              json.id companies.id

              json.created_at companies.created_at

              json.updated_at companies.updated_at

              json.name companies.name

              json.logo companies.logo

              json.location companies.location

              json.launched_year companies.launched_year

              json.business_details companies.business_details

              json.number_of_employees companies.number_of_employees

              json.industry_id companies.industry_id

              json.mission companies.mission

              json.vision companies.vision

              json.value companies.value

              json.representative_photo companies.representative_photo

              json.representative_profile companies.representative_profile

              json.ipo companies.listing_classification

              json.representative_name companies.representative_name

              json.slug companies.slug

              json.messages companies.messages do |messages|
                json.id messages.id

                json.created_at messages.created_at

                json.updated_at messages.updated_at

                json.applicant_id messages.applicant_id

                json.text messages.text

                json.attachment messages.attachment

                json.reply_to_message_id messages.reply_to_message_id

                json.company_id messages.company_id

                if messages.company.present?
                  json.company messages.company do |company|
                    json.id company.id

                    json.created_at company.created_at

                    json.updated_at company.updated_at

                    json.name company.name

                    json.logo company.logo

                    json.location company.location

                    json.launched_year company.launched_year

                    json.business_details company.business_details

                    json.number_of_employees company.number_of_employees

                    json.industry_id company.industry_id

                    json.mission company.mission

                    json.vision company.vision

                    json.value company.value

                    json.representative_photo company.representative_photo

                    json.representative_profile company.representative_profile

                    json.ipo company.listing_classification

                    json.representative_name company.representative_name

                    json.slug company.slug

                    json.company_employees company.company_employees do |company_employees|
                      json.id company_employees.id

                      json.created_at company_employees.created_at

                      json.updated_at company_employees.updated_at

                      json.company_id company_employees.company_id
                    end
                  end
                end

                if messages.company.present?
                  json.company messages.company do |company|
                    json.id company.id

                    json.created_at company.created_at

                    json.updated_at company.updated_at

                    json.name company.name

                    json.logo company.logo

                    json.location company.location

                    json.launched_year company.launched_year

                    json.business_details company.business_details

                    json.number_of_employees company.number_of_employees

                    json.industry_id company.industry_id

                    json.mission company.mission

                    json.vision company.vision

                    json.value company.value

                    json.representative_photo company.representative_photo

                    json.representative_profile company.representative_profile

                    json.ipo company.listing_classification

                    json.representative_name company.representative_name

                    json.slug company.slug

                    json.company_employees company.company_employees do |company_employees|
                      json.id company_employees.id

                      json.created_at company_employees.created_at

                      json.updated_at company_employees.updated_at

                      json.company_id company_employees.company_id
                    end
                  end
                end
              end

              json.messages companies.messages do |messages|
                json.id messages.id

                json.created_at messages.created_at

                json.updated_at messages.updated_at

                json.applicant_id messages.applicant_id

                json.text messages.text

                json.attachment messages.attachment

                json.reply_to_message_id messages.reply_to_message_id

                json.company_id messages.company_id

                if messages.company.present?
                  json.company messages.company do |company|
                    json.id company.id

                    json.created_at company.created_at

                    json.updated_at company.updated_at

                    json.name company.name

                    json.logo company.logo

                    json.location company.location

                    json.launched_year company.launched_year

                    json.business_details company.business_details

                    json.number_of_employees company.number_of_employees

                    json.industry_id company.industry_id

                    json.mission company.mission

                    json.vision company.vision

                    json.value company.value

                    json.representative_photo company.representative_photo

                    json.representative_profile company.representative_profile

                    json.ipo company.listing_classification

                    json.representative_name company.representative_name

                    json.slug company.slug

                    json.company_employees company.company_employees do |company_employees|
                      json.id company_employees.id

                      json.created_at company_employees.created_at

                      json.updated_at company_employees.updated_at

                      json.company_id company_employees.company_id
                    end
                  end
                end

                if messages.company.present?
                  json.company messages.company do |company|
                    json.id company.id

                    json.created_at company.created_at

                    json.updated_at company.updated_at

                    json.name company.name

                    json.logo company.logo

                    json.location company.location

                    json.launched_year company.launched_year

                    json.business_details company.business_details

                    json.number_of_employees company.number_of_employees

                    json.industry_id company.industry_id

                    json.mission company.mission

                    json.vision company.vision

                    json.value company.value

                    json.representative_photo company.representative_photo

                    json.representative_profile company.representative_profile

                    json.ipo company.listing_classification

                    json.representative_name company.representative_name

                    json.slug company.slug

                    json.company_employees company.company_employees do |company_employees|
                      json.id company_employees.id

                      json.created_at company_employees.created_at

                      json.updated_at company_employees.updated_at

                      json.company_id company_employees.company_id
                    end
                  end
                end
              end

              json.company_employees companies.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end
        end

        json.messages company.messages do |messages|
          json.id messages.id

          json.created_at messages.created_at

          json.updated_at messages.updated_at

          json.applicant_id messages.applicant_id

          json.text messages.text

          json.attachment messages.attachment

          json.reply_to_message_id messages.reply_to_message_id

          json.company_id messages.company_id

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end
        end

        json.messages company.messages do |messages|
          json.id messages.id

          json.created_at messages.created_at

          json.updated_at messages.updated_at

          json.applicant_id messages.applicant_id

          json.text messages.text

          json.attachment messages.attachment

          json.reply_to_message_id messages.reply_to_message_id

          json.company_id messages.company_id

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end
        end

        json.company_employees company.company_employees do |company_employees|
          json.id company_employees.id

          json.created_at company_employees.created_at

          json.updated_at company_employees.updated_at

          json.company_id company_employees.company_id
        end
      end
    end

    if messages.company.present?
      json.company messages.company do |company|
        json.id company.id

        json.created_at company.created_at

        json.updated_at company.updated_at

        json.name company.name

        json.logo company.logo

        json.location company.location

        json.launched_year company.launched_year

        json.business_details company.business_details

        json.number_of_employees company.number_of_employees

        json.industry_id company.industry_id

        json.mission company.mission

        json.vision company.vision

        json.value company.value

        json.representative_photo company.representative_photo

        json.representative_profile company.representative_profile

        json.ipo company.listing_classification

        json.representative_name company.representative_name

        json.slug company.slug

        if company.industry.present?
          json.industry company.industry do |industry|
            json.id industry.id

            json.created_at industry.created_at

            json.updated_at industry.updated_at

            json.name industry.name

            json.companies industry.companies do |companies|
              json.id companies.id

              json.created_at companies.created_at

              json.updated_at companies.updated_at

              json.name companies.name

              json.logo companies.logo

              json.location companies.location

              json.launched_year companies.launched_year

              json.business_details companies.business_details

              json.number_of_employees companies.number_of_employees

              json.industry_id companies.industry_id

              json.mission companies.mission

              json.vision companies.vision

              json.value companies.value

              json.representative_photo companies.representative_photo

              json.representative_profile companies.representative_profile

              json.ipo companies.listing_classification

              json.representative_name companies.representative_name

              json.slug companies.slug

              json.messages companies.messages do |messages|
                json.id messages.id

                json.created_at messages.created_at

                json.updated_at messages.updated_at

                json.applicant_id messages.applicant_id

                json.text messages.text

                json.attachment messages.attachment

                json.reply_to_message_id messages.reply_to_message_id

                json.company_id messages.company_id

                if messages.company.present?
                  json.company messages.company do |company|
                    json.id company.id

                    json.created_at company.created_at

                    json.updated_at company.updated_at

                    json.name company.name

                    json.logo company.logo

                    json.location company.location

                    json.launched_year company.launched_year

                    json.business_details company.business_details

                    json.number_of_employees company.number_of_employees

                    json.industry_id company.industry_id

                    json.mission company.mission

                    json.vision company.vision

                    json.value company.value

                    json.representative_photo company.representative_photo

                    json.representative_profile company.representative_profile

                    json.ipo company.listing_classification

                    json.representative_name company.representative_name

                    json.slug company.slug

                    json.company_employees company.company_employees do |company_employees|
                      json.id company_employees.id

                      json.created_at company_employees.created_at

                      json.updated_at company_employees.updated_at

                      json.company_id company_employees.company_id
                    end
                  end
                end

                if messages.company.present?
                  json.company messages.company do |company|
                    json.id company.id

                    json.created_at company.created_at

                    json.updated_at company.updated_at

                    json.name company.name

                    json.logo company.logo

                    json.location company.location

                    json.launched_year company.launched_year

                    json.business_details company.business_details

                    json.number_of_employees company.number_of_employees

                    json.industry_id company.industry_id

                    json.mission company.mission

                    json.vision company.vision

                    json.value company.value

                    json.representative_photo company.representative_photo

                    json.representative_profile company.representative_profile

                    json.ipo company.listing_classification

                    json.representative_name company.representative_name

                    json.slug company.slug

                    json.company_employees company.company_employees do |company_employees|
                      json.id company_employees.id

                      json.created_at company_employees.created_at

                      json.updated_at company_employees.updated_at

                      json.company_id company_employees.company_id
                    end
                  end
                end
              end

              json.messages companies.messages do |messages|
                json.id messages.id

                json.created_at messages.created_at

                json.updated_at messages.updated_at

                json.applicant_id messages.applicant_id

                json.text messages.text

                json.attachment messages.attachment

                json.reply_to_message_id messages.reply_to_message_id

                json.company_id messages.company_id

                if messages.company.present?
                  json.company messages.company do |company|
                    json.id company.id

                    json.created_at company.created_at

                    json.updated_at company.updated_at

                    json.name company.name

                    json.logo company.logo

                    json.location company.location

                    json.launched_year company.launched_year

                    json.business_details company.business_details

                    json.number_of_employees company.number_of_employees

                    json.industry_id company.industry_id

                    json.mission company.mission

                    json.vision company.vision

                    json.value company.value

                    json.representative_photo company.representative_photo

                    json.representative_profile company.representative_profile

                    json.ipo company.listing_classification

                    json.representative_name company.representative_name

                    json.slug company.slug

                    json.company_employees company.company_employees do |company_employees|
                      json.id company_employees.id

                      json.created_at company_employees.created_at

                      json.updated_at company_employees.updated_at

                      json.company_id company_employees.company_id
                    end
                  end
                end

                if messages.company.present?
                  json.company messages.company do |company|
                    json.id company.id

                    json.created_at company.created_at

                    json.updated_at company.updated_at

                    json.name company.name

                    json.logo company.logo

                    json.location company.location

                    json.launched_year company.launched_year

                    json.business_details company.business_details

                    json.number_of_employees company.number_of_employees

                    json.industry_id company.industry_id

                    json.mission company.mission

                    json.vision company.vision

                    json.value company.value

                    json.representative_photo company.representative_photo

                    json.representative_profile company.representative_profile

                    json.ipo company.listing_classification

                    json.representative_name company.representative_name

                    json.slug company.slug

                    json.company_employees company.company_employees do |company_employees|
                      json.id company_employees.id

                      json.created_at company_employees.created_at

                      json.updated_at company_employees.updated_at

                      json.company_id company_employees.company_id
                    end
                  end
                end
              end

              json.company_employees companies.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end
        end

        json.messages company.messages do |messages|
          json.id messages.id

          json.created_at messages.created_at

          json.updated_at messages.updated_at

          json.applicant_id messages.applicant_id

          json.text messages.text

          json.attachment messages.attachment

          json.reply_to_message_id messages.reply_to_message_id

          json.company_id messages.company_id

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end
        end

        json.messages company.messages do |messages|
          json.id messages.id

          json.created_at messages.created_at

          json.updated_at messages.updated_at

          json.applicant_id messages.applicant_id

          json.text messages.text

          json.attachment messages.attachment

          json.reply_to_message_id messages.reply_to_message_id

          json.company_id messages.company_id

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end
        end

        json.company_employees company.company_employees do |company_employees|
          json.id company_employees.id

          json.created_at company_employees.created_at

          json.updated_at company_employees.updated_at

          json.company_id company_employees.company_id
        end
      end
    end
  end

  json.slug @company.slug

  json.restrictions @company.restrictions do |restrictions|
    json.id restrictions.id

    json.created_at restrictions.created_at

    json.updated_at restrictions.updated_at

    json.company_id restrictions.company_id

    json.applicant_id restrictions.applicant_id

    json.reason restrictions.reason
  end

  if @company.industry.present?
    json.industry @company.industry do |industry|
      json.id industry.id

      json.created_at industry.created_at

      json.updated_at industry.updated_at

      json.name industry.name

      json.companies industry.companies do |companies|
        json.id companies.id

        json.created_at companies.created_at

        json.updated_at companies.updated_at

        json.name companies.name

        json.logo companies.logo

        json.location companies.location

        json.launched_year companies.launched_year

        json.business_details companies.business_details

        json.number_of_employees companies.number_of_employees

        json.industry_id companies.industry_id

        json.mission companies.mission

        json.vision companies.vision

        json.value companies.value

        json.representative_photo companies.representative_photo

        json.representative_profile companies.representative_profile

        json.ipo companies.listing_classification

        json.representative_name companies.representative_name

        json.slug companies.slug

        json.messages companies.messages do |messages|
          json.id messages.id

          json.created_at messages.created_at

          json.updated_at messages.updated_at

          json.applicant_id messages.applicant_id

          json.text messages.text

          json.attachment messages.attachment

          json.reply_to_message_id messages.reply_to_message_id

          json.company_id messages.company_id

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end
        end

        json.messages companies.messages do |messages|
          json.id messages.id

          json.created_at messages.created_at

          json.updated_at messages.updated_at

          json.applicant_id messages.applicant_id

          json.text messages.text

          json.attachment messages.attachment

          json.reply_to_message_id messages.reply_to_message_id

          json.company_id messages.company_id

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end

          if messages.company.present?
            json.company messages.company do |company|
              json.id company.id

              json.created_at company.created_at

              json.updated_at company.updated_at

              json.name company.name

              json.logo company.logo

              json.location company.location

              json.launched_year company.launched_year

              json.business_details company.business_details

              json.number_of_employees company.number_of_employees

              json.industry_id company.industry_id

              json.mission company.mission

              json.vision company.vision

              json.value company.value

              json.representative_photo company.representative_photo

              json.representative_profile company.representative_profile

              json.ipo company.listing_classification

              json.representative_name company.representative_name

              json.slug company.slug

              json.company_employees company.company_employees do |company_employees|
                json.id company_employees.id

                json.created_at company_employees.created_at

                json.updated_at company_employees.updated_at

                json.company_id company_employees.company_id
              end
            end
          end
        end

        json.company_employees companies.company_employees do |company_employees|
          json.id company_employees.id

          json.created_at company_employees.created_at

          json.updated_at company_employees.updated_at

          json.company_id company_employees.company_id
        end
      end
    end
  end

  json.image @company.image

  json.capital @company.capital

  json.company_employees @company.company_employees do |company_employees|
    json.id company_employees.id

    json.created_at company_employees.created_at

    json.updated_at company_employees.updated_at

    json.company_id company_employees.company_id

    json.full_name company_employees.full_name

    json.profile company_employees.profile

    json.photo company_employees.photo

    json.is_high_rank_employee company_employees.is_high_rank_employee
  end

  json.ipo @company.ipo

  json.business_id @company.business_id

  json.name_furigana @company.name_furigana

  json.scout_templates @company.scout_templates do |scout_templates|
    json.id scout_templates.id

    json.created_at scout_templates.created_at

    json.updated_at scout_templates.updated_at

    json.title scout_templates.title

    json.template_text scout_templates.template_text

    json.company_id scout_templates.company_id
  end

  json.target_lists @company.target_lists do |target_lists|
    json.id target_lists.id

    json.created_at target_lists.created_at

    json.updated_at target_lists.updated_at

    json.title target_lists.title

    json.company_id target_lists.company_id

    json.applicants target_lists.applicants do |applicants|
      json.applicant_id applicants.applicant_id
    end
  end

  json.recruitment_notes @company.recruitment_notes do |recruitment_notes|
    json.id recruitment_notes.id

    json.created_at recruitment_notes.created_at

    json.updated_at recruitment_notes.updated_at

    json.applicant_id recruitment_notes.applicant_id

    json.note recruitment_notes.note
  end
end
