Rails.application.routes.draw do
  # resources :contracts
  # resources :users

  scope '/api' do
    namespace :v1 do
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#show'
      post ':users', to: 'users#create'
    end
  end
end
