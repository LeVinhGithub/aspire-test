class Api::CompanyUsersPasswordsController < Api::BaseController
  before_action :doorkeeper_authorize!, only: %i[create]

  before_action :current_company_user_authenticate, only: %i[create]

  def create
    if current_user.valid_password?(params.dig(:old_password))
      if current_user.update(password: params.dig(:new_password))
        head :ok, message: I18n.t('common.200')
      else
        render json: { messages: current_user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { message: I18n.t('email_login.passwords.old_password_mismatch') }, status: :unprocessable_entity
    end
  end
end
