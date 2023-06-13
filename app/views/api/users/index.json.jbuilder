if @message.present?

  json.message @message

else

  json.total_pages @total_pages

  json.users @users do |user|
    json.id user.id

    json.created_at user.created_at

    json.updated_at user.updated_at

    json.role user.role

    json.email user.email
  end

end
