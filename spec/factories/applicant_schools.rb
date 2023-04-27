FactoryBot.define do
  factory :applicant_school do
    school_type { build(:school_type) }

    applicant { build(:applicant) }

    graduation_date { Date.current }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }

    degree { Faker::Lorem.paragraph_by_chars(number: 255) }

    major { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
