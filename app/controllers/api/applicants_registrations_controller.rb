class Api::ApplicantsRegistrationsController < Api::BaseController
  def create
    @applicant = Applicant.new(create_params)
    if @applicant.save
      head :ok, message: I18n.t('common.200') and return
    else
      error_messages = @applicant.errors.messages
      render json: { error_messages: error_messages, message: I18n.t('email_login.registrations.failed_to_sign_up') },
             status: :unprocessable_entity
    end
  end

  def create_params
    params.require(:applicant).permit(:password, :password_confirmation, :income_range_id, :management_experience_id,
                                      :email)
  end
end
