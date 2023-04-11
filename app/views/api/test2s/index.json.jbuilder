if @message.present?

  json.message @message

else

  json.total_pages @total_pages
  json.test2s @test2s do |test2|
    json.id test2.id
    json.created_at test2.created_at
    json.updated_at test2.updated_at

    if test2.user.present?
      json.user do
        json.id test2.user.id
        json.created_at test2.user.created_at
        json.updated_at test2.user.updated_at
        json.name test2.user.name
        json.introduce test2.user.introduce
        json.test2s_count test2.user.test2s_count
      end
    end

    json.user_id test2.user_id
    json.email test2.email
  end

end
