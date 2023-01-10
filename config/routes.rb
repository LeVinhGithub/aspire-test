require 'sidekiq/web'

module ActionDispatch
  module Routing
    class Mapper
      def draw(routes_name)
        routes_path = Rails.root.join('config', 'routes', (@scope[:shallow_prefix]).to_s, "#{routes_name}.rb")

        instance_eval(File.read(routes_path))
     end
    end
  end
end

Rails.application.routes.draw do
use_doorkeeper do
  controllers tokens: 'tokens'

      skip_controllers :authorizations, :applications, :authorized_applications
    end

      mount Rswag::Ui::Engine => '/api-docs'
      mount Rswag::Api::Engine => '/api-docs'
  get '/health' => 'pages#health_check'

  # jitera-anchor-dont-touch: webhooks

  namespace :dashboard do
    # TODO: customizable table name
    

  end

  unless Rails.env.development?
    Sidekiq::Web.use Rack::Auth::Basic do |username, password|
      admin_username =  Rails.application.credentials.dig(:sidekiq, :username)
      admin_password =  Rails.application.credentials.dig(:sidekiq, :password)
      ActiveSupport::SecurityUtils.secure_compare(
        ::Digest::SHA256.hexdigest(username),
        ::Digest::SHA256.hexdigest(admin_username)
      ) && ActiveSupport::SecurityUtils.secure_compare(
        ::Digest::SHA256.hexdigest(password),
        ::Digest::SHA256.hexdigest(admin_password)
      )
    end
  end
  mount Sidekiq::Web => '/sidekiq'
end
