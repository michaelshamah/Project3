Rails.application.routes.draw do
  root 'welcome#index'
  get '/univs' => "univs#index"
  get '/apis' => "apis#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
