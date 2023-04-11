if @message.present?

  json.message @message

else

  json.total_pages @total_pages
  json.testung2s @testung2s do |testung2|
    json.id testung2.id
    json.created_at testung2.created_at
    json.updated_at testung2.updated_at

    if testung2.testing1.present?
      json.testing1 do
        json.id testung2.testing1.id
        json.created_at testung2.testing1.created_at
        json.updated_at testung2.testing1.updated_at
        json.cstring testung2.testing1.cstring
        json.stext testung2.testing1.stext
        json.cint testung2.testing1.cint
        json.cfloat testung2.testing1.cfloat
        json.cdate testung2.testing1.cdate
        json.cdatetime testung2.testing1.cdatetime
        json.cenump testung2.testing1.cenump
        json.c testung2.testing1.c
        json.cfile testung2.testing1.cfile
      end
    end

    json.testing1_id testung2.testing1_id
    json.email testung2.email
  end

end
