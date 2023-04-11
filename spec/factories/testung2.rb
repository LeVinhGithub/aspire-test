FactoryBot.define do
  factory :testung2 do
    testing1 { build(:testing1) }

    password { Faker::Internet.password(min_length: 13, max_length: 20, mix_case: true, special_characters: true) }

    # jitera-anchor-dont-touch: columns
    email { Faker::Internet.unique.email(domain: 'uniqexample') }
  end
end
