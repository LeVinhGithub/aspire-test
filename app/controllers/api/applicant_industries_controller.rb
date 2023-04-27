class Api::ApplicantIndustriesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @applicant_industries = ApplicantIndustryService::Index.new(params.permit!).execute
    @total_pages = @applicant_industries.total_pages
  end

  def create
    @applicant_industry = ApplicantIndustry.new(create_params)
    return if @applicant_industry.save

    @error_object = @applicant_industry.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:applicant_industries).permit(:industry_id, :applicant_id)
  end

  def update
    @applicant_industry = ApplicantIndustry.find_by('applicant_industries.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @applicant_industry.blank?

    return if @applicant_industry.update(update_params)

    @error_object = @applicant_industry.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:applicant_industries).permit(:industry_id, :applicant_id)
  end

  def destroy
    @applicant_industry = ApplicantIndustry.find_by('applicant_industries.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @applicant_industry.blank?

    if @applicant_industry.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
