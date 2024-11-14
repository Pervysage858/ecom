class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :user_id 
      t.integer :category_id
      t.string :title
      t.string :seo_name
      t.boolean :status
      t.boolean :qty_option
      t.integer :qty_per_sale
      t.string :unit
      t.text :description
      t.text :link

      t.timestamps
    end
  end
end
