# rubocop:disable Style/ClassAndModuleChildren
class ManagementExperienceService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = ManagementExperience
  end

  def execute
    name_start_with

    order

    paginate
  end

  def name_start_with
    return if params.dig(:management_experiences, :name).blank?

    @records = ManagementExperience.where('name like ?', "%#{params.dig(:management_experiences, :name)}")
  end

  def order
    return if records.blank?

    @records = records.order('management_experiences.created_at desc')
  end

  def paginate
    @records = ManagementExperience.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
