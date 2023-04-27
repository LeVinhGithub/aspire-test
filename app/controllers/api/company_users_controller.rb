class Api::CompanyUsersController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @company_users = CompanyUserService::Index.new(params.permit!).execute
    @total_pages = @company_users.total_pages
  end

  def show
    @company_user = CompanyUser.find_by!('company_users.id = ?', params[:id])
  end

  def create
    @company_user = CompanyUser.new(create_params)
    return if @company_user.save

    @error_object = @company_user.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:company_users).permit(:company_id, :full_name, :position, :photo, :email, :role, :phone_number)
  end

  def update
    @company_user = CompanyUser.find_by('company_users.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @company_user.blank?

    return if @company_user.update(update_params)

    @error_object = @company_user.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:company_users).permit(:company_id, :full_name, :position, :photo, :email, :role, :phone_number)
  end

  def destroy
    @company_user = CompanyUser.find_by('company_users.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @company_user.blank?

    if @company_user.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
