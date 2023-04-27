class Api::LocationsController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @locations = LocationService::Index.new(params.permit!).execute
    @total_pages = @locations.total_pages
  end
end
