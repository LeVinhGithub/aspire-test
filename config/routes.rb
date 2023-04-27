require 'sidekiq/web'
Rails.application.routes.draw do
  use_doorkeeper do
    controllers tokens: 'tokens'

    skip_controllers :authorizations, :applications, :authorized_applications
  end

  devise_for :testings
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  namespace :api do
    resources :testings_verify_confirmation_token, only: [:create] do
    end

    resources :testings_passwords, only: [:create] do
    end

    resources :testings_registrations, only: [:create] do
    end

    resources :testings_verify_reset_password_requests, only: [:create] do
    end

    resources :testings_reset_password_requests, only: [:create] do
    end
  end

  get '/health' => 'pages#health_check'
end
