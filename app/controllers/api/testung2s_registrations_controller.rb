module Api
  class Testung2sRegistrationsController < Api::BaseController
    # jitera-anchor-dont-touch: before_action_filter

    # jitera-index-anchor-dont-touch: actions

    # jitera-show-anchor-dont-touch: actions

    # jitera-create-anchor-dont-touch: actions
    def create
      testung2_params = params.require(:testung2).permit(:password, :password_confirmation, :testing1_id, :email)
      @testung2 = Testung2.new(testung2_params)
      if @testung2.save
        head :ok
      else
        @success = false
        @error_message = @user.errors.full_messages.to_sentence
        @error_message = I18n.t('email_login.registrations.failed_to_sign_up') if @error_message.blank?
        render status: :unprocessable_entity
      end
    end

    # jitera-update-anchor-dont-touch: actions

    # jitera-destroy-anchor-dont-touch: actions

    # jitera-anchor-dont-touch: actions
  end
end
