# rubocop:disable Style/ClassAndModuleChildren
class UsersService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params

    @records = User

    @query = records
  end

  def execute
    users_name_start_with_like

    users_introduce_start_with_like

    users_test2s_count_equal

    order
    paginate

    records
  end

  def users_name_start_with_like
    return if params.dig(:users, :name).blank?

    where_clause = query.where('users.name like ?', "%#{params.dig(:users, :name)}")

    @records = where_clause
  end

  def users_introduce_start_with_like
    return if params.dig(:users, :introduce).blank?

    where_clause = query.where('users.introduce like ?', "%#{params.dig(:users, :introduce)}")

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

  def users_test2s_count_equal
    return if params.dig(:users, :test2s_count).blank?

    where_clause = query.where(users: { test2s_count: params.dig(:users, :test2s_count).to_s })

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
    @records = records.order('users.created_at desc')
  end

  def paginate
    @records = records.page(params[:pagination_page] || 1).per(params[:pagination_limit] || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
