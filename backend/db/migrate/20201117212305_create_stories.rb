class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :lyra_id
      t.text :html

      t.timestamps
    end
  end
end
