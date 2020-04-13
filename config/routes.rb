Rails.application.routes.draw do
  # resources :contracts
  # resources :users

  scope '/api' do
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      post '/contracts', to: 'contracts#create'
      post ':users', to: 'users#create'
  end
end
