class CreateClubs < ActiveRecord::Migration[6.0]
  def change
    create_table :clubs do |t|
      t.string :google_id
      t.string :rules

      t.timestamps
    end
  end
end
