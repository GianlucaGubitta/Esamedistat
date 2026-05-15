Rails.application.routes.draw do
  root 'pages#index'
  
  get 'virtual_dom', to: 'pages#virtual_dom'
  get 'forest_state', to: 'pages#forest_state'
  get 'reactive_villas', to: 'pages#reactive_villas'
  get 'biophilic_sync', to: 'pages#biophilic_sync'
end
