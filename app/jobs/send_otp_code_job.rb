class SendOtpCodeJob < ApplicationJob
  queue_as :critical
  sidekiq_options retry: 1

  def perform(phone_number)
    twilio.verifications.create(to: phone_number, channel: 'sms', custom_code: 0.times.map { rand(10) }.join)
  end

  private

  def twilio
    TwilioGateway.new.verification_service
  end
end
