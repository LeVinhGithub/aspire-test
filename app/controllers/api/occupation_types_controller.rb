class Api::OccupationTypesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @occupation_types = OccupationTypeService::Index.new(params.permit!).execute
    @total_pages = @occupation_types.total_pages
  end
end
