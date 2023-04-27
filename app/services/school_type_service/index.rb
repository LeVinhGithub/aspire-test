# rubocop:disable Style/ClassAndModuleChildren
class SchoolTypeService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = SchoolType
  end

  def execute
    name_start_with

    order

    paginate
  end

  def name_start_with
    return if params.dig(:school_types, :name).blank?

    @records = SchoolType.where('name like ?', "%#{params.dig(:school_types, :name)}")
  end

  def order
    return if records.blank?

    @records = records.order('school_types.created_at desc')
  end

  def paginate
    @records = SchoolType.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
