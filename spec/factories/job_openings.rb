FactoryBot.define do
  factory :job_opening do
    occupation_type { build(:occupation_type) }

    location { build(:location) }

    income_range { build(:income_range) }

    employment_status { build(:employment_status) }

    company { build(:company) }

    passive_smoking_countermeasure { build(:passive_smoking_countermeasure) }

    career_direction { build(:career_direction) }

    job_title { build(:job_title) }

    job_application { build(:job_application) }

    job_opening_favorite { build(:job_opening_favorite) }

    job_opening_valued_competency { build(:job_opening_valued_competency) }

    department { Faker::Lorem.paragraph_by_chars(number: 255) }

    position { Faker::Lorem.paragraph_by_chars(number: 255) }

    job_description { Faker::Lorem.paragraph_by_chars(number: 1000) }

    is_remote_available { false }

    trial_period { Faker::Lorem.paragraph_by_chars(number: 255) }

    working_hours { Faker::Lorem.paragraph_by_chars(number: 255) }

    avg_overtime_hours { Faker::Lorem.paragraph_by_chars(number: 255) }

    trial_period_conditions { Faker::Lorem.paragraph_by_chars(number: 65_535) }

    workplace { Faker::Lorem.paragraph_by_chars(number: 255) }

    qualification { Faker::Lorem.paragraph_by_chars(number: 1000) }

    benefits { Faker::Lorem.paragraph_by_chars(number: 1000) }

    vacation { Faker::Lorem.paragraph_by_chars(number: 1000) }

    bonus { Faker::Lorem.paragraph_by_chars(number: 1000) }

    promotion { Faker::Lorem.paragraph_by_chars(number: 1000) }

    appeal_point { Faker::Lorem.paragraph_by_chars(number: 1000) }

    future_career_path { Faker::Lorem.paragraph_by_chars(number: 255) }

    trending_keywords { Faker::Lorem.paragraph_by_chars(number: 255) }

    business_trip_availability { false }

    transfers { false }

    publication_start_date { Date.current }

    publication_end_date { Date.current }

    slug { Faker::Lorem.paragraph_by_chars(number: 255) }

    image { Rack::Test::UploadedFile.new('spec/fixtures/assets/image.png', 'image/png') }

    is_recommended { false }

    status { JobOpening.statuses.keys[0] }

    pv { 2_147_483_648.0 }
  end
end
