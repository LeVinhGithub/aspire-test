class Company < ApplicationRecord
  has_many :company_users, dependent: :destroy
  has_many :job_openings, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :restrictions, dependent: :destroy
  has_many :company_employees, dependent: :destroy
  has_many :recruitment_notes, dependent: :destroy
  has_many :scout_templates, dependent: :destroy
  has_many :target_lists, dependent: :destroy

  belongs_to :industry

  enum listing_classification: %w[first_section_tokyo_stock second_section_tokyo_stock jasdaq_standart jasdaq_growth mothers unlisted],
       _suffix: true

  has_one_attached :logo, dependent: :destroy
  has_one_attached :representative_photo, dependent: :destroy
  has_one_attached :image, dependent: :destroy

  # validations

  validates :name, presence: true, uniqueness: true

  validates :name, length: { in: 0..255 }

  validates :logo, content_type: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
                   size: { less_than_or_equal_to: 100.megabytes }

  validates :location, length: { in: 0..255 }

  validates :launched_year, length: { in: 0..4 }

  validates :business_details, length: { in: 0..1000 }

  validates :number_of_employees, numericality: { greater_than_or_equal_to: 0.0, less_than_or_equal_to: 0.0 }

  validates :mission, length: { in: 0..1000 }

  validates :vision, length: { in: 0..1000 }

  validates :value, length: { in: 0..1000 }

  validates :representative_photo,
            content_type: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'], size: { less_than_or_equal_to: 100.megabytes }

  validates :representative_profile, length: { in: 0..1000 }

  validates :representative_name, length: { in: 0..255 }

  validates :slug, presence: true, uniqueness: true

  validates :slug, length: { in: 0..255 }

  validates :image, content_type: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'],
                    size: { less_than_or_equal_to: 100.megabytes }

  validates :capital, length: { in: 0..255 }

  validates :business_id, length: { in: 0..255 }

  validates :name_furigana, length: { in: 0..255 }

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
