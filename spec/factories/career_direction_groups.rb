FactoryBot.define do
  factory :career_direction_group do
    career_direction { build(:career_direction) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
