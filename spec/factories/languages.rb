FactoryBot.define do
  factory :language do
    applicant_language { build(:applicant_language) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
