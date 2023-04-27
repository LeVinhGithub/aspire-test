Devise.setup do |config|
  require 'devise/orm/active_record'
  config.authentication_keys = [:email]
  config.case_insensitive_keys = [:email]
  config.strip_whitespace_keys = [:email]
  config.skip_session_storage = [:http_auth]
  config.mailer_sender = 'no-reply@example.com'
  config.stretches = Rails.env.test? ? 1 : 11
  config.reconfirmable = true
  config.expire_all_remember_me_on_sign_out = true
  config.remember_for = 26.hours
  config.password_length = 4..128
  config.reset_password_within = 26.hours
  config.maximum_attempts = 4
  config.unlock_strategy = :time

  config.unlock_in = 4.hours

  config.lock_strategy = :failed_attempts
  config.sign_out_via = :delete
  config.sign_in_after_reset_password = false
  config.confirm_within = 2.days
  config.scoped_views = true
end
