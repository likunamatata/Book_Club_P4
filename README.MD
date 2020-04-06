# Book Club

The purpose of this app is to create an online space for private book club discussions and commentary. It is my attempt at countering one of the unfortunate side effects of the current pandemic -- erasure of common meeting spaces that are good for concentrated conversations by being simple, aesthetically pleasing, and free of distractions (like coffee shops without wifi or your favorite professor's office). The app will allow the users to register, create book clubs, invite their friends to their book clubs, and be invited to their friends' book clubs. The admin (i.e., the creator)of each club will set the current book that is being read so that they, together with other members of the club, can share commentary about the book or certain passages as they keep flipping through the pages. Each club can agree on their own rules to avoid spoilers and to shape discussions and there will be a dedicated space to list these rules. A single club will be able to have a list of multiple books to work through. For example, once the American Female Authors club is done reading Sula, the admin can update the "book of the club" to The Bell Jar. Users will be able to be a part of as many clubs as they wish and will have to keep themselves accountable for actually reading the books. 

## MVP Goals
* Authorization (sign up, log in)
* Create a book club (name, book, rules, members)
  - Write comments
  - Update book (only by creator)
  - Add members (only by creator)
  - Update rules (only by creator)
  - Remove members (only by creator)
  - Write comments


## Post-MVP Goals
* Admins need to get permission before adding someone to a club
* Users can upload their profile pictures to display as thumbnails next to their comments
* Subcomments to allow for discussion threads on specific aspects of the book

## Project History and Process
* You can view the initial wireframes, front-end component hierarchy, and ERD here: https://marvelapp.com/8a3c2d3 (Component Hierarchy and ERD WIP)
* Thank you to Goodreads API for book titles, descriptions, and images : https://www.goodreads.com/api (endpoints TBD)
* The app is made using Ruby on Rails and React frameworks; used bcrypt & JWT for authentication
* server side routes
  - /users/:id
  - /clubs/:id/book
  - /comments
* Timeline

| Goal | Complete By | Status |
| ------------ | ------------ | ------------ |
| Auth | Monday  | :white_check_mark: |
| Tables| Monday |
| Table relationships | Monday |
| Connect to Frontend | Monday |
| Auth Frontend | Monday |
| Books api search| Tuesday |
| Basic Frontend (user view only w/ hardcoded seed data) | Tuesday |
| Create club (add book, deadline, rules, users) Wednesday |
| Admin Club view & functionality | Wednesday |