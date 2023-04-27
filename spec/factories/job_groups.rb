FactoryBot.define do
  factory :job_group do
    job_title { build(:job_title) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }
  end
end
