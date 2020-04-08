# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Club.destroy_all

User.create!([
    { username: "user1", email: "email1@gmail.com", password:"12345678"}, 
    { username: "user2", email: "email2@gmail.com", password:"12345678"}, 
    { username: "user3", email: "email3@gmail.com", password:"12345678"}
])

Club.create!([
  {google_id: "Pn8d9riSL6UC", rules: "don't be mean"},
  {google_id: "pPfVDwAAQBAJ", rules: "don't be mean"},
  {google_id: "CXyJAQAAQBAJ", rules: "don't be mean"}
])

user1 = User.first
user1.clubs.push(Club.where(google_id: "Pn8d9riSL6UC"))
user1.clubs.push(Club.where(google_id: "pPfVDwAAQBAJ"))
user1.clubs.push(Club.where(google_id: "CXyJAQAAQBAJ"))

club1 = Club.first
club1.users.push(User.where(username: "user1"))
club1.users.push(User.where(username: "user2"))
club1.users.push(User.where(username: "user3"))