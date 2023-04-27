class Message < ApplicationRecord
  belongs_to :applicant
  belongs_to :company

  has_one_attached :attachment, dependent: :destroy

  # validations

  validates :text, length: { in: 0..1000 }

  validates :attachment, content_type: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
                         size: { less_than_or_equal_to: 100.megabytes }

  validates :reply_to_message_id, numericality: { greater_than_or_equal_to: 0.0, less_than_or_equal_to: 0.0 }

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
