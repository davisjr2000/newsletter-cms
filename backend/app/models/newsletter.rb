class Newsletter < ApplicationRecord
    has_many :stories, dependent: :destroy

    validates :publication_date, uniqueness: true
    validates :html, presence: true

    before_validation :fill_html, on: :create

    after_create :sync_to_lyra
    after_update :update_to_lyra
    after_destroy :delete_on_lyra

    def fill_html
      self.html = "<h3>Your Morning Brew: #{publication_date} issue</h3>" if html.nil?
    end

    def sync_to_lyra
        lyra_newsletter = Lyra::NewsletterService.new(self)
        lyra_newsletter.create
    end

    def update_to_lyra
        lyra_newsletter = Lyra::NewsletterService.new(self)
        lyra_newsletter.update
    end

    def delete_on_lyra
        lyra_newsletter = Lyra::NewsletterService.new(self)
        lyra_newsletter.destroy
    end
end
