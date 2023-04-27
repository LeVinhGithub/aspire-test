FactoryBot.define do
  factory :target_list do
    company { build(:company) }

    target_list_applicant { build(:target_list_applicant) }

    title { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
