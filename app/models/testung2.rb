class Testung2 < ApplicationRecord
  include ConstantValidatable
  devise :database_authenticatable, :registerable, :rememberable, :validatable,
         :trackable, :recoverable, :lockable, :confirmable
  # jitera-anchor-dont-touch: relations

  belongs_to :testing1, counter_cache: true

  # jitera-anchor-dont-touch: enum

  # jitera-anchor-dont-touch: file

  # jitera-anchor-dont-touch: validation

  PASSWORD_FORMAT = /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}\z/
  validates :password, format: PASSWORD_FORMAT, if: -> { password.present? }

  validates :email, length: { maximum: 255, message: I18n.t('errors.messages.too_long') }

  validates :email, presence: { message: I18n.t('errors.messages.blank') }

  validates :email, uniqueness: { message: I18n.t('errors.messages.taken') }

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: I18n.t('errors.messages.invalid') }

  # jitera-anchor-dont-touch: reset_password
  def generate_reset_password_token
    raw, enc = Devise.token_generator.generate(self.class, :reset_password_token)
    self.reset_password_token   = enc
    self.reset_password_sent_at = Time.now.utc
    save(validate: false)
    raw
  end

  class << self
    def authenticate?(email, password)
      testung2 = Testung2.find_for_authentication(email: email)
      return false if testung2.blank?

      if testung2&.valid_for_authentication? { testung2.valid_password?(password) }
        testung2.reset_failed_attempts!
        return testung2
      end

      # We will show the error message in TokensController
      return testung2 if testung2&.access_locked?

      false
    end
  end
end