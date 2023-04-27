class CompanyUser < ApplicationRecord
  devise :database_authenticatable, :registerable, :rememberable, :validatable,
         :trackable, :recoverable, :lockable, :confirmable

  belongs_to :company

  enum role: %w[admin standard], _suffix: true

  has_one_attached :photo, dependent: :destroy

  # validations

  PASSWORD_FORMAT = /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}\z/
  validates :password, format: PASSWORD_FORMAT, if: -> { new_record? || password.present? }

  validates :full_name, presence: true

  validates :full_name, length: { in: 0..255 }

  validates :position, length: { in: 0..255 }

  validates :photo, content_type: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
                    size: { less_than_or_equal_to: 100.megabytes }

  validates :email, presence: true, uniqueness: true

  validates :email, length: { in: 0..255 }

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :phone_number, presence: true, uniqueness: true

  validates :phone_number, length: { in: 0..255 }

  # end for validations

  def generate_reset_password_token
    raw, enc = Devise.token_generator.generate(self.class, :reset_password_token)
    self.reset_password_token   = enc
    self.reset_password_sent_at = Time.now.utc
    save(validate: false)
    raw
  end

  class << self
    def authenticate?(email, password)
      company_user = CompanyUser.find_for_authentication(email: email)
      return false if company_user.blank?

      if company_user&.valid_for_authentication? { company_user.valid_password?(password) }
        company_user.reset_failed_attempts!
        return company_user
      end

      # We will show the error message in TokensController
      return company_user if company_user&.access_locked?

      false
    end

    def verify_otp?(phone_number, otp_code)
      phone_number = ::Auths::PhoneNumber.new({ phone_number: phone_number, otp_code: otp_code })
      return unless phone_number.valid?

      ::Auths::PhoneVerification.new(phone_number.formatted_phone_number).verify_otp(otp_code)
      find_by(phone_number: phone_number.formatted_phone_number)
    end
  end
end
