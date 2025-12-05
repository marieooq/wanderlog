class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.string :title
      t.string :city
      t.string :country
      t.string :category
      t.string :image_url
      t.text :description
      t.boolean :is_favorite

      t.timestamps
    end
  end
end
