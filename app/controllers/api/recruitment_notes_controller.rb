class Api::RecruitmentNotesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @recruitment_notes = RecruitmentNoteService::Index.new(params.permit!).execute
    @total_pages = @recruitment_notes.total_pages
  end

  def create
    @recruitment_note = RecruitmentNote.new(create_params)
    return if @recruitment_note.save

    @error_object = @recruitment_note.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:recruitment_notes).permit(:applicant_id, :company_id, :note)
  end

  def update
    @recruitment_note = RecruitmentNote.find_by('recruitment_notes.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @recruitment_note.blank?

    return if @recruitment_note.update(update_params)

    @error_object = @recruitment_note.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:recruitment_notes).permit(:applicant_id, :company_id, :note)
  end
end
