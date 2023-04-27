class Api::IncomeRangesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @income_ranges = IncomeRangeService::Index.new(params.permit!).execute
    @total_pages = @income_ranges.total_pages
  end
end
