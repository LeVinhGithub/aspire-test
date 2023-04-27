class Api::ApplicantSchoolsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @applicant_schools = ApplicantSchoolService::Index.new(params.permit!).execute
    @total_pages = @applicant_schools.total_pages
  end

  def create
    @applicant_school = ApplicantSchool.new(create_params)
    return if @applicant_school.save

    @error_object = @applicant_school.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:applicant_schools).permit(:graduation_date, :name, :degree, :major, :school_type_id,
                                              :applicant_id)
  end

  def update
    @applicant_school = ApplicantSchool.find_by('applicant_schools.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @applicant_school.blank?

    return if @applicant_school.update(update_params)

    @error_object = @applicant_school.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:applicant_schools).permit(:graduation_date, :name, :degree, :major, :school_type_id,
                                              :applicant_id)
  end

  def destroy
    @applicant_school = ApplicantSchool.find_by('applicant_schools.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @applicant_school.blank?

    if @applicant_school.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
