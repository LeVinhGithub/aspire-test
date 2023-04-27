# rubocop:disable Layout/LineLength
# rubocop:disable Style/ClassAndModuleChildren
class PassiveSmokingCountermeasureService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = PassiveSmokingCountermeasure
  end

  def execute
    name_start_with

    order

    paginate
  end

  def name_start_with
    return if params.dig(:passive_smoking_countermeasures, :name).blank?

    @records = PassiveSmokingCountermeasure.where('name like ?', "%#{params.dig(:passive_smoking_countermeasures, :name)}")
  end

  def order
    return if records.blank?

    @records = records.order('passive_smoking_countermeasures.created_at desc')
  end

  def paginate
    @records = PassiveSmokingCountermeasure.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Style/ClassAndModuleChildren
