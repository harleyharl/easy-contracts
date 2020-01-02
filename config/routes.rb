Rails.application.routes.draw do
  # resources :contracts
  # resources :users

  scope '/api' do
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      post ':users', to: 'users#create'
  end
end
