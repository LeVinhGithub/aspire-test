FactoryBot.define do
  factory :company do
    industry { build(:industry) }

    company_user { build(:company_user) }

    job_opening { build(:job_opening) }

    message { build(:message) }

    restriction { build(:restriction) }

    company_employee { build(:company_employee) }

    recruitment_note { build(:recruitment_note) }

    scout_template { build(:scout_template) }

    target_list { build(:target_list) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }

    logo { Rack::Test::UploadedFile.new('spec/fixtures/assets/image.png', 'image/png') }

    location { Faker::Lorem.paragraph_by_chars(number: 255) }

    launched_year { Faker::Lorem.paragraph_by_chars(number: 4) }

    business_details { Faker::Lorem.paragraph_by_chars(number: 1000) }

    number_of_employees { 2_147_483_648.0 }

    mission { Faker::Lorem.paragraph_by_chars(number: 1000) }

    vision { Faker::Lorem.paragraph_by_chars(number: 1000) }

    value { Faker::Lorem.paragraph_by_chars(number: 1000) }

    representative_photo { Rack::Test::UploadedFile.new('spec/fixtures/assets/image.png', 'image/png') }

    representative_profile { Faker::Lorem.paragraph_by_chars(number: 1000) }

    listing_classification { Company.listing_classifications.keys[0] }

    representative_name { Faker::Lorem.paragraph_by_chars(number: 255) }

    slug { Faker::Lorem.paragraph_by_chars(number: 255) }

    image { Rack::Test::UploadedFile.new('spec/fixtures/assets/image.png', 'image/png') }

    capital { Faker::Lorem.paragraph_by_chars(number: 255) }

    ipo { false }

    business_id { Faker::Lorem.paragraph_by_chars(number: 255) }

    name_furigana { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
