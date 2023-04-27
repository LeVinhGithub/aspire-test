class Api::TestingsResetPasswordRequestsController < Api::BaseController
  def create
    @testing = Testing.find_by('email = ?', params.dig(:email))
    @testing.send_reset_password_instructions if @testing.present?
    head :ok, message: I18n.t('common.200')
  end
end
