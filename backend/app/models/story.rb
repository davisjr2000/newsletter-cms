class Story < ApplicationRecord
    belongs_to :newsletter, optional: true
    validates :tag, :title, :html, presence: true
    after_create :sync_to_lyra
    after_update :update_to_lyra
    after_destroy :delete_on_lyra

    def add_newsletter
        existing_newsletter = Newsletter.find_by(publication_date: self.publication_date)
        if existing_newsletter 
            self.newsletter = existing_newsletter
        else
            new_newsletter = Newsletter.new(publication_date: self.publication_date)
            new_newsletter.stories << self
            self.newsletter = new_newsletter
        end
        self.save
    end

    def sync_to_lyra
        lyra_story = Lyra::StoryService.new(self)
        lyra_story.create
    end

    def update_to_lyra
        lyra_story = Lyra::StoryService.new(self)
        lyra_story.update
    end

    def delete_on_lyra
        lyra_story = Lyra::StoryService.new(self)
        lyra_story.destroy
    end

    def html_to_lyra
        parsed_html = "<table width='100%' cellpadding='0' cellspacing='0' border='0' style='border-collapse: collapse;'>
        <tr>
          <td class='section body-copy'>
            <table width='100%' cellpadding='0' cellspacing='0' border='0' style='border-collapse: collapse;'>
              <tr>
                <td class='tag-outer'>
                  <table align='left' cellpadding='0' cellspacing='0' border='0'
                    style='display: inline-block; border-collapse: collapse;'>
                    <tr>
                      <td class='tag-inner' style='color: #ffffff;'>#{tag}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
        
            <h1 style='font-size: 35px'>
              <font color='#000000'>#{title}</font>
            </h1>
            #{html}
            <p class='p_btn-social'>
              <a href='https://www.facebook.com' target='_blank'>
                <img src='https://img.createsend1.com/ei/j/30/B40/C56/csimport/facebook_icon.png' style='display: inline;max-width:20px' width='20' alt=''>
              </a>&nbsp;&nbsp;
              <a href='https://www.twitter.com' target='_blank'>
              <img src='https://img.createsend1.com/ei/j/30/B40/C56/csimport/twitter_icon.png' style='display: inline;max-width:20px' width='20' alt=''></a>&nbsp;&nbsp;
              <a href='https://www.linkedin.com' target='_blank'><img
                  src='https://img.createsend1.com/ei/j/30/B40/C56/csimport/linkedin_icon.png'
                  style='display: inline;max-width:20px' width='20' alt=''></a>&nbsp;&nbsp;
              <a href='mailto:?subject=Check%20out%20this%20story%20from%20Morning%20Brew!&amp;body=www.morningbrew.com%0A%0AWant%20more%20great%20content%3F%20Subscribe%20to%20Morning%20Brew%27s%20daily%20newsletter%20for%20all%20the%20latest%20news%20from%20Wall%20Street%20to%20Silicon%20Valley%20%40%20www.morningbrew.com.'
                target='_blank'><img src='https://img.createsend1.com/ei/j/30/B40/C56/csimport/mail_icon.png'
                  style='display: inline;max-width:20px' width='20' alt=''></a>
            </p>
          </td>
        </tr>
        </table>"
        document = Roadie::Document.new(parsed_html)
        document.add_css(LYRA_CSS)
        return document.transform  
    end

    LYRA_CSS =
        "  table {
            border-collapse: collapse;
            table-layout: fixed;
            margin: 0 auto;
          }
        
          .p_btn-social a {
            border: none;
          }
        
          table table table {
            table-layout: auto;
          }
        
          .container {
            width: 100%;
            max-width: 585px;
            margin: 0 auto;
          }
        
          .section {
            padding-top: 5px;
            padding-right: 20px;
            padding-left: 20px;
            text-align: left;
          }
        
          h1 {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 22px;
            font-weight: 600;
            color: #000000;
            margin-bottom: 15px;
            margin-top: 5px !important;
          }
        
          h2 {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #000000;
            margin: 0;
          }
        
          h3 {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 26px;
            color: #000000;
            font-weight: 200;
            letter-spacing: 2px;
            margin: 0;
            padding: 0;
          }
        
          h3 span {
            font-weight: 800;
            color: #005ab6;
          }
        
          h4 {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 18px !important;
            color: #005ab6;
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 0;
          }
        
          .body-copy {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 16px;
            color: #252525;
          }
        
          .body-copy p {
            margin-top: 15px;
            margin-bottom: 15px;
            line-height: 22px;
          }
        
          .body-copy li {
            margin-top: 8px;
            margin-bottom: 8px;
            line-height: 22px;
          }
        
          .link {
            border-bottom: 2px solid #005ab6;
            text-decoration: none;
            color: #252525;
          }
        
          a {
            border-bottom: 2px solid #005ab6;
            text-decoration: none;
            color: #252525;
          }
        
          .link-blue {
            color: #005ab6;
            text-decoration: none;
            font-weight: bold;
          }
        
          .divider {
            font-size: 1px;
            margin-top: 8px;
            margin-bottom: 8px;
          }
        
          .ticker-border {
            padding: 8px;
            border-bottom: 2px solid #cccccc;
          }
        
          .tag-outer {
            padding-bottom: 10px;
          }
        
          .tag-inner {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 15px;
            font-weight: bold;
            color: #252525;
            background-color: #f0b041;
            padding: 3px 10px;
          }
        
          .tag-inner-sponsored {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 15px;
            font-weight: bold;
            color: #252525;
            background-color: #005ab6;
            padding: 3px 10px;
          }
        
          .header {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 13px;
            color: #252525;
            padding-top: 0;
            padding-bottom: 30px;
          }
        
          .logo-margin {
            margin-top: 30px;
            margin-bottom: 20px;
          }
        
          .sponsor {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 13px;
            color: #252525;
            padding-right: 8px;
          }
        
          .sponsor-2 {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 13px;
            color: #252525;
            font-weight: bold;
            padding-right: 8px;
          }
        
          .p-first {
            margin-top: 25px;
          }
        
          .p-last {
            margin-bottom: 25px;
          }
        
          .p-quote {
            font-style: italic;
          }
        
          .btn-white {
            display: inline-block;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 15px;
            color: #005ab6;
            font-weight: bold;
            text-decoration: none;
            padding: 8px;
            border: 2px solid #005ab6;
          }
        
          .btn-blue-ctn {
            display: inline-block;
            background-color: #005ab6;
            padding: 4px;
          }
        
          .btn-blue {
            display: inline-block;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 15px;
            color: #ffffff;
            background-color: #005ab6;
            font-weight: bold;
            text-decoration: none;
            padding: 4px 18px;
            border: 2px solid #ffffff;
          }
        
          .block-link {
            color: #005ab6;
            font-weight: bold;
            text-decoration: underline;
          }
        
          .col-2-1 {
            width: 75px;
          }
        
          .col-2-2 {
            padding-left: 25px;
            vertical-align: middle;
          }
        
          .p_btn-social {
            margin-top: 25px;
            margin-bottom: 0;
          }
        
          .bold {
            font-weight: bold;
            color: #000000;
          }
        
          strong {
            color: #000000;
          }
        
          .col-3-1 {
            width: 53px;
            padding-right: 25px;
          }
        
          .col-3-2 {
            width: 154px;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 22px;
            color: #252525;
            font-weight: bold;
            text-align: left;
          }
        
          .col-3-3 {
            text-align: left;
            font-weight: normal;
          }
        
          .col-3-3 p {
            margin-top: 0;
          }
        
          .stb-header {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 18px;
            color: #ffffff;
            font-weight: 600;
            text-align: center;
          }
        
          .stb-ref-count {
            font-family: Arial, sans-serif;
            font-size: 18px;
            color: #005ab6;
            background-color: #ffffff;
            border-radius: 100%;
            width: 50px;
            height: 50px;
            text-align: center;
          }
        
          .center {
            margin: 0 auto;
            text-align: center;
          }
        
          .stb-btn {
            width: 100%;
            max-width: 150px;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 16px;
            color: #ffffff;
            font-weight: 900;
            text-decoration: none;
            text-align: center;
            background-color: #005ab6;
            padding: 15px;
            border-radius: 4px;
            display: block;
            margin: 0 auto;
          }
        
          .social-banner-ctn {
            padding: 15px;
            text-align: center;
            border-top: 15px solid #ffffff;
          }
         "
end
