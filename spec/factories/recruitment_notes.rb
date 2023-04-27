FactoryBot.define do
  factory :recruitment_note do
    applicant { build(:applicant) }

    company { build(:company) }

    note { Faker::Lorem.paragraph_by_chars(number: 250) }
  end
end
