FactoryBot.define do
  factory :applicant_industry do
    industry { build(:industry) }

    applicant { build(:applicant) }
  end
end
