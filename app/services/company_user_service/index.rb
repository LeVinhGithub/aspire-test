# rubocop:disable Style/ClassAndModuleChildren
class CompanyUserService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = CompanyUser
  end

  def execute
    company_id_equal

    full_name_start_with

    position_start_with

    email_start_with

    role_equal

    phone_number_start_with

    order

    paginate
  end

  def company_id_equal
    return if params.dig(:company_users, :company_id).blank?

    @records = CompanyUser.where('company_id = ?', params.dig(:company_users, :company_id))
  end

  def full_name_start_with
    return if params.dig(:company_users, :full_name).blank?

    @records = if records.is_a?(Class)
                 CompanyUser.where(value.query)
               else
                 records.or(CompanyUser.where('full_name like ?', "%#{params.dig(:company_users, :full_name)}"))
               end
  end

  def position_start_with
    return if params.dig(:company_users, :position).blank?

    @records = if records.is_a?(Class)
                 CompanyUser.where(value.query)
               else
                 records.or(CompanyUser.where('position like ?', "%#{params.dig(:company_users, :position)}"))
               end
  end

  def email_start_with
    return if params.dig(:company_users, :email).blank?

    @records = if records.is_a?(Class)
                 CompanyUser.where(value.query)
               else
                 records.or(CompanyUser.where('email like ?', "%#{params.dig(:company_users, :email)}"))
               end
  end

  def role_equal
    return if params.dig(:company_users, :role).blank?

    @records = if records.is_a?(Class)
                 CompanyUser.where(value.query)
               else
                 records.or(CompanyUser.where('role = ?', params.dig(:company_users, :role)))
               end
  end

  def phone_number_start_with
    return if params.dig(:company_users, :phone_number).blank?

    @records = if records.is_a?(Class)
                 CompanyUser.where(value.query)
               else
                 records.or(CompanyUser.where('phone_number like ?', "%#{params.dig(:company_users, :phone_number)}"))
               end
  end

  def order
    return if records.blank?

    @records = records.order('company_users.created_at desc')
  end

  def paginate
    @records = CompanyUser.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
