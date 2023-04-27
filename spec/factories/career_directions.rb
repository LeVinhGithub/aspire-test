FactoryBot.define do
  factory :career_direction do
    career_direction_group { build(:career_direction_group) }

    job_opening { build(:job_opening) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
