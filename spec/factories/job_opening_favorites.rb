FactoryBot.define do
  factory :job_opening_favorite do
    job_opening { build(:job_opening) }

    applicant { build(:applicant) }
  end
end
