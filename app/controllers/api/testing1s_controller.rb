module Api
  class Testing1sController < Api::BaseController
    # jitera-anchor-dont-touch: before_action_filter

    # jitera-index-anchor-dont-touch: actions
    def index
      @testing1s = Testing1sService::Index.new(params.to_unsafe_h, current_user).execute
      @total_pages = @testing1s.total_pages
    end

    # jitera-show-anchor-dont-touch: actions
    def show
      @testing1 = Testing1.find(params[:id])
      # show-authorization-code
    end

    # jitera-create-anchor-dont-touch: actions
    def create
      @testing1 = Testing1.new(create_params)
      # create-authorization-code
      return if @testing1.save

      @error_object = @testing1.errors.full_messages
      render status: :unprocessable_entity
    end

    # jitera-update-anchor-dont-touch: actions
    def update
      @testing1 = Testing1.find(params[:id])
      # update-authorization-code
      return if @testing1.update(update_params)

      @error_object = @testing1.errors.full_messages
      render status: :unprocessable_entity
    end

    # jitera-destroy-anchor-dont-touch: actions
    def destroy
      @testing1 = Testing1.find(params[:id])
      # destroy-authorization-code
      if @testing1.destroy
        head :ok
      else
        head :unprocessable_entity
      end
    end

    # jitera-anchor-dont-touch: actions

    private

    def update_params
      params.require(:testing1s).permit(:cstring, :stext, :cint, :cfloat, :cdate, :cdatetime, :cenump, :c, :cfile,
                                        :testung2s_count)
    end

    def create_params
      params.require(:testing1s).permit(:cstring, :stext, :cint, :cfloat, :cdate, :cdatetime, :cenump, :c, :cfile,
                                        :testung2s_count)
    end
  end
end
