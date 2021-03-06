# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_05_210754) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clubs", force: :cascade do |t|
    t.string "google_id"
    t.string "rules"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.string "name"
    t.string "read_by"
    t.string "next_book_up"
  end

  create_table "clubs_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "club_id", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.bigint "club_id", null: false
    t.string "username"
    t.index ["club_id"], name: "index_comments_on_club_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "subcomments", force: :cascade do |t|
    t.string "text"
    t.integer "user_id"
    t.string "username"
    t.bigint "comment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comment_id"], name: "index_subcomments_on_comment_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "clubs"
  add_foreign_key "comments", "users"
  add_foreign_key "subcomments", "comments"
end
