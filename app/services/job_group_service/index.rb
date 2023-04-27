# rubocop:disable Style/ClassAndModuleChildren
class JobGroupService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = JobGroup
  end

  def execute
    name_start_with

    order

    paginate
  end

  def name_start_with
    return if params.dig(:job_groups, :name).blank?

    @records = JobGroup.where('name like ?', "%#{params.dig(:job_groups, :name)}")
  end

  def order
    return if records.blank?

    @records = records.order('job_groups.created_at desc')
  end

  def paginate
    @records = JobGroup.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
