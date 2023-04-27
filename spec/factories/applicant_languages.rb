FactoryBot.define do
  factory :applicant_language do
    language { build(:language) }

    applicant { build(:applicant) }

    proficiency { ApplicantLanguage.proficiencies.keys[0] }

    other_language { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
