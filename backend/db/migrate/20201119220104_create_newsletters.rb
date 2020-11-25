class CreateNewsletters < ActiveRecord::Migration[5.2]
  def change
    create_table :newsletters do |t|
      t.text :html
      t.string :lyra_id
      t.string :publication_date

      t.timestamps
    end
  end
end
