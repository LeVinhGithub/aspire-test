FactoryBot.define do
  factory :test2 do
    user { build(:user) }

    password { Faker::Internet.password(min_length: 13, max_length: 20, mix_case: true, special_characters: true) }

    # jitera-anchor-dont-touch: columns
    email { Faker::Internet.unique.email(domain: 'uniqexample') }
  end
end
