# rubocop:disable Style/ClassAndModuleChildren
class IndustryGroupService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = IndustryGroup
  end

  def execute
    name_start_with

    order

    paginate
  end

  def name_start_with
    return if params.dig(:industry_groups, :name).blank?

    @records = IndustryGroup.where('name like ?', "%#{params.dig(:industry_groups, :name)}")
  end

  def order
    return if records.blank?

    @records = records.order('industry_groups.created_at desc')
  end

  def paginate
    @records = IndustryGroup.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
