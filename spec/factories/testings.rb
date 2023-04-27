FactoryBot.define do
  factory :testing do
    password { Faker::Internet.password(min_length: 13, max_length: 20, mix_case: true, special_characters: true) }

    email { Faker::Internet.unique.email }
  end
end
