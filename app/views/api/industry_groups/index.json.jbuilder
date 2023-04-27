json.total_pages @total_pages

json.industry_groups @industry_groups do |industry_group|
  json.id industry_group.id

  json.created_at industry_group.created_at

  json.updated_at industry_group.updated_at

  json.name industry_group.name

  json.industries industry_group.industries do |industries|
    json.id industries.id

    json.created_at industries.created_at

    json.updated_at industries.updated_at

    json.name industries.name

    json.industry_group_id industries.industry_group_id
  end
end
