Rails.application.routes.draw do

  # get 'users/:user_id/clubs', to: 'users#show_clubs'
  # post 'users/:user_id/clubs', to: 'users#create_club'
  # get 'clubs/:club_id/users/:user_id', to: 'clubs#add_user'

  resources :comments

  post 'clubs/:club_id/comments', to: 'comments#create'
  get 'clubs/:club_id/comments', to: 'comments#index'

  resources :users do
    resources :clubs
  end 

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
