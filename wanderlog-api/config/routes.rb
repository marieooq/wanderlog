Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  match "/graphql", to: "graphql#execute", via: :options
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
