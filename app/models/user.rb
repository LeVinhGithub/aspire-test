class User < ApplicationRecord
  include ConstantValidatable

  # jitera-anchor-dont-touch: relations

  has_many :test2s, dependent: :destroy

  # jitera-anchor-dont-touch: enum

  # jitera-anchor-dont-touch: file

  # jitera-anchor-dont-touch: validation

  validates :name, length: { maximum: 255, message: I18n.t('errors.messages.too_long') }

  validates :introduce, length: { maximum: 65_535, message: I18n.t('errors.messages.too_long') }

  accepts_nested_attributes_for :test2s

  def self.associations
    [:test2s]
  end

  # jitera-anchor-dont-touch: reset_password

  class << self
  end
end
