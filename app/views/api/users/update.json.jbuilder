if @error_object.present?

  json.error_object @error_object

else

  json.user do
    json.id @user.id

    json.created_at @user.created_at

    json.updated_at @user.updated_at

    json.role @user.role

    json.email @user.email
  end

end
