FactoryBot.define do
  factory :job_application do
    applicant { build(:applicant) }

    job_opening { build(:job_opening) }

    status { JobApplication.statuses.keys[0] }

    approached_by_scout { false }

    user_name_disclosed { false }
  end
end
