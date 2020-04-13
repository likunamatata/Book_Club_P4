class AddReadByToClubs < ActiveRecord::Migration[6.0]
  def change
    add_column :clubs, :read_by, :string
  end
end
