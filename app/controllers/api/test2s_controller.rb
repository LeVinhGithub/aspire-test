module Api
  class Test2sController < Api::BaseController
    # jitera-anchor-dont-touch: before_action_filter

    # jitera-index-anchor-dont-touch: actions
    def index
      @test2s = Test2sService::Index.new(params.to_unsafe_h, current_user).execute
      @total_pages = @test2s.total_pages
    end

    # jitera-show-anchor-dont-touch: actions
    def show
      @test2 = Test2.find(params[:id])
      # show-authorization-code
    end

    # jitera-create-anchor-dont-touch: actions
    def create
      @test2 = Test2.new(create_params)
      # create-authorization-code
      return if @test2.save

      @error_object = @test2.errors.full_messages
      render status: :unprocessable_entity
    end

    # jitera-update-anchor-dont-touch: actions
    def update
      @test2 = Test2.find(params[:id])
      # update-authorization-code
      return if @test2.update(update_params)

      @error_object = @test2.errors.full_messages
      render status: :unprocessable_entity
    end

    # jitera-destroy-anchor-dont-touch: actions
    def destroy
      @test2 = Test2.find(params[:id])
      # destroy-authorization-code
      if @test2.destroy
        head :ok
      else
        head :unprocessable_entity
      end
    end

    # jitera-anchor-dont-touch: actions

    private

    def update_params
      params.require(:test2s).permit(:user_id, :email)
    end

    def create_params
      params.require(:test2s).permit(:user_id, :email)
    end
  end
end
