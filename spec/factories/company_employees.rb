FactoryBot.define do
  factory :company_employee do
    company { build(:company) }

    full_name { Faker::Lorem.paragraph_by_chars(number: 255) }

    profile { Faker::Lorem.paragraph_by_chars(number: 255) }

    photo { Rack::Test::UploadedFile.new('spec/fixtures/assets/image.png', 'image/png') }

    is_high_rank_employee { false }
  end
end
