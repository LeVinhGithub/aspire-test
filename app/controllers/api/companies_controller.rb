class Api::CompaniesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @companies = CompanyService::Index.new(params.permit!).execute
    @total_pages = @companies.total_pages
  end

  def show
    @company = Company.find_by!('companies.id = ?', params[:id])
  end

  def create
    @company = Company.new(create_params)
    return if @company.save

    @error_object = @company.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:company_employees).permit
  end

  def update
    @company = Company.find_by('companies.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @company.blank?

    return if @company.update(update_params)

    @error_object = @company.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:company_employees).permit
  end

  def destroy
    @company = Company.find_by('companies.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @company.blank?

    if @company.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
