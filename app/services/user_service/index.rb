# rubocop:disable Style/ClassAndModuleChildren
class UserService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params

    @records = User
  end

  def execute
    role_equal

    email_start_with

    order

    paginate
  end

  def role_equal
    return if params.dig(:users, :role).blank?

    @records = User.where('role = ?', params.dig(:users, :role))
  end

  def email_start_with
    return if params.dig(:users, :email).blank?

    @records = if records.is_a?(Class)
                 User.where(value.query)
               else
                 records.or(User.where('email like ?', "%#{params.dig(:users, :email)}"))
               end
  end

  def order
    return if records.blank?

    @records = records.order('users.created_at desc')
  end

  def paginate
    @records = User.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
