class AddPublishDateAndTagToStories < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :publication_date, :string
    add_column :stories, :tag, :string
  end
end
