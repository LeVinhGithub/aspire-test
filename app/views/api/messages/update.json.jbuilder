if @error_object.present?

  json.error_object @error_object

else

  json.message do
    json.id @message.id

    json.created_at @message.created_at

    json.updated_at @message.updated_at

    json.applicant_id @message.applicant_id

    json.text @message.text

    json.attachment @message.attachment

    json.reply_to_message_id @message.reply_to_message_id

    json.attachment @message.attachment

    json.company_id @message.company_id

    if @message.company.present?
      json.company @message.company do |company|
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
            end
          end
        end

        json.image company.image

        json.capital company.capital

        json.ipo company.ipo
      end
    end

    if @message.company.present?
      json.company @message.company do |company|
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
            end
          end
        end
      end
    end
  end

end
