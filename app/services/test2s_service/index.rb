# rubocop:disable Style/ClassAndModuleChildren
class Test2sService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params

    @records = Test2

    @query = records
  end

  def execute
    test2s_user_id_equal

    test2s_email_start_with_like

    order
    paginate

    records
  end

  def test2s_user_id_equal
    return if params.dig(:test2s, :user_id).blank?

    where_clause = query.where(test2s: { user_id: params.dig(:test2s, :user_id).to_s })

    @records = where_clause
  end

  def test2s_email_start_with_like
    return if params.dig(:test2s, :email).blank?

    where_clause = query.where('test2s.email like ?', "%#{params.dig(:test2s, :email)}")

    # Notes - The reason for doing this is as below
    # If suppose there is OR condition, and previous 1 filter is nil, params, not present?
    # in such case there will be records.or(second_condition)
    # OR will return all records and break logic
    # ideally if previous condition nil it should retrun with current second condition and not perform OR
    @records = if records.is_a?(Class)
                 where_clause
               else
                 records.or(query)
               end
  end

  def order
    @records = records.order('test2s.created_at desc')
  end

  def paginate
    @records = records.page(params[:pagination_page] || 1).per(params[:pagination_limit] || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
