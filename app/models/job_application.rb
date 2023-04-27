class JobApplication < ApplicationRecord
  belongs_to :applicant
  belongs_to :job_opening

  enum status: %w[interview_adjustment primary_interview secondary_interview final_interview unofficial_offer joining_the_company rejected declined not_entered],
       _suffix: true

  # validations

  # end for validations

  class << self
    def verify_otp?(phone_number, otp_code)
      phone_number = ::Auths::PhoneNumber.new({ phone_number: phone_number, otp_code: otp_code })
      return unless phone_number.valid?

      ::Auths::PhoneVerification.new(phone_number.formatted_phone_number).verify_otp(otp_code)
      find_by(phone_number: phone_number.formatted_phone_number)
    end
  end
end
