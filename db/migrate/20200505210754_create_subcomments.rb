class CreateSubcomments < ActiveRecord::Migration[6.0]
  def change
    create_table :subcomments do |t|
      t.string :text
      t.integer :user_id
      t.string :username
      t.references :comment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
