# frozen_string_literal: true

class TokensController < Doorkeeper::TokensController
  # rubocop:disable Rails/LexicallyScopedActionFilter
  before_action :check_if_resource_confirmed, only: :create
  before_action :check_if_resource_locked, only: :create
  # rubocop:enable Rails/LexicallyScopedActionFilter

  private

  def check_if_resource_confirmed
    render json: { error:  I18n.t('token.inactive') }, status: :forbidden if resource_owner_inactive?
  end

  def check_if_resource_locked
    render json: { error:  I18n.t('token.locked') }, status: :forbidden if resource_owner_locked?
  end

  def resource_owner
    return nil unless authorize_response.respond_to?(:token)

    authorize_response&.token&.resource_owner
  end

  # jitera-hook-for-resource-owner-inactive
  def resource_owner_inactive?
    return test2s_inactive? if resource_owner.is_a?(Test2)
  end

  def test2s_inactive?
    return !resource_owner&.confirmed? if resource_owner.is_a?(Test2)
  end

  # jitera-hook-for-resource-owner-locked
  def resource_owner_locked?
    return test2s_locked? if resource_owner.is_a?(Test2)
  end

  def test2s_locked?
    return resource_owner&.access_locked? if resource_owner.is_a?(Test2)
  end
end
