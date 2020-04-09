class AddClubToComments < ActiveRecord::Migration[6.0]
  def change
    add_reference :comments, :club, null: false, foreign_key: true
  end
end
