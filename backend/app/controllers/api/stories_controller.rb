class Api::StoriesController < Api::BaseController  
    def index
        @stories = Story.all
        render json: @stories
    end

    def show
        @story = Story.find(params[:id])
        render json: @story
    end

    def create
      @story = Story.new(story_params)
      if @story.save
        @story.add_newsletter
        render json: @story, status: :created
      else
        render json: { errors: @story.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def update
        @story = Story.find(params[:id])
        if @story.update(story_params)
          render json: @story, status: 200
        else
          render json: { errors: @story.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def destroy
        @story = Story.find(params[:id])
        @story.destroy
        head :no_content
    end

    private

    def story_params
        params.require(:story).permit(:title, :html, :tag, :publication_date)
    end
  end