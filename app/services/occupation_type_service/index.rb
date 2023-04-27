# rubocop:disable Style/ClassAndModuleChildren
class OccupationTypeService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = OccupationType
  end

  def execute
    name_start_with

    order

    paginate
  end

  def name_start_with
    return if params.dig(:occupation_types, :name).blank?

    @records = OccupationType.where('name like ?', "%#{params.dig(:occupation_types, :name)}")
  end

  def order
    return if records.blank?

    @records = records.order('occupation_types.created_at desc')
  end

  def paginate
    @records = OccupationType.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
