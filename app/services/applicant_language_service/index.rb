# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class ApplicantLanguageService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = ApplicantLanguage
  end

  def execute
    proficiency_equal

    language_id_equal

    applicant_id_equal

    order

    paginate
  end

  def proficiency_equal
    return if params.dig(:applicant_languages, :proficiency).blank?

    @records = ApplicantLanguage.where('proficiency = ?', params.dig(:applicant_languages, :proficiency))
  end

  def language_id_equal
    return if params.dig(:applicant_languages, :language_id).blank?

    @records = if records.is_a?(Class)
                 ApplicantLanguage.where(value.query)
               else
                 records.or(ApplicantLanguage.where('language_id = ?', params.dig(:applicant_languages, :language_id)))
               end
  end

  def applicant_id_equal
    return if params.dig(:applicant_languages, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 ApplicantLanguage.where(value.query)
               else
                 records.or(ApplicantLanguage.where('applicant_id = ?', params.dig(:applicant_languages, :applicant_id)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('applicant_languages.created_at desc')
  end

  def paginate
    @records = ApplicantLanguage.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
