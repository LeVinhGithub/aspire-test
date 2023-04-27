class Api::TestingsVerifyConfirmationTokenController < Api::BaseController
  def create
    client = Doorkeeper::Application.find_by(uid: params[:client_id], secret: params[:client_secret])
    raise  Exceptions::AuthenticationError if client.blank?

    resource = Testing.find_by(confirmation_token: params.dig(:confirmation_token))
    if resource.blank? || params.dig(:confirmation_token).blank?
      render error_message: I18n.t('email_login.reset_password.invalid_token'),
             status: :unprocessable_entity and return
    end

    if (resource.confirmation_sent_at + Testing.confirm_within) < Time.now.utc
      resource.resend_confirmation_instructions
      render json: { error_message: I18n.t('email_login.reset_password.expired') }, status: :unprocessable_entity
    else
      resource.confirm
      token = CustomAccessToken.create(
        application_id: client.id,
        resource_owner: resource,
        scopes: 'testings',
        expires_in: Doorkeeper.configuration.access_token_expires_in.seconds
      )
      @access_token = token.token
      @token_type = 'Bearer'
      @expires_in = token.expires_in
      @refresh_token = token.refresh_token
      @resource_owner = Testing
      @resource_id = resource.id
      @created_at = resource.created_at
      @refresh_token_expires_in = token.refresh_expires_in
      @scope = token.scopes
    end
  end
end
