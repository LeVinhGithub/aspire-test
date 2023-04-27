FactoryBot.define do
  factory :school_type do
    applicant_school { build(:applicant_school) }

    name { Faker::Lorem.paragraph_by_chars(number: 100) }
  end
end
