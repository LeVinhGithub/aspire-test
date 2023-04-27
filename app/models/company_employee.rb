class CompanyEmployee < ApplicationRecord
  belongs_to :company

  has_one_attached :photo, dependent: :destroy

  # validations

  validates :full_name, presence: true

  validates :full_name, length: { in: 0..255 }

  validates :profile, length: { in: 0..255 }

  validates :photo, content_type: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
                    size: { less_than_or_equal_to: 100.megabytes }

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
