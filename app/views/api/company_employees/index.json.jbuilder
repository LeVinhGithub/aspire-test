json.total_pages @total_pages

json.company_employees @company_employees do |company_employee|
  json.id company_employee.id

  json.created_at company_employee.created_at

  json.updated_at company_employee.updated_at

  json.company_id company_employee.company_id

  if company_employee.company.present?
    json.company company_employee.company do |company|
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

      json.image company.image

      json.capital company.capital

      json.ipo company.ipo
    end
  end

  json.full_name company_employee.full_name

  json.profile company_employee.profile

  json.photo company_employee.photo

  json.is_high_rank_employee company_employee.is_high_rank_employee
end
