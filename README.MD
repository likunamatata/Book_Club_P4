# Book Club

The purpose of this app is to create an online space for private book club discussions and commentary. It is my attempt at countering one of the unfortunate side effects of the current pandemic -- erasure of common meeting spaces that are good for concentrated conversations by being simple, aesthetically pleasing, and free of distractions (like coffee shops without wifi or your favorite professor's office). The app will allow the users to register, create book clubs, invite their friends to their book clubs, and be invited to their friends' book clubs. The admin (i.e., the creator)of each club will set the current book that is being read so that they, together with other members of the club, can share commentary about the book or certain passages as they keep flipping through the pages. Each club can agree on their own rules to avoid spoilers and to shape discussions and there will be a dedicated space to list these rules. A single club will be able to have a list of multiple books to work through. For example, once the American Female Authors club is done reading Sula, the admin can update the "book of the club" to The Bell Jar. Users will be able to be a part of as many clubs as they wish and will have to keep themselves accountable for actually reading the books. 

You can view the deployed app at (https://online-book-club.surge.sh)

## MVP Goals
* Authorization (sign up, log in)
* Create a book club
  - Define by club name, book, rules of conduct
  - The book to be searchable using an external api
* Write comments inside the book club

## Post-MVP Goals
* Expand admin-only book club functionality
  - Update book
  - Add members
  - Update rules
  - Remove members

## Post-Post-MVP Goals
* Admins need to get permission before adding someone to a club
* Users can upload their profile pictures to display as thumbnails next to their comments
* Subcomments to allow for discussion threads on specific aspects of the book

## Project History and Process
* You can view the initial wireframes, front-end component hierarchy, and ERD here: https://marvelapp.com/8a3c2d3 (Component Hierarchy and ERD WIP)
* Thank you to Goodreads API for book titles, descriptions, and images : https://www.goodreads.com/api (endpoints TBD)
* The app is made using Ruby on Rails and React frameworks; used bcrypt & JWT for authentication
* External sources:
  - Used Google Books API to display information on various volumes chosen each club
  - Used clipart-library.com book clipart as a placeholder for the books for which 
* server side routes
  - /users/:id
  - /clubs/:id/book
  - /comments
* MVP Timeline

| Goal | Complete By | Status |
| ------------ | ------------ | ------------ |
| Auth | Monday  | :white_check_mark: | 
| Tables (User, Club, Comment) | Monday | :white_check_mark:| 
| Table relationships | Monday | :white_check_mark: | 
| Connect to Frontend | Monday | :white_check_mark: | 
| Auth Frontend | Monday | :white_check_mark: | 
| Basic Frontend (user view only w/ hardcoded seed data) | Tuesday | :white_check_mark: | 
| Books api endpoints & import| Tuesday | :white_check_mark: | 
| Books search functionality|Tuesday| :white_check_mark: | 
| Create club (add book, rules) | Wednesday |:white_check_mark:  | 
| Clubs display|Wednesday| :white_check_mark: | 
| Write comments|Wednesday|:white_check_mark: | 
| Comments display|Wednesday|:white_check_mark: | 
| Improve create club (add deadline, add users, update book) | Thursday | :white_check_mark: | 
| Titles and Text Clean Up |Monday|:white_check_mark:| 
| Styling |Tuesday| :white_check_mark:| 


* Post-MVP Timeline 

| Goal | Complete By | Status |
| ------------ | ------------ | ------------ |
| Google books button |EOM| | 
| Responsiveness |EOM| | 
| Add book button (instead of writing in google books id) |EOM| | 
| Members' ability to leave clubs |EOM| | 
| Show timing on comments (level of detail TBD) |EOM| | 
| Team up with UX to revising styling, maybe even design |May| | 
| Like comments |May| | 
| Add sub-comments |May| | 
| Add a sorting functionality to see your favorite member's comments first |May| | 

