class CreateJoinTableUserClub < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :clubs do |t|
      # t.index [:user_id, :club_id]
      # t.index [:club_id, :user_id]
    end
  end
end
