if @error_object.present?

  json.error_object @error_object

else

  json.testing1 do
    json.id @testing1.id
    json.created_at @testing1.created_at
    json.updated_at @testing1.updated_at
    json.cstring @testing1.cstring
    json.stext @testing1.stext
    json.cint @testing1.cint
    json.cfloat @testing1.cfloat
    json.cdate @testing1.cdate
    json.cdatetime @testing1.cdatetime
    json.cenump @testing1.cenump
    json.c @testing1.c
    json.cfile @testing1.cfile

    json.testung2s @testing1.testung2s do |testung2|
      json.id testung2.id
      json.created_at testung2.created_at
      json.updated_at testung2.updated_at
      json.testing1_id testung2.testing1_id
    end

    json.testung2s_count @testing1.testung2s_count
  end

end
