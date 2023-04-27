json.total_pages @total_pages

json.target_lists @target_lists do |target_list|
  json.id target_list.id

  json.created_at target_list.created_at

  json.updated_at target_list.updated_at

  json.title target_list.title

  json.company_id target_list.company_id

  if target_list.company.present?
    json.company target_list.company do |company|
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

      json.listing_classification company.listing_classification

      json.representative_name company.representative_name

      json.slug company.slug

      json.image company.image

      json.capital company.capital

      json.ipo company.ipo

      json.business_id company.business_id

      json.name_furigana company.name_furigana
    end
  end
end
