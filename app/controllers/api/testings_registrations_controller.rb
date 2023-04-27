class Api::TestingsRegistrationsController < Api::BaseController
  def create
    @testing = Testing.new(create_params)
    if @testing.save
      head :ok, message: I18n.t('common.200') and return
    else
      error_messages = @testing.errors.messages
      render json: { error_messages: error_messages, message: I18n.t('email_login.registrations.failed_to_sign_up') },
             status: :unprocessable_entity
    end
  end

  def create_params
    params.require(:testing).permit(:password, :password_confirmation, :email)
  end
end
