FactoryBot.define do
  factory :target_list_applicant do
    target_list { build(:target_list) }

    applicant { build(:applicant) }
  end
end
