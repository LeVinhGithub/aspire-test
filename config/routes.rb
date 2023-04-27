require 'sidekiq/web'
Rails.application.routes.draw do
  use_doorkeeper do
    controllers tokens: 'tokens'

    skip_controllers :authorizations, :applications, :authorized_applications
  end

  devise_for :company_users
  devise_for :applicants
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  namespace :api do
    resources :target_list_applicants, only: %i[create destroy] do
    end

    resources :target_lists, only: %i[index create show update destroy] do
    end

    resources :scout_templates, only: %i[index create show update destroy] do
    end

    resources :industry_groups, only: [:index] do
    end

    resources :recruitment_notes, only: %i[index create update] do
    end

    resources :company_employees, only: %i[index create show update destroy] do
    end

    resources :restrictions, only: %i[index create show update destroy] do
    end

    resources :skills, only: %i[index create update destroy] do
    end

    resources :job_experiences, only: %i[index create update destroy] do
    end

    resources :company_users, only: %i[index create show update destroy] do
    end

    resources :company_users_verify_confirmation_token, only: [:create] do
    end

    resources :applicants_verify_confirmation_token, only: [:create] do
    end

    resources :company_users_passwords, only: [:create] do
    end

    resources :applicants_passwords, only: [:create] do
    end

    resources :company_users_registrations, only: [:create] do
    end

    resources :applicants_registrations, only: [:create] do
    end

    resources :company_users_verify_reset_password_requests, only: [:create] do
    end

    resources :applicants_verify_reset_password_requests, only: [:create] do
    end

    resources :company_users_reset_password_requests, only: [:create] do
    end

    resources :applicants_reset_password_requests, only: [:create] do
    end

    resources :locations, only: [:index] do
    end

    resources :applicant_industries, only: %i[index create update destroy] do
    end

    resources :messages, only: %i[index create show update destroy] do
    end

    resources :job_opening_favorites, only: %i[index create show update destroy] do
    end

    resources :job_applications, only: %i[index create show update destroy] do
    end

    resources :passive_smoking_countermeasures, only: [:index] do
    end

    resources :valued_competencies, only: [:index] do
    end

    resources :career_direction_groups, only: [:index] do
    end

    resources :employment_statuses, only: [:index] do
    end

    resources :occupation_types, only: [:index] do
    end

    resources :job_openings, only: %i[index create show update destroy] do
    end

    resources :management_experiences, only: [:index] do
    end

    resources :school_types, only: [:index] do
    end

    resources :applicant_schools, only: %i[index create update destroy] do
    end

    resources :income_ranges, only: [:index] do
    end

    resources :job_groups, only: [:index] do
    end

    resources :applicant_languages, only: %i[index create update destroy] do
    end

    resources :languages, only: [:index] do
    end

    resources :companies, only: %i[index create show update destroy] do
    end

    resources :applicants, only: %i[index create show update destroy] do
    end
  end

  get '/health' => 'pages#health_check'
end
