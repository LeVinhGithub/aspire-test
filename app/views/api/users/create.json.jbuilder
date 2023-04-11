if @error_object.present?

  json.error_object @error_object

else

  json.user do
    json.id @user.id
    json.created_at @user.created_at
    json.updated_at @user.updated_at
    json.name @user.name
    json.introduce @user.introduce
    json.test2s_count @user.test2s_count

    json.test2s @user.test2s do |test2|
      json.id test2.id
      json.created_at test2.created_at
      json.updated_at test2.updated_at
      json.user_id test2.user_id
    end
  end

end
