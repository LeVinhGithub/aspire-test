class Testing1 < ApplicationRecord
  include ConstantValidatable

  # jitera-anchor-dont-touch: relations

  has_many :testung2s, dependent: :destroy

  # jitera-anchor-dont-touch: enum
  enum cenump: %w[a v c], _suffix: true

  # jitera-anchor-dont-touch: file

  has_one_attached :cfile

  # jitera-anchor-dont-touch: validation

  validates :cstring, length: { maximum: 255, message: I18n.t('errors.messages.too_long') }

  validates :cstring, presence: { message: I18n.t('errors.messages.blank') }

  validates :cstring, uniqueness: { message: I18n.t('errors.messages.taken') }

  validates :cstring, format: { with: HIRAGANA_VALIDATION_FORMAT, message: I18n.t('errors.messages.invalid') }

  validates :stext, length: { maximum: 65_535, message: I18n.t('errors.messages.too_long') }

  validates :stext, presence: { message: I18n.t('errors.messages.blank') }

  validates :stext, uniqueness: { message: I18n.t('errors.messages.taken') }

  validates :stext, format: { with: HIRAGANA_VALIDATION_FORMAT, message: I18n.t('errors.messages.invalid') }

  validates :cint, numericality: { greater_than: -2_147_483_648.0, message: I18n.t('errors.messages.greater_than') }

  validates :cint, numericality: { less_than: 2_147_483_647.0, message: I18n.t('errors.messages.less_than') }

  validates :cint, presence: { message: I18n.t('errors.messages.blank') }

  validates :cint, uniqueness: { message: I18n.t('errors.messages.taken') }

  validates :cfloat, numericality: { greater_than: -3.402823466e+38, message: I18n.t('errors.messages.greater_than') }

  validates :cfloat, numericality: { less_than: 3.402823466e+38, message: I18n.t('errors.messages.less_than') }

  validates :cfloat, presence: { message: I18n.t('errors.messages.blank') }

  validates :cfloat, uniqueness: { message: I18n.t('errors.messages.taken') }

  validates :cdate, date_type: { past: true, message: I18n.t('errors.messages.date_in_past') }

  validates :cdate, presence: { message: I18n.t('errors.messages.blank') }

  validates :cdate, uniqueness: { message: I18n.t('errors.messages.taken') }

  validates :cdatetime, datetime_type: { future: true, message: I18n.t('errors.messages.datetime_in_future') }

  validates :cdatetime, presence: { message: I18n.t('errors.messages.blank') }

  validates :cdatetime, uniqueness: { message: I18n.t('errors.messages.taken') }

  validates :cenump, presence: { message: I18n.t('errors.messages.blank') }

  validates :cenump, uniqueness: { message: I18n.t('errors.messages.taken') }

  validates :cfile, attached: { message: I18n.t('errors.messages.blank') }

  validates :cfile, content_type: { in: %i[image/png image/jpg image/jpeg image/gif image/svg+xml] }

  accepts_nested_attributes_for :testung2s

  def self.associations
    [:testung2s]
  end

  # jitera-anchor-dont-touch: reset_password

  class << self
  end
end
