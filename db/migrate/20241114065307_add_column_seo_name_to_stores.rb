class AddColumnSeoNameToStores < ActiveRecord::Migration[5.2]
  def change
    add_column :stores, :seo_name, :string
  end
end
