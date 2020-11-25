module Lyra
    class NewsletterService
        def initialize(newsletter)
            @newsletter = newsletter
            @base_url = "https://lyra-api.herokuapp.com/api"
            @headers = { 
                Authorization: "Bearer 1Z76RMDYPhhy296dyYpYkYyL"
            }
        end

        def set_html_for_lyra
            html = "<h1 style=\"font-size: 30px; margin-bottom: 30px; border-bottom: 1px solid grey; font-weight: bold\">#{@newsletter.html}</h1>"
            @newsletter.reload.stories.each do |story|
                html += story.html_to_lyra
            end
            return html
        end

        def create
            request = HTTParty.post(
                "#{@base_url}/newsletters", 
                headers: @headers,
                body: {
                    html: set_html_for_lyra,
                    date: Date.strptime(@newsletter.publication_date,"%m/%d/%Y")
                }
            )
            @newsletter.lyra_id = request["data"]["id"]
            @newsletter.save
        end

        def update 
            request = HTTParty.patch(
                "#{@base_url}/newsletters/#{@newsletter.lyra_id}", 
                headers: @headers,
                body: {
                    html: set_html_for_lyra,
                    date: Date.strptime(@newsletter.publication_date,"%m/%d/%Y")
                }
            )
        end

        def destroy
            request = HTTParty.delete(
                "#{@base_url}/newsletters/#{@newsletter.lyra_id}", 
                headers: @headers,
            )
        end
    end
end