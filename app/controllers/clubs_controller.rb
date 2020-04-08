class ClubsController < ApplicationController
  before_action :set_club, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [ :create, :update, :destroy, :add_user]

  # GET /clubs
  def index
    #not all clubs, just the clubs that correspond to 
    @user = User.find(params[:user_id])
    @clubs = @user.clubs

    render json: @clubs
  end

  # GET /clubs/1
  def show
    render json: @club
  end

  # POST /clubs
  def create
    puts "create is running with #{club_params}"
    @club = Club.new(club_params)
    # user that is logged in
    @user = User.find(params[:user_id])
    puts "hello #{@user}"
    # User.find(22)

    if @club.save
      @club.users << @user
      render json: @club, status: :created, location: @clubs
    else
      render json: @club.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clubs/1
  def update
    if @club.update(club_params)
      render json: @club
    else
      render json: @club.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clubs/1
  def destroy
    @club.destroy
  end

  def add_user
    @club = Club.find(params[:club_id])
    @user = User.find(params[:user_id])
    @club.users << @user

    render json: @club, include: :users
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_club
      @club = Club.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def club_params
      params.require(:club).permit(:google_id, :rules)
    end
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
