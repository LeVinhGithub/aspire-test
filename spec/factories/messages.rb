FactoryBot.define do
  factory :message do
    applicant { build(:applicant) }

    company { build(:company) }

    text { Faker::Lorem.paragraph_by_chars(number: 1000) }

    attachment { Rack::Test::UploadedFile.new('spec/fixtures/assets/image.png', 'image/png') }

    reply_to_message_id { 2_147_483_648.0 }

    is_from_applicant { false }

    is_read { false }
  end
end
