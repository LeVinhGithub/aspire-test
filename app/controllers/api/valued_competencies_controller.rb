class Api::ValuedCompetenciesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @valued_competencies = ValuedCompetencyService::Index.new(params.permit!).execute
    @total_pages = @valued_competencies.total_pages
  end
end
