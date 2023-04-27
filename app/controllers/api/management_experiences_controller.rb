class Api::ManagementExperiencesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @management_experiences = ManagementExperienceService::Index.new(params.permit!).execute
    @total_pages = @management_experiences.total_pages
  end
end
