class SubcommentsController < ApplicationController
   # GET /comments
   def index
    @subcomments = Subcomment.where(comment_id: params[:comment_id])

    render json: @subcomments
  end


  # POST /comments
  def create
    # @subcomment = Subcomment.new(
    #   text: params[:text],
    #   user_id: params[:user_id],
    #   comment_id: params[:comment_id],
    #   username: params[:username]
    #   )

    @comment = Comment.find(params[:comment_id])
    @subcomment = @comment.subcomments.create(subcomment_params)
   
    # if @subcomment.save
    #   render json: @subcomment, status: :created, location: @subcomment
    # else
    #   render json: @subcomment.errors, status: :unprocessable_entity
    # end
  end


  # DELETE /comments/1
  def destroy
    @subcomment.destroy
  end

  private

    # Only allow a trusted parameter "white list" through.
    def subcomment_params
      params.require(:subcomment).permit(:text, :user_id, :username, :comment_id)
    end
end
