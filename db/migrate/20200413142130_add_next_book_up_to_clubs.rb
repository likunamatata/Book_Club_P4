class AddNextBookUpToClubs < ActiveRecord::Migration[6.0]
  def change
    add_column :clubs, :next_book_up, :string
  end
end
