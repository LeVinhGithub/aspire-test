json.company_user do
  json.id @company_user.id

  json.created_at @company_user.created_at

  json.updated_at @company_user.updated_at

  json.company_id @company_user.company_id

  json.full_name @company_user.full_name

  json.position @company_user.position

  json.photo @company_user.photo

  json.email @company_user.email

  json.role @company_user.role

  json.phone_number @company_user.phone_number
end
