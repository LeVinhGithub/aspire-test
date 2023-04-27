class Api::CompanyUsersRegistrationsController < Api::BaseController
  def create
    @company_user = CompanyUser.new(create_params)
    if @company_user.save
      head :ok, message: I18n.t('common.200') and return
    else
      error_messages = @company_user.errors.messages
      render json: { error_messages: error_messages, message: I18n.t('email_login.registrations.failed_to_sign_up') },
             status: :unprocessable_entity
    end
  end

  def create_params
    params.require(:company_user).permit(:password, :password_confirmation, :company_id, :full_name, :email, :role,
                                         :phone_number)
  end
end
