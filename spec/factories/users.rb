FactoryBot.define do
  factory :user do
    password { Faker::Internet.password(min_length: 13, max_length: 20, mix_case: true, special_characters: true) }

    role { User.roles.keys[0] }

    email { Faker::Internet.unique.email }
  end
end
