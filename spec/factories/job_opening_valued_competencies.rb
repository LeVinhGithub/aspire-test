FactoryBot.define do
  factory :job_opening_valued_competency do
    job_opening { build(:job_opening) }

    valued_competency { build(:valued_competency) }
  end
end
