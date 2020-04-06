class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by_username(login_params[:username])
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(user_id: @user.frontend_data, username: @user.username)
      render json: { user: @user, token: token }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user.frontend_data, status: :ok
  end


  private

  def login_params
    params.require(:auth).permit(:username, :password)
  end

end
