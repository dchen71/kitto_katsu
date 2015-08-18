Rails.application.routes.draw do
  root 'static_pages#index'
  get 'about' => 'static_pages#about'
  get 'kitkats' => 'kit_kats#index'
  get 'locations' => 'static_pages#locations'
end
