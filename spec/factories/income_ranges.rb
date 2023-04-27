FactoryBot.define do
  factory :income_range do
    applicant { build(:applicant) }

    job_opening { build(:job_opening) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
