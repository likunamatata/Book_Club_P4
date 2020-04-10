class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:update, :destroy]

  # GET /users
  def index
    @clubs = Club.all

    render json: @clubs
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({user_id: @user.id, username: @user.username});
      render json: {user: @user.frontend_data, token: @token}, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  def add_club
    @club = Club.new(club_params)
    @user = User.find(@current_user.id)
    @user.clubs << @club

    render json: @user, include: :clubs
  end

  def show_clubs
    @user = User.find(params[:user_id])
    @user_clubs = @user.clubs

    render json: @user_clubs
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def club_params
      params.require(:club).permit(:google_id, :rules)
    end

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end

def current_user
  @current_user = User.find(session[:user_id]) if session[:user_id]
 end

end
