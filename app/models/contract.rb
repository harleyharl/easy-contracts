class Contract < ApplicationRecord
  has_many :user_contracts
  has_many :users, through: :user_contracts
end
