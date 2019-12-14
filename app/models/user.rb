class User < ApplicationRecord
  has_secure_password
  has_many :user_contracts
  has_many :contracts, through: :user_contracts
end
