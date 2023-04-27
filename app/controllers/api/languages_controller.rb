class Api::LanguagesController < Api::BaseController
  def index
    # inside service params are checked and whiteisted
    @languages = LanguageService::Index.new(params.permit!).execute
    @total_pages = @languages.total_pages
  end
end
