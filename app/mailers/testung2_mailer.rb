class Testung2Mailer < ApplicationMailer
  def reset_password_instruction(testung2, token, host)
    @token = token
    @host = host
    @testung2 = testung2
    mail(to: @testung2.email, subject: I18n.t('reset_password.email_subject'))
  end
end
