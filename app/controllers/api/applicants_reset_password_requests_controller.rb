class Api::ApplicantsResetPasswordRequestsController < Api::BaseController
  def create
    @applicant = Applicant.find_by('email = ?', params.dig(:email))
    @applicant.send_reset_password_instructions if @applicant.present?
    head :ok, message: I18n.t('common.200')
  end
end
