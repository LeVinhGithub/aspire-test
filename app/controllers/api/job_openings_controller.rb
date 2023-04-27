class Api::JobOpeningsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @job_openings = JobOpeningService::Index.new(params.permit!).execute
    @total_pages = @job_openings.total_pages
  end

  def show
    @job_opening = JobOpening.find_by!('job_openings.id = ?', params[:id])
  end

  def create
    @job_opening = JobOpening.new(create_params)
    return if @job_opening.save

    @error_object = @job_opening.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:job_openings).permit(:department, :position, :occupation_type_id, :overseas_territory_id,
                                         :income_range_id, :job_description, :is_remote_available, :employment_status_id, :company_id, :trial_period, :working_hours, :avg_overtime_hours, :trial_period_conditions, :workplace, :qualification, :benefits, :vacation, :bonus, :vacation, :vacation, :bonuses, :promotion, :appeal_point, :passive_smoking_countermeasure_id, :career_direction_id, :job_title_id, :career_path, :trending_keywords, :business_trip_availability, :transfers, :publication_start_date, :publication_end_date, :slug, :image, :is_recommended, :is_recommended, :is_recommended, :is_recommended, :status, :status, :status, :pv, :status, :pv)
  end

  def update
    @job_opening = JobOpening.find_by('job_openings.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @job_opening.blank?

    return if @job_opening.update(update_params)

    @error_object = @job_opening.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:job_openings).permit(:department, :position, :occupation_type_id, :overseas_territory_id,
                                         :income_range_id, :job_description, :is_remote_available, :employment_status_id, :company_id, :trial_period, :working_hours, :avg_overtime_hours, :trial_period_conditions, :workplace, :qualification, :benefits, :vacation, :bonus, :vacation, :vacation, :bonuses, :promotion, :appeal_point, :passive_smoking_countermeasure_id, :career_direction_id, :job_title_id, :career_path, :trending_keywords, :business_trip_availability, :transfers, :publication_start_date, :publication_end_date, :slug, :image, :status, :pv, :is_recommended, :is_recommended, :is_recommended, :is_recommended, :is_recommended)
  end

  def destroy
    @job_opening = JobOpening.find_by('job_openings.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @job_opening.blank?

    if @job_opening.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
