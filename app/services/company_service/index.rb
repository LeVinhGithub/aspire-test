# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class CompanyService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = Company
  end

  def execute
    name_start_with

    logo_start_with

    location_start_with

    launched_year_start_with

    business_details_start_with

    number_of_employees_equal

    industry_id_equal

    mission_start_with

    vision_start_with

    value_start_with

    representative_photo_start_with

    representative_profile_start_with

    listing_classification_start_with

    representative_name_start_with

    slug_start_with

    restrictions_company_id_equal

    messages_applicant_id_equal

    messages_text_start_with

    messages_reply_to_message_id_equal

    messages_applicant_id_equal_19

    messages_text_start_with_20

    messages_reply_to_message_id_equal_21

    capital_start_with

    order

    paginate
  end

  def name_start_with
    return if params.dig(:companies, :name).blank?

    @records = Company.where('name like ?', "%#{params.dig(:companies, :name)}")
  end

  def logo_start_with
    return if params.dig(:companies, :logo).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('logo like ?', "%#{params.dig(:companies, :logo)}"))
               end
  end

  def location_start_with
    return if params.dig(:companies, :location).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('location like ?', "%#{params.dig(:companies, :location)}"))
               end
  end

  def launched_year_start_with
    return if params.dig(:companies, :year_founded).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('launched_year like ?', "%#{params.dig(:companies, :year_founded)}"))
               end
  end

  def business_details_start_with
    return if params.dig(:companies, :business_details).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('business_details like ?', "%#{params.dig(:companies, :business_details)}"))
               end
  end

  def number_of_employees_equal
    return if params.dig(:companies, :number_of_employees).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('number_of_employees = ?', params.dig(:companies, :number_of_employees)))
               end
  end

  def industry_id_equal
    return if params.dig(:companies, :industry_id).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('industry_id = ?', params.dig(:companies, :industry_id)))
               end
  end

  def mission_start_with
    return if params.dig(:companies, :mission).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('mission like ?', "%#{params.dig(:companies, :mission)}"))
               end
  end

  def vision_start_with
    return if params.dig(:companies, :vision).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('vision like ?', "%#{params.dig(:companies, :vision)}"))
               end
  end

  def value_start_with
    return if params.dig(:companies, :value).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('value like ?', "%#{params.dig(:companies, :value)}"))
               end
  end

  def representative_photo_start_with
    return if params.dig(:companies, :representative_photo).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('representative_photo like ?', "%#{params.dig(:companies, :representative_photo)}"))
               end
  end

  def representative_profile_start_with
    return if params.dig(:companies, :representative_profile).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('representative_profile like ?', "%#{params.dig(:companies, :representative_profile)}"))
               end
  end

  def listing_classification_start_with
    return if params.dig(:companies, :ipo).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('listing_classification like ?', "%#{params.dig(:companies, :ipo)}"))
               end
  end

  def representative_name_start_with
    return if params.dig(:companies, :representative_name).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('representative_name like ?', "%#{params.dig(:companies, :representative_name)}"))
               end
  end

  def slug_start_with
    return if params.dig(:companies, :slug).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('slug like ?', "%#{params.dig(:companies, :slug)}"))
               end
  end

  def restrictions_company_id_equal
    return if params.dig(:restrictions, :company_id).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('restrictions.company_id = ?', params.dig(:restrictions, :company_id)))
               end
  end

  def messages_applicant_id_equal
    return if params.dig(:messages, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('messages.applicant_id = ?', params.dig(:messages, :applicant_id)))
               end
  end

  def messages_text_start_with
    return if params.dig(:messages, :text).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('messages.text like ?', "%#{params.dig(:messages, :text)}"))
               end
  end

  def messages_reply_to_message_id_equal
    return if params.dig(:messages, :reply_to_message_id).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('messages.reply_to_message_id = ?', params.dig(:messages, :reply_to_message_id)))
               end
  end

  def messages_applicant_id_equal_19
    return if params.dig(:messages, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('messages.applicant_id = ?', params.dig(:messages, :applicant_id)))
               end
  end

  def messages_text_start_with_20
    return if params.dig(:messages, :text).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('messages.text like ?', "%#{params.dig(:messages, :text)}"))
               end
  end

  def messages_reply_to_message_id_equal_21
    return if params.dig(:messages, :reply_to_message_id).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('messages.reply_to_message_id = ?', params.dig(:messages, :reply_to_message_id)))
               end
  end

  def capital_start_with
    return if params.dig(:companies, :capital).blank?

    @records = if records.is_a?(Class)
                 Company.where(value.query)
               else
                 records.or(Company.where('capital like ?', "%#{params.dig(:companies, :capital)}"))
               end
  end

  def order
    return if records.blank?

    @records = records.order('companies.created_at desc')
  end

  def paginate
    @records = Company.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
