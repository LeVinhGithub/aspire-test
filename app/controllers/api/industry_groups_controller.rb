class Api::IndustryGroupsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @industry_groups = IndustryGroupService::Index.new(params.permit!).execute
    @total_pages = @industry_groups.total_pages
  end
end
