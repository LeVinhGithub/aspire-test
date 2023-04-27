class Api::JobGroupsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @job_groups = JobGroupService::Index.new(params.permit!).execute
    @total_pages = @job_groups.total_pages
  end
end
