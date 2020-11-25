class AddNewsletterToStories < ActiveRecord::Migration[5.2]
  def change
    add_reference :stories, :newsletter, foreign_key: true
  end
end
