module Api
  class Test2sResetPasswordRequestsController < Api::BaseController
    # jitera-anchor-dont-touch: before_action_filter

    # jitera-index-anchor-dont-touch: actions

    # jitera-show-anchor-dont-touch: actions

    # jitera-create-anchor-dont-touch: actions
    def create
      test2 = Test2.find_by(email: params[:email])
      if test2.present?

        test2.send_confirmation_instructions and return unless test2.confirmed?

        @success = true
      else
        @success = false
        @error_message = I18n.t('email_login.passwords.not_found_in_database', authentication_keys: %w[email])
      end
    end

    # jitera-update-anchor-dont-touch: actions

    # jitera-destroy-anchor-dont-touch: actions

    # jitera-anchor-dont-touch: actions
  end
end
