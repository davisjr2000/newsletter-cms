class Api::NewslettersController < Api::BaseController
    def index
        @newsletters = Newsletter.all
        render json: @newsletters
    end

    def show
        @newsletter = Newsletter.find(params[:id])
        render json: @newsletter, include: :stories
    end

    def create
        @newsletter = Newsletter.new(story_params)
        if @newsletter.save
          render json: @newsletter, include: :stories, status: :created
        else
          render json: { errors: @newsletter.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @newsletter = Newsletter.find(params[:id])
        if @newsletter.update(story_params)
          render json: @newsletter, include: :stories, status: 200
        else
          render json: { errors: @newsletter.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def destroy
        @newsletter = Newsletter.find(params[:id])
        @newsletter.destroy
        head :no_content
    end

    private

    def story_params
        params.require(:newsletter).permit(:html, :publication_date)
    end
  end
