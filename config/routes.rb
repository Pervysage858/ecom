Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  root 'home#index'
  get '/dashboard', to: 'home#dashboard'
  resources :products 
end
 