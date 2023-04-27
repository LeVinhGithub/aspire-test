FactoryBot.define do
  factory :applicant do
    location { build(:location) }

    income_range { build(:income_range) }

    management_experience { build(:management_experience) }

    applicant_industry { build(:applicant_industry) }

    applicant_school { build(:applicant_school) }

    applicant_language { build(:applicant_language) }

    message { build(:message) }

    job_application { build(:job_application) }

    job_experience { build(:job_experience) }

    skill { build(:skill) }

    job_opening_favorite { build(:job_opening_favorite) }

    restriction { build(:restriction) }

    recruitment_note { build(:recruitment_note) }

    target_list_applicant { build(:target_list_applicant) }

    password { Faker::Internet.password(min_length: 13, max_length: 20, mix_case: true, special_characters: true) }

    full_name { Faker::Lorem.paragraph_by_chars(number: 255) }

    furigana { Faker::Lorem.paragraph_by_chars(number: 255) }

    phone_number { Faker::PhoneNumber.unique.cell_phone_in_e164[0..11] }

    birthdate { Date.current - 2 }

    address { Faker::Lorem.paragraph_by_chars(number: 255) }

    availability { Applicant.availabilities.keys[0] }

    resume_file { Rack::Test::UploadedFile.new('spec/fixtures/assets/doc.pdf', 'application/pdf') }

    description { Faker::Lorem.paragraph_by_chars(number: 250) }

    email { Faker::Internet.unique.email }

    gender { Applicant.genders.keys[0] }

    is_onboarded { false }

    notes { Faker::Lorem.paragraph_by_chars(number: 255) }

    current_company_name { Faker::Lorem.paragraph_by_chars(number: 255) }

    current_company_department { Faker::Lorem.paragraph_by_chars(number: 255) }

    current_company_position { Faker::Lorem.paragraph_by_chars(number: 255) }

    confirmation_email_resent_count { 4.0 }

    number_of_companies { 99.0 }

    is_suspended { false }

    desired_info { Faker::Lorem.paragraph_by_chars(number: 65_535) }

    management_experience_years { Applicant.management_experience_years.keys[0] }
  end
end
