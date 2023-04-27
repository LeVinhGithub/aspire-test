# frozen_string_literal: true

module OauthTokensConcern
  extend ActiveSupport::Concern

  def current_resource_owner
    doorkeeper_token&.resource_owner
  end

  alias current_testing current_resource_owner

  def current_testing_authenticate
    head :unauthorized if current_testing.blank?
  end
end
