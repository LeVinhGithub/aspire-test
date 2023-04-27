# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class CompanyEmployeeService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = CompanyEmployee
  end

  def execute
    name_start_with

    location_start_with

    launched_year_start_with

    business_details_start_with

    number_of_employees_equal

    industry_id_equal

    mission_start_with

    vision_start_with

    value_start_with

    representative_profile_start_with

    listing_classification_start_with

    representative_name_start_with

    slug_start_with

    capital_start_with

    company_id_equal

    full_name_start_with

    profile_start_with

    is_high_rank_employee_equal

    order

    paginate
  end

  def name_start_with
    return if params.dig(:companies, :name).blank?

    @records = CompanyEmployee.where('name like ?', "%#{params.dig(:companies, :name)}")
  end

  def location_start_with
    return if params.dig(:companies, :location).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('location like ?', "%#{params.dig(:companies, :location)}"))
               end
  end

  def launched_year_start_with
    return if params.dig(:companies, :launched_year).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('launched_year like ?', "%#{params.dig(:companies, :launched_year)}"))
               end
  end

  def business_details_start_with
    return if params.dig(:companies, :business_details).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('business_details like ?', "%#{params.dig(:companies, :business_details)}"))
               end
  end

  def number_of_employees_equal
    return if params.dig(:companies, :number_of_employees).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('number_of_employees = ?', params.dig(:companies, :number_of_employees)))
               end
  end

  def industry_id_equal
    return if params.dig(:companies, :industry_id).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('industry_id = ?', params.dig(:companies, :industry_id)))
               end
  end

  def mission_start_with
    return if params.dig(:companies, :mission).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('mission like ?', "%#{params.dig(:companies, :mission)}"))
               end
  end

  def vision_start_with
    return if params.dig(:companies, :vision).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('vision like ?', "%#{params.dig(:companies, :vision)}"))
               end
  end

  def value_start_with
    return if params.dig(:companies, :value).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('value like ?', "%#{params.dig(:companies, :value)}"))
               end
  end

  def representative_profile_start_with
    return if params.dig(:companies, :representative_profile).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('representative_profile like ?', "%#{params.dig(:companies, :representative_profile)}"))
               end
  end

  def listing_classification_start_with
    return if params.dig(:companies, :ipo).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('listing_classification like ?', "%#{params.dig(:companies, :ipo)}"))
               end
  end

  def representative_name_start_with
    return if params.dig(:companies, :representative_name).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('representative_name like ?', "%#{params.dig(:companies, :representative_name)}"))
               end
  end

  def slug_start_with
    return if params.dig(:companies, :slug).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('slug like ?', "%#{params.dig(:companies, :slug)}"))
               end
  end

  def capital_start_with
    return if params.dig(:companies, :capital).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('capital like ?', "%#{params.dig(:companies, :capital)}"))
               end
  end

  def company_id_equal
    return if params.dig(:company_employees, :company_id).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('company_id = ?', params.dig(:company_employees, :company_id)))
               end
  end

  def full_name_start_with
    return if params.dig(:company_employees, :full_name).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('full_name like ?', "%#{params.dig(:company_employees, :full_name)}"))
               end
  end

  def profile_start_with
    return if params.dig(:company_employees, :profile).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('profile like ?', "%#{params.dig(:company_employees, :profile)}"))
               end
  end

  def is_high_rank_employee_equal
    return if params.dig(:company_employees, :is_high_rank_employee).blank?

    @records = if records.is_a?(Class)
                 CompanyEmployee.where(value.query)
               else
                 records.or(CompanyEmployee.where('is_high_rank_employee = ?', params.dig(:company_employees, :is_high_rank_employee)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('company_employees.created_at desc')
  end

  def paginate
    @records = CompanyEmployee.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
