class AddUserIdToClubs < ActiveRecord::Migration[6.0]
  def change
    add_column :clubs, :user_id, :int
  end
end
