class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :s_name
      t.string :s_address1
      t.string :s_address2
      t.string :s_city
      t.string :s_state
      t.string :s_country
      t.string :s_pincode
      t.string :s_mobile
      t.string :s_email
      t.integer :cart_id
      t.integer :store_id
      t.string :txn
      t.string :status
      t.string :pay_type
      t.float :discount_amt
      t.float :shipping_amt
      t.float :sub_total
      t.float :grand_total

      t.timestamps
    end
  end
end
