# frozen_string_literal: true

module OauthTokensConcern
  extend ActiveSupport::Concern

  def current_resource_owner
    doorkeeper_token&.resource_owner
  end

  alias current_testung2 current_resource_owner
  alias current_user current_resource_owner

  def current_testung2_authenticate
    head :unauthorized if current_testung2.blank?
  end
end
