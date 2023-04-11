class Test2Mailer < ApplicationMailer
  def reset_password_instruction(test2, token, host)
    @token = token
    @host = host
    @test2 = test2
    mail(to: @test2.email, subject: I18n.t('reset_password.email_subject'))
  end
end
