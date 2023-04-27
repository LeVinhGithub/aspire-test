FactoryBot.define do
  factory :restriction do
    company { build(:company) }

    applicant { build(:applicant) }

    reason { Restriction.reasons.keys[0] }
  end
end
