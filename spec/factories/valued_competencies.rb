FactoryBot.define do
  factory :valued_competency do
    job_opening_valued_competency { build(:job_opening_valued_competency) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
