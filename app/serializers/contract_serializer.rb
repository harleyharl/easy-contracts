class ContractSerializer < ActiveModel::Serializer
  attributes :contract
  # :jwt
  # has_many :contracts

  def contract
    {
      username: self.object.contract_name,
      avatar: self.object.project_name,
    }
  end
end
