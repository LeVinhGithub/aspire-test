FactoryBot.define do
  factory :industry_group do
    industry { build(:industry) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
