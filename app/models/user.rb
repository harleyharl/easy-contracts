class User < ApplicationRecord
  has_many :user_contracts
  has_many :contracts, through: :user_contracts
end
