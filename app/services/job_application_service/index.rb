# rubocop:disable Style/ClassAndModuleChildren
class JobApplicationService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = JobApplication
  end

  def execute
    applicant_id_equal

    job_opening_id_equal

    status_equal

    order

    paginate
  end

  def applicant_id_equal
    return if params.dig(:job_applications, :applicant_id).blank?

    @records = JobApplication.where('applicant_id = ?', params.dig(:job_applications, :applicant_id))
  end

  def job_opening_id_equal
    return if params.dig(:job_applications, :job_opening_id).blank?

    @records = if records.is_a?(Class)
                 JobApplication.where(value.query)
               else
                 records.or(JobApplication.where('job_opening_id = ?', params.dig(:job_applications, :job_opening_id)))
               end
  end

  def status_equal
    return if params.dig(:job_applications, :status).blank?

    @records = if records.is_a?(Class)
                 JobApplication.where(value.query)
               else
                 records.or(JobApplication.where('status = ?', params.dig(:job_applications, :status)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('job_applications.created_at desc')
  end

  def paginate
    @records = JobApplication.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
