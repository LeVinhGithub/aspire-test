class Api::ApplicantLanguagesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @applicant_languages = ApplicantLanguageService::Index.new(params.permit!).execute
    @total_pages = @applicant_languages.total_pages
  end

  def create
    @applicant_language = ApplicantLanguage.new(create_params)
    return if @applicant_language.save

    @error_object = @applicant_language.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:applicant_languages).permit(:proficiency, :language_id, :applicant_id)
  end

  def update
    @applicant_language = ApplicantLanguage.find_by('applicant_languages.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @applicant_language.blank?

    return if @applicant_language.update(update_params)

    @error_object = @applicant_language.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:applicant_languages).permit(:proficiency, :language_id, :applicant_id)
  end

  def destroy
    @applicant_language = ApplicantLanguage.find_by('applicant_languages.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @applicant_language.blank?

    if @applicant_language.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
