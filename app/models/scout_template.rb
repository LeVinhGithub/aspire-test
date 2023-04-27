class ScoutTemplate < ApplicationRecord
  belongs_to :company

  # validations

  validates :title, length: { in: 0..255 }

  validates :template_text, length: { in: 0..65_535 }

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
