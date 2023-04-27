class Api::EmploymentStatusesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @employment_statuses = EmploymentStatusService::Index.new(params.permit!).execute
    @total_pages = @employment_statuses.total_pages
  end
end
