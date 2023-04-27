class Api::JobOpeningFavoritesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @job_opening_favorites = JobOpeningFavoriteService::Index.new(params.permit!).execute
    @total_pages = @job_opening_favorites.total_pages
  end

  def show
    @job_opening_favorite = JobOpeningFavorite.find_by!('job_opening_favorites.id = ?', params[:id])
  end

  def create
    @job_opening_favorite = JobOpeningFavorite.new(create_params)
    return if @job_opening_favorite.save

    @error_object = @job_opening_favorite.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:job_opening_favorites).permit(:job_opening_id, :applicant_id)
  end

  def update
    @job_opening_favorite = JobOpeningFavorite.find_by('job_opening_favorites.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @job_opening_favorite.blank?

    return if @job_opening_favorite.update(update_params)

    @error_object = @job_opening_favorite.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:job_opening_favorites).permit(:job_opening_id, :applicant_id)
  end

  def destroy
    @job_opening_favorite = JobOpeningFavorite.find_by('job_opening_favorites.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @job_opening_favorite.blank?

    if @job_opening_favorite.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
