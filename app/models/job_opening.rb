class JobOpening < ApplicationRecord
  has_many :job_applications, dependent: :destroy
  has_many :job_opening_favorites, dependent: :destroy
  has_many :job_opening_valued_competencies, dependent: :destroy

  belongs_to :occupation_type
  belongs_to :location
  belongs_to :income_range
  belongs_to :employment_status
  belongs_to :company
  belongs_to :passive_smoking_countermeasure
  belongs_to :career_direction
  belongs_to :job_title

  enum status: %w[available expired], _suffix: true

  has_one_attached :image, dependent: :destroy

  # validations

  validates :department, presence: true

  validates :department, length: { in: 0..255 }

  validates :position, presence: true

  validates :position, length: { in: 0..255 }

  validates :job_description, presence: true

  validates :job_description, length: { in: 0..1000 }

  validates :trial_period, presence: true

  validates :trial_period, length: { in: 0..255 }

  validates :working_hours, presence: true

  validates :working_hours, length: { in: 0..255 }

  validates :avg_overtime_hours, presence: true

  validates :avg_overtime_hours, length: { in: 0..255 }

  validates :trial_period_conditions, presence: true

  validates :trial_period_conditions, length: { in: 0..65_535 }

  validates :workplace, length: { in: 0..255 }

  validates :qualification, presence: true

  validates :qualification, length: { in: 0..1000 }

  validates :benefits, length: { in: 0..1000 }

  validates :vacation, presence: true

  validates :vacation, length: { in: 0..1000 }

  validates :bonus, length: { in: 0..1000 }

  validates :promotion, length: { in: 0..1000 }

  validates :appeal_point, length: { in: 0..1000 }

  validates :future_career_path, length: { in: 0..255 }

  validates :trending_keywords, length: { in: 0..255 }

  validates :slug, presence: true, uniqueness: true

  validates :slug, length: { in: 0..255 }

  validates :image, content_type: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
                    size: { less_than_or_equal_to: 100.megabytes }

  validates :pv, numericality: { greater_than_or_equal_to: 0.0, less_than_or_equal_to: 0.0 }

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
