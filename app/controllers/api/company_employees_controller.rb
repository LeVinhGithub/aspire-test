class Api::CompanyEmployeesController < Api::BaseController
  before_action :doorkeeper_authorize!, only: %i[index]

  before_action :current_company_user_authenticate, only: %i[index]

  def index
    # inside service params are checked and whiteisted
    @company_employees = CompanyEmployeeService::Index.new(params.permit!).execute
    @total_pages = @company_employees.total_pages
  end

  def show
    @company_employee = CompanyEmployee.find_by!('company_employees.id = ?', params[:id])
  end

  def create
    @company_employee = CompanyEmployee.new(create_params)
    return if @company_employee.save

    @error_object = @company_employee.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:companies).permit(:name, :logo, :location, :launched_year, :business_details, :number_of_employees,
                                      :industry_id, :mission, :vision, :value, :representative_photo, :representative_profile, :ipo, :representative_name, :slug, :image, :capital)
  end

  def update
    @company_employee = CompanyEmployee.find_by('company_employees.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @company_employee.blank?

    return if @company_employee.update(update_params)

    @error_object = @company_employee.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:companies).permit(:name, :logo, :location, :launched_year, :business_details, :number_of_employees,
                                      :industry_id, :mission, :vision, :value, :representative_photo, :representative_profile, :ipo, :representative_name, :slug, :image, :capital)
  end

  def destroy
    @company_employee = CompanyEmployee.find_by('company_employees.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @company_employee.blank?

    if @company_employee.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
