# frozen_string_literal: true

module OauthTokensConcern
  extend ActiveSupport::Concern

  def current_resource_owner
    doorkeeper_token&.resource_owner
  end

  alias current_test2 current_resource_owner
  alias current_user current_resource_owner

  def current_test2_authenticate
    head :unauthorized if current_test2.blank?
  end
end
