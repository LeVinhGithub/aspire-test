json.total_pages @total_pages

json.recruitment_notes @recruitment_notes do |recruitment_note|
  json.id recruitment_note.id

  json.created_at recruitment_note.created_at

  json.updated_at recruitment_note.updated_at

  json.applicant_id recruitment_note.applicant_id

  json.company_id recruitment_note.company_id

  json.note recruitment_note.note
end
