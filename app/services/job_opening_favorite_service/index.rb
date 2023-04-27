# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class JobOpeningFavoriteService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = JobOpeningFavorite
  end

  def execute
    job_opening_id_equal

    applicant_id_equal

    order

    paginate
  end

  def job_opening_id_equal
    return if params.dig(:job_opening_favorites, :job_opening_id).blank?

    @records = JobOpeningFavorite.where('job_opening_id = ?', params.dig(:job_opening_favorites, :job_opening_id))
  end

  def applicant_id_equal
    return if params.dig(:job_opening_favorites, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 JobOpeningFavorite.where(value.query)
               else
                 records.or(JobOpeningFavorite.where('applicant_id = ?', params.dig(:job_opening_favorites, :applicant_id)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('job_opening_favorites.created_at desc')
  end

  def paginate
    @records = JobOpeningFavorite.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
