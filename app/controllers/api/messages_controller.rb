class Api::MessagesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @messages = MessageService::Index.new(params.permit!).execute
    @total_pages = @messages.total_pages
  end

  def show
    @message = Message.find_by!('messages.id = ?', params[:id])
  end

  def create
    @message = Message.new(create_params)
    return if @message.save

    @error_object = @message.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:messages).permit(:applicant_id, :text, :attachment, :reply_to_message_id, :company_id)
  end

  def update
    @message = Message.find_by('messages.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @message.blank?

    return if @message.update(update_params)

    @error_object = @message.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:messages).permit(:applicant_id, :text, :attachment, :reply_to_message_id, :company_id)
  end

  def destroy
    @message = Message.find_by('messages.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @message.blank?

    if @message.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
