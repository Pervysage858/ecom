class Store < ApplicationRecord
  belogs_to :user
  has_many :products
    
end
