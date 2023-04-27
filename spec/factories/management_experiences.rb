FactoryBot.define do
  factory :management_experience do
    applicant { build(:applicant) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
