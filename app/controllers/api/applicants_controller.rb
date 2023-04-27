class Api::ApplicantsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @applicants = ApplicantService::Index.new(params.permit!).execute
    @total_pages = @applicants.total_pages
  end

  def show
    @applicant = Applicant.find_by!('applicants.id = ?', params[:id])
  end

  def create
    @applicant = Applicant.new(create_params)
    return if @applicant.save

    @error_object = @applicant.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:restrictions).permit(:company_id, :applicant_id)
  end

  def update
    @applicant = Applicant.find_by('applicants.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @applicant.blank?

    return if @applicant.update(update_params)

    @error_object = @applicant.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:restrictions).permit(:company_id, :applicant_id)
  end

  def destroy
    @applicant = Applicant.find_by('applicants.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @applicant.blank?

    if @applicant.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
