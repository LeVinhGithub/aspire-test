# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class ApplicantIndustryService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = ApplicantIndustry
  end

  def execute
    industry_id_equal

    applicant_id_equal

    order

    paginate
  end

  def industry_id_equal
    return if params.dig(:applicant_industries, :industry_id).blank?

    @records = ApplicantIndustry.where('industry_id = ?', params.dig(:applicant_industries, :industry_id))
  end

  def applicant_id_equal
    return if params.dig(:applicant_industries, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 ApplicantIndustry.where(value.query)
               else
                 records.or(ApplicantIndustry.where('applicant_id = ?', params.dig(:applicant_industries, :applicant_id)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('applicant_industries.created_at desc')
  end

  def paginate
    @records = ApplicantIndustry.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
