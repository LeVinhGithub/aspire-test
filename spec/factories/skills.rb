FactoryBot.define do
  factory :skill do
    applicant { build(:applicant) }

    name { Faker::Lorem.paragraph_by_chars(number: 255) }

    skill_type { Skill.skill_types.keys[0] }
  end
end
