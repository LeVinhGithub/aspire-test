# rubocop:disable Style/ClassAndModuleChildren
class RestrictionService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = Restriction
  end

  def execute
    company_id_equal

    applicant_id_equal

    reason_equal

    order

    paginate
  end

  def company_id_equal
    return if params.dig(:restrictions, :company_id).blank?

    @records = Restriction.where('company_id = ?', params.dig(:restrictions, :company_id))
  end

  def applicant_id_equal
    return if params.dig(:restrictions, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 Restriction.where(value.query)
               else
                 records.or(Restriction.where('applicant_id = ?', params.dig(:restrictions, :applicant_id)))
               end
  end

  def reason_equal
    return if params.dig(:restrictions, :reason).blank?

    @records = if records.is_a?(Class)
                 Restriction.where(value.query)
               else
                 records.or(Restriction.where('reason = ?', params.dig(:restrictions, :reason)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('restrictions.created_at desc')
  end

  def paginate
    @records = Restriction.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
