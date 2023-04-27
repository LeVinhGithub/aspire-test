class Api::TargetListsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @target_lists = TargetListService::Index.new(params.permit!).execute
    @total_pages = @target_lists.total_pages
  end

  def show
    @target_list = TargetList.find_by!('target_lists.id = ?', params[:id])
  end

  def create
    @target_list = TargetList.new(create_params)
    return if @target_list.save

    @error_object = @target_list.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:target_lists).permit(:title, :company_id)
  end

  def update
    @target_list = TargetList.find_by('target_lists.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @target_list.blank?

    return if @target_list.update(update_params)

    @error_object = @target_list.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:target_lists).permit(:title, :company_id)
  end

  def destroy
    @target_list = TargetList.find_by('target_lists.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @target_list.blank?

    if @target_list.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
