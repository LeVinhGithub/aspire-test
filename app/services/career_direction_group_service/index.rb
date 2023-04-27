# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class CareerDirectionGroupService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = CareerDirectionGroup
  end

  def execute
    name_start_with

    career_directions_career_direction_group_id_equal

    order

    paginate
  end

  def name_start_with
    return if params.dig(:career_direction_groups, :name).blank?

    @records = CareerDirectionGroup.where('name like ?', "%#{params.dig(:career_direction_groups, :name)}")
  end

  def career_directions_career_direction_group_id_equal
    return if params.dig(:career_directions, :career_direction_group_id).blank?

    @records = if records.is_a?(Class)
                 CareerDirectionGroup.where(value.query)
               else
                 records.or(CareerDirectionGroup.where('career_directions.career_direction_group_id = ?', params.dig(:career_directions, :career_direction_group_id)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('career_direction_groups.created_at desc')
  end

  def paginate
    @records = CareerDirectionGroup.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
