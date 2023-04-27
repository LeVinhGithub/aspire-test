class Api::PassiveSmokingCountermeasuresController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @passive_smoking_countermeasures = PassiveSmokingCountermeasureService::Index.new(params.permit!).execute
    @total_pages = @passive_smoking_countermeasures.total_pages
  end
end
