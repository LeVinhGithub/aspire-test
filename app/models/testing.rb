class Testing < ApplicationRecord
  devise :database_authenticatable, :registerable, :rememberable, :validatable,
         :trackable, :recoverable, :lockable, :confirmable

  # validations

  PASSWORD_FORMAT = /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}\z/
  validates :password, format: PASSWORD_FORMAT, if: -> { new_record? || password.present? }

  validates :email, presence: true, uniqueness: true

  validates :email, length: { in: 0..255 }

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

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
      testing = Testing.find_for_authentication(email: email)
      return false if testing.blank?

      if testing&.valid_for_authentication? { testing.valid_password?(password) }
        testing.reset_failed_attempts!
        return testing
      end

      # We will show the error message in TokensController
      return testing if testing&.access_locked?

      false
    end
  end
end
