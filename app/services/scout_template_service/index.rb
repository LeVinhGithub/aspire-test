# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class ScoutTemplateService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = ScoutTemplate
  end

  def execute
    title_start_with

    template_text_start_with

    company_id_equal

    order

    paginate
  end

  def title_start_with
    return if params.dig(:scout_templates, :title).blank?

    @records = ScoutTemplate.where('title like ?', "%#{params.dig(:scout_templates, :title)}")
  end

  def template_text_start_with
    return if params.dig(:scout_templates, :template_text).blank?

    @records = if records.is_a?(Class)
                 ScoutTemplate.where(value.query)
               else
                 records.or(ScoutTemplate.where('template_text like ?', "%#{params.dig(:scout_templates, :template_text)}"))
               end
  end

  def company_id_equal
    return if params.dig(:scout_templates, :company_id).blank?

    @records = if records.is_a?(Class)
                 ScoutTemplate.where(value.query)
               else
                 records.or(ScoutTemplate.where('company_id = ?', params.dig(:scout_templates, :company_id)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('scout_templates.created_at desc')
  end

  def paginate
    @records = ScoutTemplate.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
