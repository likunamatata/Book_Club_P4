Rails.application.routes.draw do

  # get 'users/:user_id/clubs', to: 'users#show_clubs'
  # post 'users/:user_id/clubs', to: 'users#create_club'
  # get 'clubs/:club_id/users/:user_id', to: 'clubs#add_user'

  resources :comments

  post 'clubs/:club_id/comments', to: 'comments#create'
  get 'clubs/:club_id/comments', to: 'comments#index'
  delete 'clubs/:club_id/comments/:comment_id', to: 'comments#destroy'

  get 'clubs/byuser/:user_id', to: 'clubs#index'
  get 'clubs/byclub/:club_id', to: 'clubs#read_one'
  put 'clubs/byclub/:club_id', to: 'clubs#update'
  post 'clubs/byclub/:club_id/members', to: 'clubs#add_member'
  get 'clubs/byclub/:club_id/members', to: 'clubs#get_members'

  resources :users 
  resources :clubs

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
