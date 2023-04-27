FactoryBot.define do
  factory :industry do
    industry_group { build(:industry_group) }

    company { build(:company) }

    applicant_industry { build(:applicant_industry) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
