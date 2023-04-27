# rubocop:disable Style/ClassAndModuleChildren
class TargetListService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = TargetList
  end

  def execute
    title_start_with

    company_id_equal

    order

    paginate
  end

  def title_start_with
    return if params.dig(:target_lists, :title).blank?

    @records = TargetList.where('title like ?', "%#{params.dig(:target_lists, :title)}")
  end

  def company_id_equal
    return if params.dig(:target_lists, :company_id).blank?

    @records = if records.is_a?(Class)
                 TargetList.where(value.query)
               else
                 records.or(TargetList.where('company_id = ?', params.dig(:target_lists, :company_id)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('target_lists.created_at desc')
  end

  def paginate
    @records = TargetList.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
