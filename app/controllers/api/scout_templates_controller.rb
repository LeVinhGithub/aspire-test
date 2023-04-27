class Api::ScoutTemplatesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @scout_templates = ScoutTemplateService::Index.new(params.permit!).execute
    @total_pages = @scout_templates.total_pages
  end

  def show
    @scout_template = ScoutTemplate.find_by!('scout_templates.id = ?', params[:id])
  end

  def create
    @scout_template = ScoutTemplate.new(create_params)
    return if @scout_template.save

    @error_object = @scout_template.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:scout_templates).permit(:title, :template_text, :company_id)
  end

  def update
    @scout_template = ScoutTemplate.find_by('scout_templates.id = ?', params[:id])
    raise ActiveRecord::RecordNotFound if @scout_template.blank?

    return if @scout_template.update(update_params)

    @error_object = @scout_template.errors.messages

    render status: :unprocessable_entity
  end

  def update_params
    params.require(:scout_templates).permit(:title, :template_text, :company_id)
  end

  def destroy
    @scout_template = ScoutTemplate.find_by('scout_templates.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @scout_template.blank?

    if @scout_template.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
