class UserSerializer < ActiveModel::Serializer
  attributes :user
  # :jwt
  # has_many :contracts

  def user
    {username: self.object.username,
     avatar: self.object.avatar,
     bio: self.object.bio
    }
  end
end
