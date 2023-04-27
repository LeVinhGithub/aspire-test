class Api::RestrictionsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @restrictions = RestrictionService::Index.new(params.permit!).execute
    @total_pages = @restrictions.total_pages
  end

  def show
    @restriction = Restriction.find_by!('restrictions.id = ?', params[:id])
  end

  def create
    @restriction = Restriction.new(create_params)
    return if @restriction.save

    @error_object = @restriction.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:restrictions).permit(:company_id, :applicant_id, :reason)
  end

  def update
    @restriction = Restriction.find_by('restrictions.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @restriction.blank?

    return if @restriction.update(update_params)

    @error_object = @restriction.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:restrictions).permit(:company_id, :applicant_id, :reason)
  end

  def destroy
    @restriction = Restriction.find_by('restrictions.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @restriction.blank?

    if @restriction.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
