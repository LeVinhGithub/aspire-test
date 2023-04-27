class Api::JobApplicationsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @job_applications = JobApplicationService::Index.new(params.permit!).execute
    @total_pages = @job_applications.total_pages
  end

  def show
    @job_application = JobApplication.find_by!('job_applications.id = ?', params[:id])
  end

  def create
    @job_application = JobApplication.new(create_params)
    return if @job_application.save

    @error_object = @job_application.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:job_applications).permit(:applicant_id, :job_opening_id, :status)
  end

  def update
    @job_application = JobApplication.find_by('job_applications.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @job_application.blank?

    return if @job_application.update(update_params)

    @error_object = @job_application.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:job_applications).permit(:applicant_id, :job_opening_id, :status)
  end

  def destroy
    @job_application = JobApplication.find_by('job_applications.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @job_application.blank?

    if @job_application.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
