class Applicant < ApplicationRecord
  devise :database_authenticatable, :registerable, :rememberable, :validatable,
         :trackable, :recoverable, :lockable, :confirmable

  has_many :applicant_industries, dependent: :destroy
  has_many :applicant_schools, dependent: :destroy
  has_many :applicant_languages, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :job_applications, dependent: :destroy
  has_many :job_experiences, dependent: :destroy
  has_many :skills, dependent: :destroy
  has_many :job_opening_favorites, dependent: :destroy
  has_many :restrictions, dependent: :destroy
  has_many :recruitment_notes, dependent: :destroy
  has_many :target_list_applicants, dependent: :destroy

  belongs_to :location
  belongs_to :income_range
  belongs_to :management_experience

  enum availability: %w[immediate within_3_months within_6_months within_1_year if_I_find_a_good_company not_thinking_about_it_now],
       _suffix: true
  enum gender: %w[male female other], _suffix: true
  enum management_experience_years: %w[years_0 years_1 years_2 years_3 years_4 years_5 years_6 years_7 years_8 years_9 years_10 years_10_more],
       _suffix: true

  has_one_attached :resume_file, dependent: :destroy

  # validations

  PASSWORD_FORMAT = /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}\z/
  validates :password, format: PASSWORD_FORMAT, if: -> { new_record? || password.present? }

  validates :full_name, length: { in: 0..255 }

  validates :furigana, length: { in: 0..255 }

  validates :phone_number, length: { in: 0..0 }

  validates :phone_number, format: { with: /Ad{10}z/ }

  validates :birthdate, presence: true, timeliness: { type: :date, on_or_before: Date.yesterday }

  validates :address, length: { in: 0..255 }

  validates :resume_file, content_type: ['application/pdf'], size: { less_than_or_equal_to: 100.megabytes }

  validates :description, length: { in: 0..250 }

  validates :email, presence: true, uniqueness: true

  validates :email, length: { in: 0..255 }

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :notes, length: { in: 0..255 }

  validates :current_company_name, length: { in: 0..255 }

  validates :current_company_department, length: { in: 0..255 }

  validates :current_company_position, length: { in: 0..255 }

  validates :confirmation_email_resent_count,
            numericality: { greater_than_or_equal_to: 0.0, less_than_or_equal_to: 0.0 }

  validates :number_of_companies, numericality: { greater_than_or_equal_to: 0.0, less_than_or_equal_to: 99.0 }

  validates :desired_info, length: { in: 0..65_535 }

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
      applicant = Applicant.find_for_authentication(email: email)
      return false if applicant.blank?

      if applicant&.valid_for_authentication? { applicant.valid_password?(password) }
        applicant.reset_failed_attempts!
        return applicant
      end

      # We will show the error message in TokensController
      return applicant if applicant&.access_locked?

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
