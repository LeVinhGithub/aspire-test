# rubocop:disable Style/ClassAndModuleChildren
class JobExperienceService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = JobExperience
  end

  def execute
    company_name_start_with

    start_date_equal

    end_date_equal

    applicant_id_equal

    job_title_id_equal

    order

    paginate
  end

  def company_name_start_with
    return if params.dig(:job_experiences, :company_name).blank?

    @records = JobExperience.where('company_name like ?', "%#{params.dig(:job_experiences, :company_name)}")
  end

  def start_date_equal
    return if params.dig(:job_experiences, :start_date).blank?

    @records = if records.is_a?(Class)
                 JobExperience.where(value.query)
               else
                 records.or(JobExperience.where('start_date = ?', params.dig(:job_experiences, :start_date)))
               end
  end

  def end_date_equal
    return if params.dig(:job_experiences, :end_date).blank?

    @records = if records.is_a?(Class)
                 JobExperience.where(value.query)
               else
                 records.or(JobExperience.where('end_date = ?', params.dig(:job_experiences, :end_date)))
               end
  end

  def applicant_id_equal
    return if params.dig(:job_experiences, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 JobExperience.where(value.query)
               else
                 records.or(JobExperience.where('applicant_id = ?', params.dig(:job_experiences, :applicant_id)))
               end
  end

  def job_title_id_equal
    return if params.dig(:job_experiences, :job_title_id).blank?

    @records = if records.is_a?(Class)
                 JobExperience.where(value.query)
               else
                 records.or(JobExperience.where('job_title_id = ?', params.dig(:job_experiences, :job_title_id)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('job_experiences.created_at desc')
  end

  def paginate
    @records = JobExperience.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
