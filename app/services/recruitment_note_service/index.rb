# rubocop:disable Style/ClassAndModuleChildren
class RecruitmentNoteService::Index
  attr_accessor :params, :records, :query

  def initialize(params, _current_user = nil)
    @params = params
    @records = RecruitmentNote
  end

  def execute
    applicant_id_equal

    company_id_equal

    note_start_with

    order

    paginate
  end

  def applicant_id_equal
    return if params.dig(:recruitment_notes, :applicant_id).blank?

    @records = RecruitmentNote.where('applicant_id = ?', params.dig(:recruitment_notes, :applicant_id))
  end

  def company_id_equal
    return if params.dig(:recruitment_notes, :company_id).blank?

    @records = if records.is_a?(Class)
                 RecruitmentNote.where(value.query)
               else
                 records.or(RecruitmentNote.where('company_id = ?', params.dig(:recruitment_notes, :company_id)))
               end
  end

  def note_start_with
    return if params.dig(:recruitment_notes, :note).blank?

    @records = if records.is_a?(Class)
                 RecruitmentNote.where(value.query)
               else
                 records.or(RecruitmentNote.where('note like ?', "%#{params.dig(:recruitment_notes, :note)}"))
               end
  end

  def order
    return if records.blank?

    @records = records.order('recruitment_notes.created_at desc')
  end

  def paginate
    @records = RecruitmentNote.none if records.blank? || records.is_a?(Class)
    @records = records.page(params.dig(:pagination_page) || 1).per(params.dig(:pagination_limit) || 20)
  end
end
# rubocop:enable Style/ClassAndModuleChildren
