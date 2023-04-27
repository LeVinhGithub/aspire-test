FactoryBot.define do
  factory :employment_status do
    job_opening { build(:job_opening) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
