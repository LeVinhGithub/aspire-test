FactoryBot.define do
  factory :scout_template do
    company { build(:company) }

    title { Faker::Lorem.paragraph_by_chars(number: 255) }

    template_text { Faker::Lorem.paragraph_by_chars(number: 65_535) }
  end
end
