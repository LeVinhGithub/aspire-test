FactoryBot.define do
  factory :job_title do
    job_group { build(:job_group) }

    job_opening { build(:job_opening) }

    job_experience { build(:job_experience) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
