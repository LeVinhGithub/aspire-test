class JobExperience < ApplicationRecord
  belongs_to :applicant
  belongs_to :job_title

  # validations

  validates :company_name, presence: true

  validates :company_name, length: { in: 0..255 }

  validates :start_date, presence: true

  validates :start_date, presence: true, timeliness: { type: :date, on_or_before: Date.yesterday }

  validates :end_date, presence: true, timeliness: { type: :date, on_or_before: Date.yesterday }

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
