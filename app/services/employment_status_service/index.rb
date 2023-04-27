# rubocop:disable Style/ClassAndModuleChildren
class EmploymentStatusService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = EmploymentStatus
  end

  def execute
    name_start_with

    order

    paginate
  end

  def name_start_with
    return if params.dig(:employment_statuses, :name).blank?

    @records = EmploymentStatus.where('name like ?', "%#{params.dig(:employment_statuses, :name)}")
  end

  def order
    return if records.blank?

    @records = records.order('employment_statuses.created_at desc')
  end

  def paginate
    @records = EmploymentStatus.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
