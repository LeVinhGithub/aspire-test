FactoryBot.define do
  factory :company_user do
    company { build(:company) }

    password { Faker::Internet.password(min_length: 13, max_length: 20, mix_case: true, special_characters: true) }

    full_name { Faker::Lorem.paragraph_by_chars(number: 255) }

    position { Faker::Lorem.paragraph_by_chars(number: 255) }

    photo { Rack::Test::UploadedFile.new('spec/fixtures/assets/image.png', 'image/png') }

    email { Faker::Internet.unique.email }

    role { CompanyUser.roles.keys[0] }

    phone_number { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
