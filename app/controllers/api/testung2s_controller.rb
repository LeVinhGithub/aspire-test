module Api
  class Testung2sController < Api::BaseController
    # jitera-anchor-dont-touch: before_action_filter

    # jitera-index-anchor-dont-touch: actions
    def index
      @testung2s = Testung2sService::Index.new(params.to_unsafe_h, current_user).execute
      @total_pages = @testung2s.total_pages
    end

    # jitera-show-anchor-dont-touch: actions
    def show
      @testung2 = Testung2.find(params[:id])
      # show-authorization-code
    end

    # jitera-create-anchor-dont-touch: actions
    def create
      @testung2 = Testung2.new(create_params)
      # create-authorization-code
      return if @testung2.save

      @error_object = @testung2.errors.full_messages
      render status: :unprocessable_entity
    end

    # jitera-update-anchor-dont-touch: actions
    def update
      @testung2 = Testung2.find(params[:id])
      # update-authorization-code
      return if @testung2.update(update_params)

      @error_object = @testung2.errors.full_messages
      render status: :unprocessable_entity
    end

    # jitera-destroy-anchor-dont-touch: actions
    def destroy
      @testung2 = Testung2.find(params[:id])
      # destroy-authorization-code
      if @testung2.destroy
        head :ok
      else
        head :unprocessable_entity
      end
    end

    # jitera-anchor-dont-touch: actions

    private

    def update_params
      params.require(:testung2s).permit(:testing1_id, :email)
    end

    def create_params
      params.require(:testung2s).permit(:testing1_id, :email)
    end
  end
end
