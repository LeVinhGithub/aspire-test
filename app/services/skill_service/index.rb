# rubocop:disable Style/ClassAndModuleChildren
class SkillService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = Skill
  end

  def execute
    name_start_with

    applicant_id_equal

    skill_type_equal

    order

    paginate
  end

  def name_start_with
    return if params.dig(:skills, :name).blank?

    @records = Skill.where('name like ?', "%#{params.dig(:skills, :name)}")
  end

  def applicant_id_equal
    return if params.dig(:skills, :applicant_id).blank?

    @records = if records.is_a?(Class)
                 Skill.where(value.query)
               else
                 records.or(Skill.where('applicant_id = ?', params.dig(:skills, :applicant_id)))
               end
  end

  def skill_type_equal
    return if params.dig(:skills, :skill_type).blank?

    @records = if records.is_a?(Class)
                 Skill.where(value.query)
               else
                 records.or(Skill.where('skill_type = ?', params.dig(:skills, :skill_type)))
               end
  end

  def order
    return if records.blank?

    @records = records.order('skills.created_at desc')
  end

  def paginate
    @records = Skill.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
