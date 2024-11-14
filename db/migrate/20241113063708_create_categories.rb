class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.integer :store_id
      t.integer :user_id
      t.string :title
      t.boolean :status
      t.integer :sequence
      t.integer :parent_id

      t.timestamps
    end
  end
end
