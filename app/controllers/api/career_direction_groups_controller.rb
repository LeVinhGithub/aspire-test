class Api::CareerDirectionGroupsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @career_direction_groups = CareerDirectionGroupService::Index.new(params.permit!).execute
    @total_pages = @career_direction_groups.total_pages
  end
end
