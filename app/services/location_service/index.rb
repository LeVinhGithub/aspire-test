# rubocop:disable Style/ClassAndModuleChildren
class LocationService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = Location
  end

  def execute
    name_start_with

    is_prefecture_equal

    order

    paginate
  end

  def name_start_with
    return if params.dig(:locations, :name).blank?

    @records = Location.where('name like ?', "%#{params.dig(:locations, :name)}")
  end

  def is_prefecture_equal
    return if params.dig(:locations, :is_prefecture).blank?

    @records = if records.is_a?(Class)
                 Location.where(value.query)
               else
                 records.or(Location.where('is_prefecture = ?', params.dig(:locations, :is_prefecture)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('locations.created_at desc')
  end

  def paginate
    @records = Location.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
