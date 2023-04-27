FactoryBot.define do
  factory :job_experience do
    applicant { build(:applicant) }

    job_title { build(:job_title) }

    company_name { Faker::Lorem.paragraph_by_chars(number: 255) }

    start_date { Date.current - 2 }

    end_date { Date.current - 2 }
  end
end
