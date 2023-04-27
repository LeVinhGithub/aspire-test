class Api::JobExperiencesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @job_experiences = JobExperienceService::Index.new(params.permit!).execute
    @total_pages = @job_experiences.total_pages
  end

  def create
    @job_experience = JobExperience.new(create_params)
    return if @job_experience.save

    @error_object = @job_experience.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:job_experiences).permit(:company_name, :start_date, :end_date, :applicant_id, :job_title_id)
  end

  def update
    @job_experience = JobExperience.find_by('job_experiences.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @job_experience.blank?

    return if @job_experience.update(update_params)

    @error_object = @job_experience.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:job_experiences).permit(:company_name, :start_date, :end_date, :applicant_id, :job_title_id)
  end

  def destroy
    @job_experience = JobExperience.find_by('job_experiences.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @job_experience.blank?

    if @job_experience.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
