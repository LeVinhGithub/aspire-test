# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class JobOpeningService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = JobOpening
  end

  def execute
    department_start_with

    position_start_with

    occupation_type_id_equal

    location_id_equal

    income_range_id_equal

    job_description_start_with

    is_remote_available_equal

    employment_status_id_equal

    company_id_equal

    trial_period_start_with

    working_hours_start_with

    avg_overtime_hours_start_with

    trial_period_conditions_start_with

    workplace_start_with

    qualification_start_with

    benefits_start_with

    vacation_start_with

    bonus_start_with

    vacation_start_with_18

    vacation_start_with_19

    bonus_start_with_20

    promotion_start_with

    appeal_point_start_with

    passive_smoking_countermeasure_id_equal

    career_direction_id_equal

    job_title_id_equal

    future_career_path_start_with

    trending_keywords_start_with

    business_trip_availability_equal

    transfers_equal

    publication_start_date_equal

    publication_end_date_equal

    slug_start_with

    is_recommended_equal

    is_recommended_equal_34

    status_equal

    status_equal_36

    status_equal_37

    pv_equal

    pv_equal_39

    pv_equal_40

    order

    paginate
  end

  def department_start_with
    return if params.dig(:job_openings, :department).blank?

    @records = JobOpening.where('department like ?', "%#{params.dig(:job_openings, :department)}")
  end

  def position_start_with
    return if params.dig(:job_openings, :position).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('position like ?', "%#{params.dig(:job_openings, :position)}"))
               end
  end

  def occupation_type_id_equal
    return if params.dig(:job_openings, :occupation_type_id).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('occupation_type_id = ?', params.dig(:job_openings, :occupation_type_id)))
               end
  end

  def location_id_equal
    return if params.dig(:job_openings, :overseas_territory_id).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('location_id = ?', params.dig(:job_openings, :overseas_territory_id)))
               end
  end

  def income_range_id_equal
    return if params.dig(:job_openings, :income_range_id).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('income_range_id = ?', params.dig(:job_openings, :income_range_id)))
               end
  end

  def job_description_start_with
    return if params.dig(:job_openings, :job_description).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('job_description like ?', "%#{params.dig(:job_openings, :job_description)}"))
               end
  end

  def is_remote_available_equal
    return if params.dig(:job_openings, :is_remote_available).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('is_remote_available = ?', params.dig(:job_openings, :is_remote_available)))
               end
  end

  def employment_status_id_equal
    return if params.dig(:job_openings, :employment_status_id).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('employment_status_id = ?', params.dig(:job_openings, :employment_status_id)))
               end
  end

  def company_id_equal
    return if params.dig(:job_openings, :company_id).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('company_id = ?', params.dig(:job_openings, :company_id)))
               end
  end

  def trial_period_start_with
    return if params.dig(:job_openings, :trial_period).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('trial_period like ?', "%#{params.dig(:job_openings, :trial_period)}"))
               end
  end

  def working_hours_start_with
    return if params.dig(:job_openings, :working_hours).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('working_hours like ?', "%#{params.dig(:job_openings, :working_hours)}"))
               end
  end

  def avg_overtime_hours_start_with
    return if params.dig(:job_openings, :avg_overtime_hours).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('avg_overtime_hours like ?', "%#{params.dig(:job_openings, :avg_overtime_hours)}"))
               end
  end

  def trial_period_conditions_start_with
    return if params.dig(:job_openings, :trial_period_conditions).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('trial_period_conditions like ?', "%#{params.dig(:job_openings, :trial_period_conditions)}"))
               end
  end

  def workplace_start_with
    return if params.dig(:job_openings, :workplace).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('workplace like ?', "%#{params.dig(:job_openings, :workplace)}"))
               end
  end

  def qualification_start_with
    return if params.dig(:job_openings, :qualification).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('qualification like ?', "%#{params.dig(:job_openings, :qualification)}"))
               end
  end

  def benefits_start_with
    return if params.dig(:job_openings, :benefits).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('benefits like ?', "%#{params.dig(:job_openings, :benefits)}"))
               end
  end

  def vacation_start_with
    return if params.dig(:job_openings, :vacation).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('vacation like ?', "%#{params.dig(:job_openings, :vacation)}"))
               end
  end

  def bonus_start_with
    return if params.dig(:job_openings, :bonus).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('bonus like ?', "%#{params.dig(:job_openings, :bonus)}"))
               end
  end

  def vacation_start_with_18
    return if params.dig(:job_openings, :vacation).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('vacation like ?', "%#{params.dig(:job_openings, :vacation)}"))
               end
  end

  def vacation_start_with_19
    return if params.dig(:job_openings, :vacation).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('vacation like ?', "%#{params.dig(:job_openings, :vacation)}"))
               end
  end

  def bonus_start_with_20
    return if params.dig(:job_openings, :bonuses).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('bonus like ?', "%#{params.dig(:job_openings, :bonuses)}"))
               end
  end

  def promotion_start_with
    return if params.dig(:job_openings, :promotion).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('promotion like ?', "%#{params.dig(:job_openings, :promotion)}"))
               end
  end

  def appeal_point_start_with
    return if params.dig(:job_openings, :appeal_point).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('appeal_point like ?', "%#{params.dig(:job_openings, :appeal_point)}"))
               end
  end

  def passive_smoking_countermeasure_id_equal
    return if params.dig(:job_openings, :passive_smoking_countermeasure_id).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('passive_smoking_countermeasure_id = ?', params.dig(:job_openings, :passive_smoking_countermeasure_id)))
               end
  end

  def career_direction_id_equal
    return if params.dig(:job_openings, :career_direction_id).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('career_direction_id = ?', params.dig(:job_openings, :career_direction_id)))
               end
  end

  def job_title_id_equal
    return if params.dig(:job_openings, :job_title_id).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('job_title_id = ?', params.dig(:job_openings, :job_title_id)))
               end
  end

  def future_career_path_start_with
    return if params.dig(:job_openings, :career_path).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('future_career_path like ?', "%#{params.dig(:job_openings, :career_path)}"))
               end
  end

  def trending_keywords_start_with
    return if params.dig(:job_openings, :trending_keywords).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('trending_keywords like ?', "%#{params.dig(:job_openings, :trending_keywords)}"))
               end
  end

  def business_trip_availability_equal
    return if params.dig(:job_openings, :business_trip_availability).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('business_trip_availability = ?', params.dig(:job_openings, :business_trip_availability)))
               end
  end

  def transfers_equal
    return if params.dig(:job_openings, :transfers).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('transfers = ?', params.dig(:job_openings, :transfers)))
               end
  end

  def publication_start_date_equal
    return if params.dig(:job_openings, :publication_start_date).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('publication_start_date = ?', params.dig(:job_openings, :publication_start_date)))
               end
  end

  def publication_end_date_equal
    return if params.dig(:job_openings, :publication_end_date).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('publication_end_date = ?', params.dig(:job_openings, :publication_end_date)))
               end
  end

  def slug_start_with
    return if params.dig(:job_openings, :slug).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('slug like ?', "%#{params.dig(:job_openings, :slug)}"))
               end
  end

  def is_recommended_equal
    return if params.dig(:job_openings, :is_recommended).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('is_recommended = ?', params.dig(:job_openings, :is_recommended)))
               end
  end

  def is_recommended_equal_34
    return if params.dig(:job_openings, :is_recommended).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('is_recommended = ?', params.dig(:job_openings, :is_recommended)))
               end
  end

  def status_equal
    return if params.dig(:job_openings, :status).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('status = ?', params.dig(:job_openings, :status)))
               end
  end

  def status_equal_36
    return if params.dig(:job_openings, :status).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('status = ?', params.dig(:job_openings, :status)))
               end
  end

  def status_equal_37
    return if params.dig(:job_openings, :status).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('status = ?', params.dig(:job_openings, :status)))
               end
  end

  def pv_equal
    return if params.dig(:job_openings, :pv).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('pv = ?', params.dig(:job_openings, :pv)))
               end
  end

  def pv_equal_39
    return if params.dig(:job_openings, :pv).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('pv = ?', params.dig(:job_openings, :pv)))
               end
  end

  def pv_equal_40
    return if params.dig(:job_openings, :pv).blank?

    @records = if records.is_a?(Class)
                 JobOpening.where(value.query)
               else
                 records.or(JobOpening.where('pv = ?', params.dig(:job_openings, :pv)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('job_openings.created_at desc')
  end

  def paginate
    @records = JobOpening.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
