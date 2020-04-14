class AddNameToClubs < ActiveRecord::Migration[6.0]
  def change
    add_column :clubs, :name, :string
  end
end
