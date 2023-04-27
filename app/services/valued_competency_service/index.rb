# rubocop:disable Style/ClassAndModuleChildren
class ValuedCompetencyService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = ValuedCompetency
  end

  def execute
    name_start_with

    order

    paginate
  end

  def name_start_with
    return if params.dig(:valued_competencies, :name).blank?

    @records = ValuedCompetency.where('name like ?', "%#{params.dig(:valued_competencies, :name)}")
  end

  def order
    return if records.blank?

    @records = records.order('valued_competencies.created_at desc')
  end

  def paginate
    @records = ValuedCompetency.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
