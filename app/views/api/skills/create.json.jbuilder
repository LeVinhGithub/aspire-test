if @error_object.present?

  json.error_object @error_object

else

  json.skill do
    json.id @skill.id

    json.created_at @skill.created_at

    json.updated_at @skill.updated_at

    json.name @skill.name

    json.applicant_id @skill.applicant_id
  end

end
