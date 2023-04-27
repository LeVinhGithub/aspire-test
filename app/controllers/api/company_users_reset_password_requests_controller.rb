class Api::CompanyUsersResetPasswordRequestsController < Api::BaseController
  def create
    @company_user = CompanyUser.find_by('email = ?', params.dig(:email))
    @company_user.send_reset_password_instructions if @company_user.present?
    head :ok, message: I18n.t('common.200')
  end
end
