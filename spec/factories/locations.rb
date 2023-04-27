FactoryBot.define do
  factory :location do
    applicant { build(:applicant) }

    job_opening { build(:job_opening) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }

    is_prefecture { true }
  end
end
