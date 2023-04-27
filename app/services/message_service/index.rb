# rubocop:disable Style/ClassAndModuleChildren
class MessageService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = Message
  end

  def execute
    applicant_id_equal

    text_start_with

    attachment_start_with

    reply_to_message_id_equal

    company_id_equal

    order

    paginate
  end

  def applicant_id_equal
    return if params.dig(:messages, :applicant_id).blank?

    @records = Message.where('applicant_id = ?', params.dig(:messages, :applicant_id))
  end

  def text_start_with
    return if params.dig(:messages, :text).blank?

    @records = if records.is_a?(Class)
                 Message.where(value.query)
               else
                 records.or(Message.where('text like ?', "%#{params.dig(:messages, :text)}"))
               end
  end

  def attachment_start_with
    return if params.dig(:messages, :attachment).blank?

    @records = if records.is_a?(Class)
                 Message.where(value.query)
               else
                 records.or(Message.where('attachment like ?', "%#{params.dig(:messages, :attachment)}"))
               end
  end

  def reply_to_message_id_equal
    return if params.dig(:messages, :reply_to_message_id).blank?

    @records = if records.is_a?(Class)
                 Message.where(value.query)
               else
                 records.or(Message.where('reply_to_message_id = ?', params.dig(:messages, :reply_to_message_id)))
               end
  end

  def company_id_equal
    return if params.dig(:messages, :company_id).blank?

    @records = if records.is_a?(Class)
                 Message.where(value.query)
               else
                 records.or(Message.where('company_id = ?', params.dig(:messages, :company_id)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('messages.created_at desc')
  end

  def paginate
    @records = Message.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
