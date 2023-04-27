class Api::SkillsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @skills = SkillService::Index.new(params.permit!).execute
    @total_pages = @skills.total_pages
  end

  def create
    @skill = Skill.new(create_params)
    return if @skill.save

    @error_object = @skill.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:skills).permit(:name, :applicant_id, :skill_type)
  end

  def update
    @skill = Skill.find_by('skills.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @skill.blank?

    return if @skill.update(update_params)

    @error_object = @skill.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:skills).permit(:name, :applicant_id, :skill_type)
  end

  def destroy
    @skill = Skill.find_by('skills.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @skill.blank?

    if @skill.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
