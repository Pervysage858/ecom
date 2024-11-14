class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.boolean :status
      t.string :title
      t.string :mobile_no
      t.string :currency
      t.string :description
      t.boolean :ask_address
      t.integer :user_id

      t.timestamps 
    end
  end
end
