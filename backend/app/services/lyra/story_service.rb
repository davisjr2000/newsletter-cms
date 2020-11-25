module Lyra
    class StoryService
        def initialize(story)
            @story = story
            @base_url = "https://lyra-api.herokuapp.com/api"
            @headers = { 
                Authorization: "Bearer 1Z76RMDYPhhy296dyYpYkYyL"
            }
        end

        def create
            request = HTTParty.post(
                "#{@base_url}/stories", 
                headers: @headers,
                body: {
                    html: @story.html_to_lyra,
                    title: @story.title
                }
            )
            @story.lyra_id = request["data"]["id"]
            @story.save
        end

        def update 
            request = HTTParty.patch(
                "#{@base_url}/stories/#{@story.lyra_id}", 
                headers: @headers,
                body: {
                    html: @story.html_to_lyra,
                    title: @story.title
                }
            )
            if @story.newsletter
              @story.newsletter.update_to_lyra  
            end
        end

        def destroy
            request = HTTParty.delete(
                "#{@base_url}/stories/#{@story.lyra_id}", 
                headers: @headers,
            )
        end

      
    end
end