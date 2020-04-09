class RemoveClubFromComments < ActiveRecord::Migration[6.0]
  def change
    remove_reference :comments, :club, null: false, foreign_key: true
  end
end
