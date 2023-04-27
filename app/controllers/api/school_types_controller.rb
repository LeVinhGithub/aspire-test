class Api::SchoolTypesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @school_types = SchoolTypeService::Index.new(params.permit!).execute
    @total_pages = @school_types.total_pages
  end
end
