module Api
  class Test2sRegistrationsController < Api::BaseController
    # jitera-anchor-dont-touch: before_action_filter

    # jitera-index-anchor-dont-touch: actions

    # jitera-show-anchor-dont-touch: actions

    # jitera-create-anchor-dont-touch: actions
    def create
      test2_params = params.require(:test2).permit(:password, :password_confirmation, :user_id, :email)
      @test2 = Test2.new(test2_params)
      if @test2.save
        head :ok
      else
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
