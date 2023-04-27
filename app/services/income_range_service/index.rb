# rubocop:disable Style/ClassAndModuleChildren
class IncomeRangeService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = IncomeRange
  end

  def execute
    name_start_with

    name_start_with_1

    order

    paginate
  end

  def name_start_with
    return if params.dig(:income_ranges, :name).blank?

    @records = IncomeRange.where('name like ?', "%#{params.dig(:income_ranges, :name)}")
  end

  def name_start_with_1
    return if params.dig(:income_ranges, :name).blank?

    @records = if records.is_a?(Class)
                 IncomeRange.where(value.query)
               else
                 records.or(IncomeRange.where('name like ?', "%#{params.dig(:income_ranges, :name)}"))
               end
  end

  def order
    return if records.blank?

    @records = records.order('income_ranges.created_at desc')
  end

  def paginate
    @records = IncomeRange.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
