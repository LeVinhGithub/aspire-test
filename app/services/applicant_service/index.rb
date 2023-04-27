# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class ApplicantService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = Applicant
  end

  def execute
    full_name_start_with

    furigana_start_with

    phone_number_start_with

    birthdate_equal

    location_id_equal

    address_start_with

    income_range_id_equal

    availability_equal

    resume_file_start_with

    description_start_with

    management_experience_id_equal

    email_start_with

    gender_equal

    restrictions_company_id_equal

    restrictions_applicant_id_equal

    is_onboarded_equal

    notes_start_with

    current_company_name_start_with

    current_company_department_start_with

    current_company_position_start_with

    confirmation_email_resent_count_equal

    number_of_companies_equal

    is_suspended_equal

    desired_info_start_with

    management_experience_years_equal

    order

    paginate
  end

  def full_name_start_with
    return if params.dig(:applicants, :full_name).blank?

    @records = Applicant.where('full_name like ?', "%#{params.dig(:applicants, :full_name)}")
  end

  def furigana_start_with
    return if params.dig(:applicants, :furigana).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('furigana like ?', "%#{params.dig(:applicants, :furigana)}"))
               end
  end

  def phone_number_start_with
    return if params.dig(:applicants, :phone_number).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('phone_number like ?', "%#{params.dig(:applicants, :phone_number)}"))
               end
  end

  def birthdate_equal
    return if params.dig(:applicants, :dob).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('birthdate = ?', params.dig(:applicants, :dob)))
               end
  end

  def location_id_equal
    return if params.dig(:applicants, :overseas_territory_id).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('location_id = ?', params.dig(:applicants, :overseas_territory_id)))
               end
  end

  def address_start_with
    return if params.dig(:applicants, :address).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('address like ?', "%#{params.dig(:applicants, :address)}"))
               end
  end

  def income_range_id_equal
    return if params.dig(:applicants, :income_range_id).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('income_range_id = ?', params.dig(:applicants, :income_range_id)))
               end
  end

  def availability_equal
    return if params.dig(:applicants, :availability).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('availability = ?', params.dig(:applicants, :availability)))
               end
  end

  def resume_file_start_with
    return if params.dig(:applicants, :resume_file).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('resume_file like ?', "%#{params.dig(:applicants, :resume_file)}"))
               end
  end

  def description_start_with
    return if params.dig(:applicants, :description).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('description like ?', "%#{params.dig(:applicants, :description)}"))
               end
  end

  def management_experience_id_equal
    return if params.dig(:applicants, :management_experience_id).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('management_experience_id = ?', params.dig(:applicants, :management_experience_id)))
               end
  end

  def email_start_with
    return if params.dig(:applicants, :email).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('email like ?', "%#{params.dig(:applicants, :email)}"))
               end
  end

  def gender_equal
    return if params.dig(:applicants, :gender).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('gender = ?', params.dig(:applicants, :gender)))
               end
  end

  def restrictions_company_id_equal
    return if params.dig(:restrictions, :company_id).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('restrictions.company_id = ?', params.dig(:restrictions, :company_id)))
               end
  end

  def restrictions_applicant_id_equal
    return if params.dig(:restrictions, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('restrictions.applicant_id = ?', params.dig(:restrictions, :applicant_id)))
               end
  end

  def is_onboarded_equal
    return if params.dig(:applicants, :is_onboarded).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('is_onboarded = ?', params.dig(:applicants, :is_onboarded)))
               end
  end

  def notes_start_with
    return if params.dig(:applicants, :notes).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('notes like ?', "%#{params.dig(:applicants, :notes)}"))
               end
  end

  def current_company_name_start_with
    return if params.dig(:applicants, :current_company_name).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('current_company_name like ?', "%#{params.dig(:applicants, :current_company_name)}"))
               end
  end

  def current_company_department_start_with
    return if params.dig(:applicants, :current_company_department).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('current_company_department like ?', "%#{params.dig(:applicants, :current_company_department)}"))
               end
  end

  def current_company_position_start_with
    return if params.dig(:applicants, :current_company_position).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('current_company_position like ?', "%#{params.dig(:applicants, :current_company_position)}"))
               end
  end

  def confirmation_email_resent_count_equal
    return if params.dig(:applicants, :confirmation_email_resent_count).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('confirmation_email_resent_count = ?', params.dig(:applicants, :confirmation_email_resent_count)))
               end
  end

  def number_of_companies_equal
    return if params.dig(:applicants, :number_of_companies).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('number_of_companies = ?', params.dig(:applicants, :number_of_companies)))
               end
  end

  def is_suspended_equal
    return if params.dig(:applicants, :is_suspended).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('is_suspended = ?', params.dig(:applicants, :is_suspended)))
               end
  end

  def desired_info_start_with
    return if params.dig(:applicants, :desired_info).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('desired_info like ?', "%#{params.dig(:applicants, :desired_info)}"))
               end
  end

  def management_experience_years_equal
    return if params.dig(:applicants, :management_experience_years).blank?

    @records = if records.is_a?(Class)
                 Applicant.where(value.query)
               else
                 records.or(Applicant.where('management_experience_years = ?', params.dig(:applicants, :management_experience_years)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('applicants.created_at desc')
  end

  def paginate
    @records = Applicant.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
