FactoryBot.define do
  factory :user do
    # jitera-anchor-dont-touch: columns
    introduce { Faker::Lorem.paragraph_by_chars(number: rand(0..1000)) }
    name { Faker::Lorem.paragraph_by_chars(number: rand(0..255)) }
  end
end
