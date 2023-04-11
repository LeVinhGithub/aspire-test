FactoryBot.define do
  factory :testing1 do
    # jitera-anchor-dont-touch: columns
    c { true }
    cenump { 'a' }
    cdatetime { 1.day.from_now }
    cdate { Date.current - 1.day }
    sequence(:cfloat) { |n| n + -3.402823466e+38 }
    sequence(:cint) { |n| n + -2_147_483_647 }
    stext { 'か' * rand(1..16_383) }
    cstring { 'か' * rand(1..63) }

    cfile { Rack::Test::UploadedFile.new('spec/fixtures/assets/image.png', 'image/png') }
  end
end
