class Api::TargetListApplicantsController < Api::BaseController
  def create
    @target_list_applicant = TargetListApplicant.new(create_params)
    return if @target_list_applicant.save

    @error_object = @target_list_applicant.errors.messages

    render status: :unprocessable_entity
  end

  def create_params
    params.require(:target_list_applicants).permit(:target_list_id, :applicant_id)
  end

  def destroy
    @target_list_applicant = TargetListApplicant.find_by('target_list_applicants.id = ?', params[:id])

    raise ActiveRecord::RecordNotFound if @target_list_applicant.blank?

    if @target_list_applicant.destroy
      head :ok, message: I18n.t('common.200')
    else
      head :unprocessable_entity
    end
  end
end
