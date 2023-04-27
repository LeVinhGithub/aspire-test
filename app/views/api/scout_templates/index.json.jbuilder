json.total_pages @total_pages

json.scout_templates @scout_templates do |scout_template|
  json.id scout_template.id

  json.created_at scout_template.created_at

  json.updated_at scout_template.updated_at

  json.title scout_template.title

  json.template_text scout_template.template_text

  json.company_id scout_template.company_id
end
