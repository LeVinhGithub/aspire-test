class Api::TestingsVerifyResetPasswordRequestsController < Api::BaseController
  def create
    token = Devise.token_generator.digest(Testing, :reset_password_token, params.dig(:reset_token))

    @testing = Testing.find_by(reset_password_token: token)

    if @testing.blank? || params.dig(:reset_token).blank? || params.dig(:password).blank? || params.dig(:password_confirmation).blank?
      @error_message = I18n.t('reset_password.invalid_token')
    elsif !@testing.reset_password_period_valid?
      @error_message = I18n.t('errors.messages.expired')
    elsif @testing.reset_password(params.dig(:password), params.dig(:password), params.dig(:password_confirmation))
    else
      @error_message = @testing.errors.full_messages
    end
    if @error_message.present?
      render json: { error_message: @error_message }, status: :unprocessable_entity
    else
      head :ok, message: I18n.t('common.200')
    end
  end
end
