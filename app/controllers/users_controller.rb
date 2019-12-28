class UsersController < ApplicationController
  def index
  end

  def show
  end

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def new
  end

  def create
    @user = User.create(user_params)

    if @user.valid?
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def update
  end

  def user_params
    params.require(:user).permit(:username, :bio, :avatar, :password)
  end
end
