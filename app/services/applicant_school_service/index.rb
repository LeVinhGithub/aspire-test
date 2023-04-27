# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class ApplicantSchoolService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = ApplicantSchool
  end

  def execute
    graduation_date_equal

    name_start_with

    degree_start_with

    major_start_with

    school_type_id_equal

    applicant_id_equal

    order

    paginate
  end

  def graduation_date_equal
    return if params.dig(:applicant_schools, :graduation_date).blank?

    @records = ApplicantSchool.where('graduation_date = ?', params.dig(:applicant_schools, :graduation_date))
  end

  def name_start_with
    return if params.dig(:applicant_schools, :name).blank?

    @records = if records.is_a?(Class)
                 ApplicantSchool.where(value.query)
               else
                 records.or(ApplicantSchool.where('name like ?', "%#{params.dig(:applicant_schools, :name)}"))
               end
  end

  def degree_start_with
    return if params.dig(:applicant_schools, :degree).blank?

    @records = if records.is_a?(Class)
                 ApplicantSchool.where(value.query)
               else
                 records.or(ApplicantSchool.where('degree like ?', "%#{params.dig(:applicant_schools, :degree)}"))
               end
  end

  def major_start_with
    return if params.dig(:applicant_schools, :major).blank?

    @records = if records.is_a?(Class)
                 ApplicantSchool.where(value.query)
               else
                 records.or(ApplicantSchool.where('major like ?', "%#{params.dig(:applicant_schools, :major)}"))
               end
  end

  def school_type_id_equal
    return if params.dig(:applicant_schools, :school_type_id).blank?

    @records = if records.is_a?(Class)
                 ApplicantSchool.where(value.query)
               else
                 records.or(ApplicantSchool.where('school_type_id = ?', params.dig(:applicant_schools, :school_type_id)))
               end
  end

  def applicant_id_equal
    return if params.dig(:applicant_schools, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 ApplicantSchool.where(value.query)
               else
                 records.or(ApplicantSchool.where('applicant_id = ?', params.dig(:applicant_schools, :applicant_id)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('applicant_schools.created_at desc')
  end

  def paginate
    @records = ApplicantSchool.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
