# frozen_string_literal: true

module OauthTokensConcern
  extend ActiveSupport::Concern

  def current_resource_owner
    doorkeeper_token&.resource_owner
  end

  alias current_applicant current_resource_owner

  alias current_company_user current_resource_owner

  alias current_applicant current_resource_owner

  alias current_company_user current_resource_owner

  def current_applicant_authenticate
    head :unauthorized if current_applicant.blank?
  end

  def current_company_user_authenticate
    head :unauthorized if current_company_user.blank?
  end

  def current_applicant_authenticate
    head :unauthorized if current_applicant.blank?
  end

  def current_company_user_authenticate
    head :unauthorized if current_company_user.blank?
  end
end
